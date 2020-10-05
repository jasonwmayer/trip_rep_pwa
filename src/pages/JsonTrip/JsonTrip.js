import React from 'react';
import { Divider } from '@material-ui/core';
import TitleBar from '../../components/TitleBar';
import BottomNav from '../../components/BottomNav';
import JsonTripForm from "../../components/Forms/JsonTripForm";
import {connect} from "react-redux";
import {mapUserDetailStateToProps} from "../../services/mapStateToProps";

function getOpenTrip(clientID){
    console.log('JSON_TRIP_PAGE', clientID);
    let rawTrips = localStorage.getItem('trip_' + clientID);
    let trips = JSON.parse(rawTrips);
    if (trips && Array.isArray(trips) && trips.length > 0){
        return trips;
    }
    return false;
}
//    return { isAuthUser: prop1,client_id:prop2,token:prop3,token_expires: prop4,user_app_status:prop5};
export default connect(mapUserDetailStateToProps)(props => {
    console.log(props);
    let trips = getOpenTrip(props.client_id);

    return (
        <div className="start-new-trip-container">
            <TitleBar title="JSON display trips"/>
            <Divider/>
            {trips ?(
                    <JsonTripForm trips={trips} key={'tripForm'}/>
            ):
                <div>No open trips found</div>
            }
            <Divider/>
            <BottomNav/>
        </div>
    );
});
