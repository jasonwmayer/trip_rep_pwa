import React from "react";

function ShowSalesColumn({dataSet,tripNr,salesNr, keyIndex,nrColumns}){
    //console.log('effortColumn',dataSet);
    //console.log('effortColumn',keyIndex);
    let newDataSet = [];
    let currentKey = keyIndex;
    for (let i =0 ; i < nrColumns; i++) {
        currentKey++;
        //console.log('effortColumn_current_loop',i);
        //console.log('effortColumn_currentKey',currentKey);
        if(dataSet[currentKey] ) {
            newDataSet[i] = dataSet[currentKey];
        }else{
            break;
        }
    }
    //console.log('effortColumn',newDataSet);
    console.log('salesColumn_sales','trip'+tripNr+'sales'+salesNr+keyIndex);
    return(
        <tr key={'trip'+tripNr+'sales'+salesNr+'key'+keyIndex}>
            {newDataSet.map((dataRecord)=>
                <td key={'trip'+tripNr+'sales'+salesNr+'_'+keyIndex+'_'+dataRecord.key}>
                    <div key={'trip'+tripNr+'sales'+salesNr+'_'+keyIndex+'_'+dataRecord.key+'_div'}>
                        <label>{dataRecord.key}</label>
                        <div>{dataRecord.value ? dataRecord.value : <span>&nbsp;</span>}</div>
                    </div>
                </td>
            )}
        </tr>
    )
}

function HandleSales ({sales , salesNr,tripNr}){
     //console.log(subTrips);
    //console.log(effortNr);
    //console.log(subTrips[effortNr]);
    let dataSet = Object.keys(sales[salesNr]).map(
        function (keyIndex , keyName , array){
            //console.log('subtrip',keyIndex);
            //console.log('subtrip',keyName);
            //console.log('subtrip',array);
            return {'key':array[keyName],'value' : sales[salesNr][array[keyName]]};
        }
    );
    const nrColumns = 3;

    return(
        dataSet.map(
            function (keyIndex , keyName , array){
                //console.log('subtrip_loop',keyIndex);
                //console.log('subtrip_loop','trip'+tripNr+'effort'+effortNr+'_'+keyName);
                //console.log('subtrip_loop',array);
                //console.log('subtrip_loop',dataSet);
                if(keyName%nrColumns === 0){
                    console.log('showSalesColumns','trip'+tripNr+'sales'+salesNr+'_'+keyName);
                    return <ShowSalesColumn dataSet={dataSet} tripNr={tripNr} salesNr={salesNr}
                                             keyIndex={keyName} nrColumns={nrColumns} key={'trip'+tripNr+'sales'+salesNr+'_'+keyName}/>
                }else{
                    //console.log('DO NOT showEffortColumns',keyIndex)
                    return null;
                }
            }
        )
    )
}

function JsonSales ({trips, tripNr}){
    //console.log(trips);
    //console.log(tripNr);
    return (
        <>
            {trips[tripNr]['sales'] && trips[tripNr]['sales'].length > 0 &&
                trips[tripNr]['sales'].map(
                    function (value, index, array) {
                        //console.log('effortList',value);
                        //console.log('effortList',index);
                        //console.log('effortList',array);
                        return (
                            <>
                             <tr key={'trip_'+tripNr+'_sales_'+index+'header'}>
                                 <td><b>Sales {index}</b></td>
                             </tr>
                             <HandleSales sales={array} salesNr={index} tripNr={tripNr} key={'trip_'+tripNr+'_sales_'+index}/>
                            </>
                        )
                    }
                )
            }
        </>
    );
}

export default JsonSales;