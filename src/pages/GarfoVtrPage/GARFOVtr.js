/* eslint-disable no-undef */
import React from 'react';
import {connect} from "react-redux";

import TitleBar from '../../components/TitleBar';
import Divider from '@material-ui/core/Divider';
import './GARFOVtr.scss';
import VtrList from "./GarfoVtrList";
import {mapVtrStateToProps} from '../../services/mapStateToProps';
import {vtrListRequest} from '../../actions/vtrList';
import {bindActionCreators} from "redux";
import axios from "axios";
import {baseServerUrl, default_request} from "../../constants/default_request";
import moment from "moment";
import {Filter} from "./Filter";

class VtrListPage extends React.Component {
    constructor(props) {
        super(props);
        this.editClick = this.editClick.bind(this);
        this.pdfViewHandling = this.pdfViewHandling.bind(this);
        this.pdfSaveHandling = this.pdfSaveHandling.bind(this);
        this.filterVesselChange = this.filterVesselChange.bind(this);
        this.filterSailDateChange = this.filterSailDateChange.bind(this);
        this.isTestUser = this.isTestUser.bind(this);
        console.log(props);
        this.state = {
            vesselPermit:'',
            sailDate:''
        };
    }

    pdfSaveHandling(event) {
        let request_url = baseServerUrl + '/apps/fol/base_api/pdfVtr';
        const tripId = event.currentTarget.dataset.tripId;
        if (this.isTestUser(this.props.auth.user_app_status)) {
            request_url.concat('/test', request_url);
        }
        const request_data = default_request(this.props.auth.client_id, this.props.auth.token, this.props.auth.user_app_status);
        request_data.tripid = tripId;
        request_data.base64 = true;

        axios({
            method: 'POST',
            url: request_url,
            data: JSON.stringify(request_data),
            responseType: 'arraybuffer',
            headers: {
                'Accept': 'application/pdf'
            }
        })
            .then((response) => {
                console.log(response);

                let d = moment();
                let blob = new Blob([response.data], {type: 'application/pdf'});
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = 'vtr_' + tripId + '_' + d.format("YYYYMMDD_HHmmss") + '.pdf';
                link.click();
            }).catch((error) => {
            //TODO: do something when error
            console.log('garfoVTR_PDF', error);
        });
    }

    pdfViewHandling(event){
        alert('Clicked PDF');
        let request_url = baseServerUrl +'/apps/fol/base_api/pdfVtr';
        const tripId = event.currentTarget.dataset.tripId;
        if(this.isTestUser(this.props.auth.user_app_status)){
            request_url.concat('/test' , request_url);
        }
        const request_data = default_request(this.props.auth.client_id,this.props.auth.token,this.props.auth.user_app_status);
        request_data.tripid = tripId;
        request_data.base64 = true;

        axios({
            method: 'POST',
            url: request_url,
            data: JSON.stringify(request_data),
            responseType: 'arraybuffer',
            headers: {
                'Accept': 'application/pdf'
            }
        })
            .then((response) => {
                console.log(response);

                let blob = new Blob([response.data], { type: 'application/pdf' } );
                let link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.target = '_blank';
                link.click();
                console.log('garfoVTR_pdfHandling', response);

            }).catch((error) => {
            //TODO: do something when error
            console.log('garfoVTR_PDF',error);
        });
    };

    editClick(event){
        let request_url = baseServerUrl +'/apps/fol/base_api/vtr_docid';
        if(this.isTestUser(this.props.auth.user_app_status)){
            request_url.concat('/test' , request_url);
        }
        const request_data = default_request(this.props.auth.client_id,this.props.auth.token,this.props.auth.user_app_status);
        request_data.tripid = event.currentTarget.dataset.tripId;

        axios({
            method: 'POST',
            url: request_url,
            data: JSON.stringify(request_data)
        })
            .then((response) => {
                //TODO : do something with response
                console.log('garfoVTR', response);
                if(response.data.hasOwnProperty('STATUS') && response.data.STATUS.toUpperCase() === 'SUCCESS' && response.data.hasOwnProperty('VTR_DOCID')){
                    alert('retreived trip' + JSON.stringify(response.data.VTR_DOCID));
                }else{
                   //TODO : do something when no correct status or no data
                    // returned.
                    alert('garfoVTR response but no data or wrong status');
                    console.log('garfoVTR', response.data);
                }
            }).catch((error) => {
           //TODO: do something when error
            console.log('garfoVTR',error);
            alert('garfoVTR in catch error');
        });
    }

    filterVesselChange(Event){
        this.setState({vesselPermit:Event.target.value });
    }
    filterSailDateChange(Event){
        let newDateTime = Event.target.value;
        if(newDateTime !== ''){
            let bDateTime = moment(newDateTime).format("YYMMDD");
            this.setState({sailDate: newDateTime,filterSailDate:bDateTime});
        }else {
            this.setState({sailDate: newDateTime,filterSailDate:''});
        }
    }

    isTestUser(testValue){
        if(testValue === 'PROD'){
            return false;
        }
        return true;
    }

  componentDidMount() {
        const {actions} = this.props;
        //TODO: can we add some logic to add in to prevent this always to be
        // requested
        //if (trips.length === 0) {
      const payload = default_request(this.props.auth.client_id,this.props.auth.token,this.props.auth.user_app_status);
            actions.loadVtrList(payload);
        //}

    }

    render()
    {
        let trips = this.props.trips.slice();
        if(this.state.vesselPermit && trips.length > 0) {
            trips = trips.filter(trip =>
                trip.VESSEL_PERMIT_NUM.includes(this.state.vesselPermit)
            );
        }
        if(this.state.filterSailDate && trips.length > 0) {
            console.log('sailDate',this.state.filterSailDate);
            trips = trips.filter(trip =>
                trip.DATE_SAIL.includes(this.state.filterSailDate)
            );
        }
        return (
            <div>
                <TitleBar
                    title="GARFO VTR's"
                />
                <Divider/>
                <Filter vesselPermit={this.state.vesselPermit} sailDate={this.state.sailDate} handleSailDateChange={this.filterSailDateChange} handleVesselChange={this.filterVesselChange}/>
                <Divider/>
                {trips.length > 0 && <VtrList vtrs={trips} editClick={this.editClick} pdfViewHandling={this.pdfViewHandling} pdfSaveHandling={this.pdfSaveHandling}/>}
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: {
            loadVtrList: bindActionCreators(vtrListRequest, dispatch),
        }
    };
}


export default connect(
    mapVtrStateToProps,
    mapDispatchToProps
)(VtrListPage);


