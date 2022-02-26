import React from 'react';
import './style.css'
import Modal from '@mui/material/Modal';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import DialpadIcon from '@mui/icons-material/Dialpad';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};
const Key = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className='top' >
            <div className="main-scanner">
                <div className="scan">
                    <div className='inner-area'>
                        <Link to='/scan'>  <div className='icon-s'> <QrCodeScannerIcon sx={{ fontSize: 35 }} /></div>
                            <div><h6>SCAN</h6></div></Link>


                    </div>
                </div>

                <div className="key">
                    <div className='inner-area '>
                        <Link to="/key">   <div className='icon-s active-ico'><DialpadIcon sx={{ fontSize: 35 }} /></div>
                            <div><h6>KEY</h6></div></Link></div>
                </div>
            </div >
            <div className='para-text'>
                <h6>Type the product Bar Code</h6>
            </div>


            <Box
                className='box-in'
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

                <TextField labelStyle={{ fontSize: 15 }} className='key-input' id="standard-basic" label="Key" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} variant="standard" />
            </Box>
            <div className='submit-btn-key'>
                <Button onClick={handleOpen} className='form-btn' variant="contained">Submit</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography className='head' id="modal-modal-title" variant="h6" component="h2">
                            The code is validated.
                        </Typography>
                        <Typography className='head' id="modal-modal-description" sx={{ mt: 2 }}>

                        </Typography>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default Key;
