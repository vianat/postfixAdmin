import React from 'react';
import css from './LoginPage.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from "@mui/material";

const LoginPage = () => {
    return (
        <div className={css.loginPage}>
            <div className={css.loginForm}>
                <div>
                    <TextField
                        required
                        id="login"
                        label="Login"
                        variant="filled"
                    />
                </div>
                <div>
                    <TextField
                        required
                        id="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                    />
                </div>
                <div>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox/>} label="keep me log in" />
                    </FormGroup>
                    <Link href="https://www.w3schools.com" underline="none">{'Forgot password?'}</Link>
                </div>
                <Button variant="contained" color="success">log in</Button>
            </div>
        </div>
    );
}

export default LoginPage;