import React, { Component } from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";
import { connect } from "react-redux";
import MenuIcon  from '@material-ui/icons/Menu';

import AddIcon from '@material-ui/icons/Add';
import { logout } from "../../actions/auth";
import Typography from "@material-ui/core/Typography";
import IconButton from '@material-ui/core/IconButton';
import mapStateToProps from "../../services/mapStateToProps";

class NavBar extends Component {

    render() {
        return (
            <AppBar position="static" style={{ display: "flex" }}>
                <Toolbar>
                    <div className="responsive-drawer drawer-button-container">
                        {this.props.isAuthUser ? (
                            <>
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    edge="end"
                                    onClick={this.props.toggle}
                                    className='col-sm-1 button'
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    className='login-title'
                                    noWrap
                                >
                                    NOAA FISH ONLINE
                                </Typography>
                                <Link to={`${process.env.PUBLIC_URL}/start-new-trip`}>
                                    <AddIcon className="add-reports-button" />
                                </Link>
                            </>
                        ) : (
                            <Link to={`${process.env.PUBLIC_URL}/login`}>
                                <Button color="inherit">Login</Button>
                            </Link>
                        )
                        }
                    </div>

                </Toolbar>
            </AppBar>
        );
    }
}

export default connect(mapStateToProps,{logout})(
    NavBar
);

//export default connect(({ isAuthUser }) => ({ isAuthUser}), { logout })(
//    NavBar
//);