/* eslint-disable no-undef */
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

import './BottomNav.scss';
  
const BottomNav = (props) => { 
const {
      //  bottomNavState, 
       setBottomNavState
      } = useState(false);
const handleCloseClick = () => {
  setBottomNavState(true)
  }

    return (
      <div className="bottom-nav">
        <Button 
          onClick={handleCloseClick}
        >
          {/* {bottomNavState ? <b>Close X</b> : <span>Close X</span>}
          {props.handleCloseClick} */}
        </Button>
      </div>
    )
  }

  export default BottomNav;
  