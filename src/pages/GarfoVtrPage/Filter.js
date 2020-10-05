import React from "react";
import {TextField} from "@material-ui/core";

export const Filter = ({vesselPermit,sailDate, handleVesselChange , handleSailDateChange}) =>{
    console.log('filter',sailDate);
    return (
        <div className={'left-edge'}>
            <TextField
            label='Vessel Permit:'
            className="number-of-input"
            value={vesselPermit ? vesselPermit :""}
            name="Filter vessel"
            type="number"
            min="0" max="999999"
            onChange={e => handleVesselChange(e)}
            />
            <TextField
                label='Sail Date'
                className="sail_date"
                value={sailDate}
                name="Filter sailDate"
                type="date"
                onChange={e => handleSailDateChange(e)}
            />
        </div>
    );
}