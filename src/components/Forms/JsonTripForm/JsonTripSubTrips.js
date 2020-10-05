import React from "react";

function HandleCatch({catchRecords ,catchNr,tripNr,effortNr }){
    //console.log('catch',catchRecords);
    //console.log('catch',catchNr);
    let dataSet = Object.keys(catchRecords[catchNr]).map(
        function (keyIndex , keyName , array){
           // console.log('catch',keyIndex);
           // console.log('catch',keyName);
           // console.log('catch',array);
           return {'key':array[keyName],'value' : catchRecords[catchNr][array[keyName]]};
        }
    );
    //console.log(dataSet);
    return(
        <tr key={'trip_'+tripNr+'effort'+effortNr+catchNr}>
            {dataSet.map((catchRecord , index)=>
                <td key={'trip_'+tripNr+'effort'+effortNr+catchNr+index}>
                    <div>
                        <label>{catchRecord.key}</label>
                        <div>{catchRecord.value ? catchRecord.value : <span>&nbsp;</span>}</div>
                    </div>
                </td>
            )}
        </tr>
    )
}

function ShowEffortColumn({dataSet,tripNr,effortNr, keyIndex,nrColumns}){
    //console.log('effortColumn',dataSet);
    //console.log('effortColumn',keyIndex);
    let newDataSet = [];
    let catchDataSet = [];
    let currentKey = keyIndex;
    for (let i =0 ; i < nrColumns; i++) {
        currentKey++;
        //console.log('effortColumn_current_loop',i);
        //console.log('effortColumn_currentKey',currentKey);
        if(dataSet[currentKey] ) {
            if( dataSet[currentKey].key !== 'catch') {
                newDataSet[i] = dataSet[currentKey];
            }else{
                catchDataSet = dataSet[currentKey].value;
            }
        }else{
            break;
        }
    }
    //console.log('effortColumn',newDataSet);
    console.log('effortColumn_catch','trip'+tripNr+'effort'+effortNr+keyIndex);
    return(
        <>
        <tr key={'trip'+tripNr+'effort'+effortNr+'key'+keyIndex}>
            {newDataSet.map((dataRecord)=>
                <td key={'trip'+tripNr+'effort'+effortNr+'_'+keyIndex+'_'+dataRecord.key}>
                    <div key={'trip'+tripNr+'effort'+effortNr+'_'+keyIndex+'_'+dataRecord.key+'_div'}>
                        <label>{dataRecord.key}</label>
                        <div>{dataRecord.value ? dataRecord.value : <span>&nbsp;</span>}</div>
                    </div>
                </td>
            )}
        </tr>
            {catchDataSet && catchDataSet.length > 0 &&
            catchDataSet.map(
                function (value, index, array) {
                    //console.log('catchList',value);
                    //console.log('catchList',index);
                    //console.log('catchList',array);
                    return (<>
                            <tr key={'trip'+tripNr+'effort'+effortNr+'catch'+index+'header'}>
                                <td><b>Catch {index}</b></td>
                            </tr>
                            <HandleCatch catchRecords={array} tripNr={tripNr} effortNr={effortNr} catchNr={index}  key={'trip'+tripNr+'effort'+effortNr+'catch'+index}/>
                        </>
                    )
                }
            )
            }
    </>
    )
}

function HandleSubTrips ({subTrips , effortNr,tripNr}){
     //console.log(subTrips);
    //console.log(effortNr);
    //console.log(subTrips[effortNr]);
    let dataSet = Object.keys(subTrips[effortNr]).map(
        function (keyIndex , keyName , array){
            //console.log('subtrip',keyIndex);
            //console.log('subtrip',keyName);
            //console.log('subtrip',array);
            return {'key':array[keyName],'value' : subTrips[effortNr][array[keyName]]};
        }
    );
    const nrColumns = 4;

    return(
        dataSet.map(
            function (keyIndex , keyName , array){
                //console.log('subtrip_loop',keyIndex);
                //console.log('subtrip_loop','trip'+tripNr+'effort'+effortNr+'_'+keyName);
                //console.log('subtrip_loop',array);
                //console.log('subtrip_loop',dataSet);
                if(keyName%nrColumns === 0){
                    console.log('showEffortColumns','trip'+tripNr+'effort'+effortNr+'_'+keyName);
                    return <ShowEffortColumn dataSet={dataSet} tripNr={tripNr} effortNr={effortNr}
                                             keyIndex={keyName} nrColumns={nrColumns} key={'trip'+tripNr+'effort'+effortNr+'_'+keyName}/>
                }else{
                    //console.log('DO NOT showEffortColumns',keyIndex)
                    return null;
                }
            }
        )
    )
}

function JsonSubTrips ({trips, tripNr}){
    //console.log(trips);
    //console.log(tripNr);
    return (
        <>
            {trips[tripNr]['subtrips'] && trips[tripNr]['subtrips'].length > 0 &&
                trips[tripNr]['subtrips'].map(
                    function (value, index, array) {
                        //console.log('effortList',value);
                        //console.log('effortList',index);
                        //console.log('effortList',array);
                        return (
                            <>
                             <tr key={'trip_'+tripNr+'_effort_'+index+'header'}>
                                 <td><b>Effort {index}</b></td>
                             </tr>
                             <HandleSubTrips subTrips={array} effortNr={index} tripNr={tripNr} key={'trip_'+tripNr+'_effort_'+index}/>
                            </>
                        )
                    }
                )
            }
        </>
    );
}

export default JsonSubTrips;