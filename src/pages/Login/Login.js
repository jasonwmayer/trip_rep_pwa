import React, { useState } from "react";
import {TextField, Button, Box} from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import Alerts from "../../components/Alerts/Alerts";
import Logo from "../../assets/logo_only.png";
import LogoText from "../../assets/logo_text.png";
import {login_request} from "../../constants/default_request";
import {mapLoginStateToProps} from "../../services/mapStateToProps";

export default connect(mapLoginStateToProps, { login })(props => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    console.log('login_props',props);

const submitForm = () => {
        let alertDiv = document.getElementsByClassName('alerts-login');
        alertDiv[0].children[1].innerHTML = error;

        if( !alertDiv[0].classList.contains('hidden')) {
            alertDiv[0].classList.add('hidden');
        }
        setError("");

        if (username === "" || password === "") {
            setError("Fields are required");
            return;
        }

        const payload = login_request(username , password);

        props.login(payload);
        setUsername('');
        setPassword('');
    };

    return (
        <form className='login-form'>
            <Box className='noaa-logo-container'>
                <img className='noaa-logo-only' src={Logo}
                     alt="N O A A dot gov logo"/>
            </Box>
            <div>
                <img className='noaa-logo-text' src={LogoText}
                     alt="N O A A Fisheries"/>
            </div>
            <TextField
                label="UserName"
                variant="outlined"
                fullWidth
                className="form-input"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <TextField
                label="Password"
                variant="outlined"
                fullWidth
                className="form-input"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                className="form-input"
                size="large"
                onClick={submitForm}
            >
                Login
            </Button>
            {error ? (
                <Alerts
                    className="error-log"
                    severity="error"
                    alertMessage={error}
                />
            ):
            <div/>}

                <Alerts
                    className="alerts-login hidden"
                    severity="error"
                    alertMessage={'We have an error' }
                />

        </form>
    );
});

