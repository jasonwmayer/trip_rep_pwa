import validationList from "../json/incrementals.json";
import ActivityJson from "../json/Activity.json";
import ChartAreaJson from "../json/ChartArea.json";
import DealerJson from "../json/Dealers.json";
import GearJson from "../json/Gear.json";
import OperatorsJson from "../json/Operators.json";
import PermitsJson from "../json/Permits.json";
import SpeciesJson from "../json/Species.json";
import TripTypesJson from "../json/TripTypes.json";

import {UPDATE_SUCCESS_VALIDATIONS} from './actionTypes';

function loadJsonFileValidations(){
    let validations ={};
    validations.activity = ActivityJson;
    validations.chartArea = ChartAreaJson;
    validations.dealers = DealerJson;
    validations.gear = GearJson;
    validations.operator = OperatorsJson;
    validations.permit = PermitsJson;
    validations.species = SpeciesJson;
    validations.tripType = TripTypesJson;
    return validations;
}

export const updateValidations = ({ response }) =>{
    console.log("updateValidations", response);
    let newDealerDate , newPermitDate, newOperatorDate;
    let responseKeys = Object.keys(response);
    let storedLocalValidations = localStorage.getItem('validations');
    let rawCurrentTimeStamps = localStorage.getItem('timestamp');
    console.log("oldTimestamp" , rawCurrentTimeStamps);
    let currentTimeStamps = JSON.parse(rawCurrentTimeStamps);
    let validationData;
    if(storedLocalValidations === null){
        validationData = loadJsonFileValidations();
        console.log("files",validationData);
    }else{
        validationData = JSON.parse(storedLocalValidations);
        console.log("saved",validationData);
    }
    for (let a = 0; a < validationList.length; a++) {
        if(responseKeys.includes(validationList[a])){
            let currentKey = validationList[a];
            console.log('found following key in' +
                ' response ' + currentKey);
            if(validationList[a].toLowerCase().startsWith('dealer')){
                //Loop through new records
                let newDealers = response[currentKey];
                console.log(newDealers);
                newDealerDate = newDealers.timestamp;
                currentTimeStamps[currentKey] = newDealerDate;
                let dealer = newDealers[0];
                console.log("existing dealers " + validationData.dealers.length);
                if(Array.isArray(dealer) && dealer.length > 0) {
                    console.log("Loop over new dealers");
                    for (let k = 0; k < dealer.length; k++) {
                        let exists = false;
                        let nrDealers = validationData.dealers.length;
                        if ( nrDealers> 0) {
                            for (let j = 0; j < nrDealers; j++) {
                                if (validationData.dealers[j].DEALER_PERMIT_NUMBER === dealer[k].DEALER_PERMIT_NUMBER) {
                                    validationData.dealers[j] = dealer[k];
                                    exists = true;
                                    break;
                                }
                            }
                        }

                        if(exists === false){
                            validationData.dealers[nrDealers] = dealer[k];
                        }
                    }

                    let sortedDealer = validationData.dealers.slice();
                    if(dealer.length >1){
                        //TODO put the first 9 dealer_permit_number in front
                        // of the array, while the rest remains sorted by name
                        sortedDealer.sort(function(a, b){
                            let x = a.DEALER_NAME + " " + a.DEALER_PERMIT_NUMBER;
                            let y = b.DEALER_NAME + " " + b.DEALER_PERMIT_NUMBER;
                            if (x < y) {return -1;}
                            if (x > y) {return 1;}
                            return 0;
                        });
                    }
                    console.log("New number of dealers " + validationData.dealers.length);
                }
            }else if(validationList[a].toLowerCase().startsWith('operator')){
                let newOperators = response[currentKey];
                console.log(newOperators);
                newOperatorDate = newOperators.timestamp;
                currentTimeStamps[currentKey] = newOperatorDate;
                let operator = newOperators[0];
                for (let i = 0; i < operator.length; i++) {
                    let exists = false;
                    for(let j = 0; j < validationData.operator.length; j++){
                        if (validationData.operator[j].OPERATOR_KEY === operator[i].OPERATOR_KEY){
                            validationData.operator[j] = operator[i];
                            exists = true;
                            break;
                        }
                    }
                    if(exists === false){
                        let validationOperators = validationData.operator.length;
                        validationData.operator[validationOperators] = operator[i];
                    }
                }
            }else if(validationList[a].toLowerCase().startsWith('permit')){
                let newPermits = response[currentKey];
                console.log(newPermits);
                newPermitDate = newPermits.timestamp;
                currentTimeStamps[currentKey] = newPermitDate;
                let permit = newPermits[0];
                for (let i = 0; i < permit.length; i++) {
                    let exists = false;
                    for(let j = 0; j < validationData.permit.length; j++){
                        if (validationData.permit[j].PNUM === permit[i].PNUM){
                            validationData.permit[j] = permit[i];
                            exists = true;
                            break;
                        }
                    }
                    if(exists === false) {
                        let validationPermit = validationData.permit.length;
                        validationData.permit[validationPermit] = permit[i];
                    }
                }
                let sortedPermits = validationData.permit.slice();
                if(sortedPermits.length >1){
                    //TODO put the first 9 dealer_permit_number in front
                    // of the array, while the rest remains sorted by name
                    sortedPermits.sort(function(a, b){
                        let x = a.PNUM + " " + a.HULL_ID + " " + a.VES_NAME;
                        let y = b.PNUM + " " + b.HULL_ID + " " + a.VES_NAME;
                        if (x < y) {return -1;}
                        if (x > y) {return 1;}
                        return 0;
                    });
                    console.log(sortedPermits);
                }
            }
        }
    }
    console.log(validationData);
    localStorage.setItem('validations', JSON.stringify(validationData));
    if(newDealerDate || newOperatorDate || newPermitDate){
        console.log("newTimestamp" , currentTimeStamps);
        localStorage.setItem('timestamp', JSON.stringify(currentTimeStamps));
    }

    return{
        type: UPDATE_SUCCESS_VALIDATIONS,
        payload: response
    };
}
