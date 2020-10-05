import React from 'react';
import { Divider } from '@material-ui/core';
import TripFormsWizard from '../../components/TripFormsWizard';
import TitleBar from '../../components/TitleBar';
import BottomNav from '../../components/BottomNav';


import './StartNewTrip.scss';


export default props => (
    <div className="start-new-trip-container">
        <TitleBar 
          title="VTR" 
        />
        <Divider />
        <span 
          className="trip-type-select"
        >
         <TripFormsWizard />
        </span>
        <Divider />
        <BottomNav />
    </div>
);
