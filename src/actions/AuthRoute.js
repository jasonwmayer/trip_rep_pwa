import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router";
import mapStateToProps from '../services/mapStateToProps';


const AuthRoute = props => {
    const { isAuthUser, type } = props;
    if (type === "guest" && isAuthUser) return <Redirect to={`${process.env.PUBLIC_URL}/home`} />;
    else if (type === "private" && !isAuthUser) return <Redirect to={`${process.env.PUBLIC_URL}/login`} />;

    return <Route {...props} />;
};

export default connect(mapStateToProps)(AuthRoute);