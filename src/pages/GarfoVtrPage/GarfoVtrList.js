import React from "react";
import Moment from "react-moment";
import {Button, Divider, Grid} from "@material-ui/core";

function VtrList ( {vtrs, editClick,pdfSaveHandling, pdfViewHandling}){
    const middleXsSize = 5;

    return (
             vtrs.map(vtr => {
                return (
                    <div key={vtr.TRIP_ID}>
                      <Grid container alignItems={'flex-start'} spacing={2} className={'left-edge'}>
                        <Grid item xs={3}>Trip:</Grid>
                        <Grid item xs={middleXsSize}>{vtr.TRIP_ID}</Grid>
                        <Grid item xs={3}>
                            <Button
                                  variant="contained"
                                  color="primary"
                                  fullWidth
                                  className="form-input edit-button"
                                  size="large"
                                  onClick={editClick}
                                  key={'edit_'+vtr.TRIP_ID}
                                  data-trip-id={vtr.TRIP_ID}
                              >Edit
                            </Button>
                        </Grid>
                     </Grid>
                     <Grid container alignItems={'flex-start'} spacing={2} className={'left-edge'}>
                       <Grid item xs={3}>Date Sailed:</Grid>
                       <Grid item xs={middleXsSize}><Moment parse={"DD-MM-YY LT"} format={"DD-MMM-YY LT"}>{vtr.DATE_SAIL}</Moment></Grid>
                       <Grid item xs={3}>
                         <Button
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="form-input pdf-save-button"
                            size="large"
                            onClick={pdfSaveHandling}
                            key={'pdf_save_'+vtr.TRIP_ID}
                            data-trip-id={vtr.TRIP_ID}
                            >Download PDF
                         </Button>
                       </Grid>
                     </Grid>
                     <Grid container alignItems={'flex-start'} spacing={2} className={'left-edge'}>
                       <Grid item xs={3}>Date Landed:</Grid>
                       <Grid item xs={middleXsSize}><Moment parse={"DD-MM-YY LT"} format={"DD-MMM-YY LT"}>{vtr.DATE_LAND}</Moment></Grid>
                       <Grid item xs={3}>
                         <Button
                             variant="contained"
                             color="primary"
                             fullWidth
                             className="form-input pdf-view-button"
                             size="large"
                             onClick={pdfViewHandling}
                             key={'pdf_view_'+vtr.TRIP_ID}
                             data-trip-id={vtr.TRIP_ID}
                          >View PDF
                         </Button>
                       </Grid>
                     </Grid>
                     <Grid container alignItems={'flex-start'} spacing={2} className={'left-edge'}>
                       <Grid item xs={3}>Permit Nbr:</Grid>
                       <Grid item xs={middleXsSize}>{vtr.VESSEL_PERMIT_NUM}</Grid>
                     </Grid>
                     <Divider/>
                    </div>
                );
            })
    );
}

export default VtrList;