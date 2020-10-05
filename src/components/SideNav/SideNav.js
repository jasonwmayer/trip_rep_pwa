import React from "react";
import { Link } from "react-router-dom";
import {Button, Divider} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ReplyAllIcon from '@material-ui/icons/ReplyAll';
import './SideNav.css';
import {connect} from "react-redux";
import {logout} from "../../actions/auth";
import mapStateToProps from '../../services/mapStateToProps';

class SideNavBar extends React.Component {

    render(){
      return(
        <div onClick={this.props.backdrop}>
        {this.props.isAuthUser ? (
    <>
    <Link to={`${process.env.PUBLIC_URL}/home`} className='side-nav'>
        <Button color="inherit">
        <HomeIcon/>
            <span>{'Home'}</span>
        </Button>
    </Link>
    <Divider/>
    <Link to={`${process.env.PUBLIC_URL}/start-new-trip`}>
        <Button color="inherit">New Trip</Button>
    </Link>
    <Divider/>
    <Link to={`${process.env.PUBLIC_URL}/vtr`}>
        <Button  color="inherit">VTR Trip list</Button>
    </Link>
    <Divider/>
    <Link to={`${process.env.PUBLIC_URL}/vtr-json-open-trip`}>
        <Button  color="inherit">Open JSON VTR trip data</Button>
    </Link>
    <Divider/>
    <Link to={`${process.env.PUBLIC_URL}/login`}>
        <Button color="inherit"
                onClick={this.props.logout}>
            <ReplyAllIcon/>
            Logout
        </Button>
    </Link>
    <Divider/>
</>
                ) : (
<>
                        <Link to={`${process.env.PUBLIC_URL}/login`}>
                            <Button color="inherit">Login</Button>
                        </Link>
</>
                )
                }
</div>
        )
    }

}

export default connect((mapStateToProps), { logout })(
    SideNavBar
);