import * as React from 'react';
import TextField from '@mui/material/TextField';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TableRowsIcon from '@mui/icons-material/TableRows';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MapIcon from '@mui/icons-material/Map';
import ImageIcon from '@mui/icons-material/Image';
import Button from '@mui/material/Button';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import './style.css'
const New = () => {
    // const [value, setValue] = React.useState(new Date('start*'));

    // const handleChange = (newValue) => {
    //     setValue(newValue);
    // };
    return (
        <div>
            {/* Start tabs area */}
            <div className="edit-profile-area rn-section-gapTop">
                <div className="container">
                    <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                        <div className="col-12 d-flex justify-content-between mb--30 align-items-center">
                            <h4 className="title-left">Create event</h4>
                        </div>
                    </div>
                    <div className="row plr--70 padding-control-edit-wrapper pl_md--0 pr_md--0 pl_sm--0 pr_sm--0">
                        <div className="col-lg-3 col-md-3 col-sm-12">
                            {/* Start tabs area */}
                            <nav className="left-nav rbt-sticky-top-adjust-five">
                                <div className="nav align-li nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link align-li active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Basic Info</button>
                                    <button className="nav-link align-li" id="nav-home-tabs" data-bs-toggle="tab" data-bs-target="#nav-homes" type="button" role="tab" aria-controls="nav-homes" aria-selected="false">Details</button>
                                    <button className="nav-link align-li" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"> Tickets</button>
                                    <button className="nav-link align-li" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Checkout</button>
                                </div>
                            </nav>
                            {/* End tabs area */}
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                            <div className="tab-content tab-content-edit-wrapepr" id="nav-tabContent">
                                {/* sigle tab content */}
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    {/* start personal information */}
                                    <div className='para-edit'>
                                        < ErrorOutlineIcon className='warn-icon' />
                                        <h5>RULES</h5>
                                        <ol>
                                            <li>You must include at least one email/phone number AND at least one Discord/Twitter/Facebook/etc username for contact purposes.</li>
                                            <li> You must be clear on what the benefits the ticket provides, and how exactly people can get to or access the event.</li>
                                            <li>No lottery or raffle events are allowed, unless pre-approved by Metapass. No spam events are allowed.</li>
                                        </ol>

                                    </div>
                                    <div className='tags-input'>
                                        <TableRowsIcon className='grid-icon' />
                                        <h5>Basic Info</h5>

                                        <div className='top-basic'>
                                            <h6>T</h6>
                                            <TextField className='event-title'
                                                label="Event Title*"
                                                autoComplete='off'
                                                InputLabelProps={{ className: 'Input__Label ' }}
                                            >

                                            </TextField>
                                        </div>
                                    </div>


                                    <div className='tags-input mt-5'>
                                        <AccessTimeIcon className='grid-icon' />
                                        <h5>Date & Time</h5>
                                        <div className='date-pick'>
                                            <p>Start*</p>
                                            <input type="date" name="" id="" />
                                            <p>End*</p>
                                            <input type="date" name="" id="" />

                                        </div>

                                    </div>
                                    <div className='tags-input mt-5'>
                                        <MapIcon className='grid-icon' />
                                        <h5>Location</h5>
                                        <br />
                                        <div className='phy-btns'>
                                            <button>Physical Event</button>
                                            <button>Virtual Event</button>
                                            <button>To be Determined</button>
                                        </div>
                                        <div className='radio-check'>
                                            <input type="checkbox" checked name="" id="" />
                                            <p >Show location to attendees only</p>
                                        </div>
                                        <div className='top-basic'>
                                            <h6 className='li-sy'>🔗</h6>
                                            <TextField className='event-title'
                                                label="Event Link*"
                                                autoComplete='off'
                                                InputLabelProps={{ className: 'Input__Label ' }}
                                            >

                                            </TextField>
                                        </div>
                                        <div className='phy-btns align-btn'>
                                            <button>Next</button>

                                        </div>
                                    </div>
                                    {/* End personal information */}
                                </div>
                                {/* End single tabv content */}
                                {/* sigle tab content */}
                                <div className="tab-pane tab-pad fade" id="nav-homes" role="tabpanel" aria-labelledby="nav-home-tab">
                                    {/* start personal information */}
                                    <div className='tags-input '>
                                        <ImageIcon className='grid-icon' />
                                        <h5>Banner</h5>
                                        <Button
                                            className='upload-btn'
                                            variant="contained"
                                            component="label"
                                        >
                                            Upload
                                            <input
                                                type="file"
                                                hidden
                                            />
                                        </Button>
                                        <p> Max file size 1MB</p>
                                    </div>
                                    <br />
                                    <div className='tags-input mt-5'>
                                        <StickyNote2Icon className='grid-icon' />
                                        <h5>Description</h5>

                                        <div className='date-pick'>
                                            <p>Event Description (Optional)</p>
                                            <textarea name="" id="" cols="30" rows="10"></textarea>


                                        </div>
                                    </div>
                                    <div className='tags-input mt-5'>
                                        <VisibilityIcon className='grid-icon' />
                                        <h5>Visibility</h5>
                                        <br />
                                        <div className='phy-btns'>
                                            <button>Public</button>
                                            <button>Unlisted</button>

                                        </div>
                                        <div className='mt-5 last-o'>
                                            < ErrorOutlineIcon className='warn-icon ' /> <p>Public events are shown on the explore page, and can be seen by everyone</p>
                                        </div>
                                    </div>
                                    <div className='phy-btns align-btn'>
                                        <button>Back</button>
                                        <button>Next</button>

                                    </div>
                                    {/* End personal information */}
                                </div>
                                {/* End single tabv content */}
                                <div className="tab-pane tab-pad fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    {/* change password area Start */}
                                    <div className='tags-input '>
                                        <LocalActivityIcon className='grid-icon' />
                                        <h5>Banner</h5>
                                        <Button
                                            className='upload-btn'
                                            variant="contained"
                                            component="label"
                                        >
                                            Add Ticket
                                        </Button>
                                    </div>
                                    <div></div>
                                    {/* change password area ENd */}
                                </div>
                                <div className="tab-pane fade " id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    {/* start Notification Setting  */}
                                    <div className="nuron-information">
                                        <h5 className="title">Make Sure Your Notification setting </h5>
                                        <p className="notice-disc">
                                            Notification Center is where you can find app notifications and Quick Settings—which
                                            give you quick access to commonly used settings and apps. You can change your
                                            notification settings at any time from the Settings app. Select Start , then select
                                            Settings
                                        </p>
                                        <hr />
                                        {/* start notice wrapper parrent */}
                                        <div className="notice-parent-wrapper d-flex">
                                            <div className="notice-child-wrapper">
                                                {/* single notice wrapper */}
                                                <div className="single-notice-setting">
                                                    <div className="input">
                                                        <input type="checkbox" id="themeSwitch" name="theme-switch" className="theme-switch__input" />
                                                        <label htmlFor="themeSwitch" className="theme-switch__label">
                                                            <span />
                                                        </label>
                                                    </div>
                                                    <div className="content-text">
                                                        <p>Order Confirmation Notice</p>
                                                    </div>
                                                </div>
                                                {/* single notice wrapper End */}
                                                {/* single notice wrapper */}
                                                <div className="single-notice-setting mt--15">
                                                    <div className="input">
                                                        <input type="checkbox" id="themeSwitchs" name="theme-switch" className="theme-switch__input" />
                                                        <label htmlFor="themeSwitchs" className="theme-switch__label">
                                                            <span />
                                                        </label>
                                                    </div>
                                                    <div className="content-text">
                                                        <p>New Items Notification</p>
                                                    </div>
                                                </div>
                                                {/* single notice wrapper End */}
                                                {/* single notice wrapper */}
                                                <div className="single-notice-setting mt--15">
                                                    <div className="input">
                                                        <input type="checkbox" id="OrderNotice" name="theme-switch" className="theme-switch__input" />
                                                        <label htmlFor="OrderNotice" className="theme-switch__label">
                                                            <span />
                                                        </label>
                                                    </div>
                                                    <div className="content-text">
                                                        <p>New Bid Notification</p>
                                                    </div>
                                                </div>
                                                {/* single notice wrapper End */}
                                                {/* single notice wrapper */}
                                                <div className="single-notice-setting mt--15">
                                                    <div className="input">
                                                        <input type="checkbox" id="newPAy" name="theme-switch" className="theme-switch__input" />
                                                        <label htmlFor="newPAy" className="theme-switch__label">
                                                            <span />
                                                        </label>
                                                    </div>
                                                    <div className="content-text">
                                                        <p>Payment Card Notification</p>
                                                    </div>
                                                </div>
                                                {/* single notice wrapper End */}
                                                {/* single notice wrapper */}
                                                <div className="single-notice-setting mt--15">
                                                    <div className="input">
                                                        <input type="checkbox" id="EndBid" name="theme-switch" className="theme-switch__input" />
                                                        <label htmlFor="EndBid" className="theme-switch__label">
                                                            <span />
                                                        </label>
                                                    </div>
                                                    <div className="content-text">
                                                        <p>Ending Bid Notification Before 5 min</p>
                                                    </div>
                                                </div>
                                                {/* single notice wrapper End */}
                                                {/* single notice wrapper */}
                                                <div className="single-notice-setting mt--15">
                                                    <div className="input">
                                                        <input type="checkbox" id="Approve" name="theme-switch" className="theme-switch__input" />
                                                        <label htmlFor="Approve" className="theme-switch__label">
                                                            <span />
                                                        </label>
                                                    </div>
                                                    <div className="content-text">
                                                        <p>Notification for approving product</p>
                                                    </div>
                                                </div>
                                                {/* single notice wrapper End */}
                                            </div>
                                            <div className="notice-child-wrapper">
                                            </div>
                                        </div>
                                        {/* end notice wrapper parrent */}
                                        <a href="#" className="btn btn-primary save-btn-edit" onclick="customAlert.alert('Successfully saved Your Notificationm setting')">Save</a>
                                    </div>
                                    {/* End Notification Setting  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End tabs area */}
        </div>










    );
}

export default New;
