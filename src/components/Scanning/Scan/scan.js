import React from 'react';
import './style.css'
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import { Link } from 'react-router-dom';
import DialpadIcon from '@mui/icons-material/Dialpad';
import Button from '@mui/material/Button';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
const Scan = () => {
    return (
        <div className='top' >
            <div className="main-scanner">
                <div className="scan">
                    <div className='inner-area'>
                        <Link to='/scan'>  <div className='icon-s active-ico'> <QrCodeScannerIcon sx={{ fontSize: 35 }} /></div>
                            <div><h6>SCAN</h6></div></Link>


                    </div>
                </div>

                <div className="key">
                    <div className='inner-area'>
                        <Link to="/key">   <div className='icon-s'><DialpadIcon sx={{ fontSize: 35 }} /></div>
                            <div><h6>KEY</h6></div></Link></div>
                </div>
            </div >
            <div className='para-text'>
                <h6>Scan the product Bar Code or QR code</h6>
            </div>
            <div className='cam-area'>
                <div className='inner-icons'>
                    <Link to='/qr'><div className='icons-scan'>  <CameraAltIcon sx={{ fontSize: 30 }} /></div></Link>
                    <div className='icons-scan'> <DriveFolderUploadIcon sx={{ fontSize: 30 }} /></div>
                </div>

            </div>

            <div className='submit-btn-scan'>
                <Button loading className='form-btn' variant="contained">Submit</Button>
            </div>


        </div>
    );
}

export default Scan;
