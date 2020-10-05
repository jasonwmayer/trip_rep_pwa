import React, {Component} from 'react';
import JsonTripDocument from "./JsonTripDocument";
import {Divider} from "@material-ui/core";

class JsonTripForm extends Component {
    state = {
    loopArray : [],
        trips : []
}

    componentDidMount() {
        console.log('JsonTripForm_props',this.props);
        let loopArray = [];
        if(Array.isArray(this.props.trips)) {
            const NrTrips = this.props.trips.length;
            loopArray = Array.apply(null, Array(NrTrips)).map(function (x, i) { return i; })
            this.setState({loopArray:loopArray, trips:this.props.trips});
        }
    }

    render()
    {
        return (
            <>
                {  this.state.trips.length >0 &&
                this.state.trips.map(
                    function (value, index, array) {
                        //console.log('tripList',value);
                        //console.log('tripList',index);
                        //console.log('tripList',array);
                       return (
                           <div key={'tripForm'+index}>
                           <div><b>Trip {index}</b></div>
                           <Divider/>
                           <JsonTripDocument trips={array} tripNr={index} key={'tripDocument'+index} />
                           </div>
                        )
                    }
                )
            }
</>
        )
    }
}

export default JsonTripForm;
