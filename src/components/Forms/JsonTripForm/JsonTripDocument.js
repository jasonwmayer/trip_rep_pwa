import React from "react";
import JsonTripSubTrips from "./JsonTripSubTrips";
import JsonSales from "./JsonTripSales";

function ShowColumn({dataSet,tripNr, keyIndex}){
    //console.log(dataSet);
    //console.log(keyIndex);
   let newDataSet = [];
   let currentKey = keyIndex;
    for (let i =0 ; i < 4; i++) {
        currentKey++;
        //console.log(i);
        //console.log(currentKey);
        if(dataSet[currentKey]) {
            newDataSet[i] = dataSet[currentKey];
        }else{
            break;
        }
    }
 //console.log(newDataSet);
    return(
        <tr>
            {newDataSet.map((dataRecord)=>
                <td key={'trip_document'+tripNr+'_'+dataRecord.key}>
                    <div>
                        <label>{dataRecord.key}</label>
                        <div>{dataRecord.value ? dataRecord.value : <span>&nbsp;</span>}</div>
                    </div>
                </td>
                )}
       </tr>
    )
}

function HandleDocument({documentSet,tripNr}){
    let dataSet = Object.keys(documentSet).map(
        function (keyIndex , keyName , array){
            return {'key':array[keyName],'value' : documentSet[array[keyName]]};
        }
    );
    //console.log('document_data',dataSet);
    return(
        Object.keys(dataSet).map(
            function (keyIndex , keyName , array){
              if(keyIndex%4 === 0){
                  return <ShowColumn dataSet={dataSet} tripNr={tripNr} keyIndex={keyIndex} key={'trip_'+tripNr+'_'+keyIndex}/>
              }else{
                  return null;
              }
            }
        )
    )
}

function JsonTripDocument ({trips, tripNr}){
    //console.log(trips);
    //console.log(tripNr);
    return (
        <div>
            {trips[tripNr]['document'] &&
            <table className="table">
                <tbody>
                 <HandleDocument documentSet={trips[tripNr]['document']} tripNr={tripNr} key={'document'+tripNr}/>
                 <JsonTripSubTrips trips={trips} tripNr={tripNr} key={'trip'+tripNr+'subTrips'} />
                 <JsonSales trips={trips} tripNr={tripNr} key={'trip'+tripNr+'sales'} />
                </tbody>
            </table>
            }

        </div>
    );
}

export default JsonTripDocument;
