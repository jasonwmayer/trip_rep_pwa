/* eslint-disable no-unused-vars */
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import {  makeStyles } from '@material-ui/core/styles';

import './Alerts.scss';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Alerts(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
              props.severity === "error" ?
                <Alert 
                  className={props.className + ' ' + props.severity} 
                  severity={props.severity}
                >    
                  {props.alertMessage}
                </Alert> 
                : 
                <div />
            }
            {
              props.severity === "warning" ? 
                <Alert 
                  className="warning" 
                  severity="warning"
                >
                  Warning!{props.alertMessage}
                </Alert> 
                : 
                <div />
            }
            {
            props.severity === "info" ? 
              <Alert 
                className="info" 
                severity="info"
              >
                <b>Attempting log in...</b>
                <br/>
                {props.username}
                <br/>
                {props.alertMessage}
              </Alert> 
              : 
              <div />
            }
            {
              props.severity === "success" ? 
                <Alert className="success" severity="success">
                    Success!{props.alertMessage}
                </Alert> 
                : 
                <div />
            }
        </div>
    );
}
