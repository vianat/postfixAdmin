import React from 'react';
import css from './AddForward.module.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const AddForward = () => {
    return (
        <div className={css.AddForward}>
            <div className={css.main}>

                <div className={css.head}>Create a new email forward</div>

                <div className={css.forward}>
                    <div className={css.forwardField}>
                        <TextField
                            id="standard-basic"
                            label="Forward"
                            variant="outlined"
                            fullWidth/>
                    </div>
                    <div className={css.advise}>
                        To create a catch-all use an "*" as alias
                    </div>
                </div>

                <div className={css.to}>
                    <div className={css.txtfld}>
                        <TextField
                            id="outlined-multiline-static"
                            multiline
                            label="To"
                            fullWidth
                        />
                    </div>
                    <div className={css.advise}>
                        Accepts multiple targets, one entry per line
                    </div>
                </div>

                <div className={css.active}>
                    <FormGroup>
                        <FormControlLabel control={<Switch/>} label="Active"/>
                    </FormGroup>
                </div>
                <Button variant="contained"
                        color="success"
                        size="small">Add Forward
                </Button>
            </div>
        </div>
    );
}

export default AddForward;