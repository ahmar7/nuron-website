import * as React from 'react';
import TextField from '@mui/material/TextField';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import TableRowsIcon from '@mui/icons-material/TableRows';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MapIcon from '@mui/icons-material/Map';
import ImageIcon from '@mui/icons-material/Image';
import { activetab, activetab1, activetab2, activetab3, hidebx, backtab, backtab1, backtab2 } from './toggle'
import Button from '@mui/material/Button';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import StyleIcon from '@mui/icons-material/Style';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './style.css'
const New = () => {
    let showbx = () => {
        let bx = document.getElementById("hide_bx")
        bx.classList.add('show-ticket')
    }

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
                                    <button className="nav-link align-li" id="nav-review-tab" data-bs-toggle="tab" data-bs-target="#nav-review" type="button" role="tab" aria-controls="nav-review" aria-selected="false">Review</button>
                                </div>
                            </nav>
                            {/* End tabs area */}
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 mt_sm--30">
                            <div className="tab-content tab-content-edit-wrapepr" id="nav-tabContent">
                                {/* sigle tab content */}
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                    {/* start Basic Info */}
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
                                            <button onClick={activetab}>Next</button>

                                        </div>
                                    </div>
                                    {/* End Basic Info */}
                                </div>
                                {/* End single tabv content */}
                                {/* sigle tab content */}
                                <div className="tab-pane tab-pad fade" id="nav-homes" role="tabpanel" aria-labelledby="nav-home-tab">
                                    {/* start Details */}
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
                                        <button onClick={backtab}>Back</button>
                                        <button onClick={activetab1}>Next</button>

                                    </div>
                                    {/* End Details */}
                                </div>
                                {/* End single tabv content */}
                                <div className="tab-pane tab-pad fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                    {/* Ticket area Start */}
                                    <div className='tags-input '>
                                        <LocalActivityIcon className='grid-icon' />
                                        <h5>Ticket</h5>
                                        <Button
                                            onClick={showbx}
                                            className='upload-btn'
                                            variant="contained"
                                            component="label"
                                        >
                                            Add Ticket
                                        </Button>
                                    </div>
                                    <div className='ticket-area'>
                                        <div><LocalActivityIcon className='ticket-ico' /></div>
                                        <div>No Tickets Added</div>
                                    </div>

                                    <div id='hide_bx' className='hidden-ticket'>
                                        <div className='header-ticket'>
                                            <div>Add Ticket</div>
                                            <div className='main-cancel'>
                                                <button onClick={hidebx} className='cancel-btn'>Cancel</button>
                                            </div>
                                        </div>
                                        <div className='tags-input'>
                                            <TableRowsIcon className='grid-icon' />
                                            <h5>Basic Info</h5>
                                            <div className='date-pick'>
                                                <p>Ticket label*</p>
                                                <span className='tee-sign'>T</span>
                                                <input type="text" className='input-per-ti' name="" id="" />


                                            </div>
                                            <div className='top-basic'>
                                                <h6> <StickyNote2Icon className='grid-icon-ti' /></h6>
                                                <TextField className='event-title'
                                                    label="Ticket desccription"
                                                    autoComplete='off'

                                                    InputLabelProps={{ className: 'Input__Label ' }}
                                                >

                                                </TextField>
                                            </div>

                                            <div className='date-pick'>
                                                <p>Price*</p>
                                                <input type="text" className='input-per' name="" id="" />
                                                <p className='percent-sign'><LocalFireDepartmentIcon className='grid-icon-ri' /></p>

                                                <Button
                                                    className='upload-btn'
                                                    variant="contained"
                                                    component="label"
                                                >
                                                    Allow donations
                                                </Button>

                                            </div>
                                            <div className='date-pick'>
                                                <p>Max tickets*</p>
                                                <input type="text" className='input-per' name="" id="" />
                                                <p className='percent-sign'>  <LocalActivityIcon className='grid-icon-ri' /></p>

                                                <Button
                                                    className='upload-btn'
                                                    variant="contained"
                                                    component="label"
                                                >
                                                    Unlimited
                                                </Button>

                                            </div>
                                            <div className='tags-input mt-4'>
                                                <AccessTimeIcon className='grid-icon' />
                                                <h5>Ticket Sale</h5>
                                                <div className='date-pick'>
                                                    <p>Start*</p>
                                                    <input type="date" name="" id="" />
                                                    <p>End*</p>
                                                    <input type="date" name="" id="" />

                                                </div>

                                            </div>
                                            <div className='tags-input mt-4'>
                                                <StyleIcon className='grid-icon' />
                                                <h5>Style</h5>
                                            </div>
                                            <div className='detail-bx'>
                                                <div className='inner-bx'>

                                                    <h6 className='main-eve'>Event name here</h6>
                                                    <p className='eve'>Ticket title here</p>
                                                    <LocationOnIcon className='location-ico' />
                                                    <Button
                                                        className='upload-btn-tr'
                                                        variant="contained"
                                                        component="label"
                                                    >
                                                        Event location here
                                                    </Button>
                                                    <p className='eve mt-3'>22, March 2022, 2:52 AM</p>
                                                    <div>
                                                        <div className='tags-input '>
                                                            <LocalActivityIcon className='grid-icon' />
                                                            <h5 className='tickt'>1 Ticket</h5>
                                                            <Button
                                                                className='upload-btn-tr ms-5'
                                                                variant="contained"
                                                                component="label"
                                                            >
                                                                Create
                                                            </Button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='tags-input '>
                                                <h5>Title & details</h5>
                                                <div className='phy-btns '>
                                                    <button>Title color</button>

                                                    <button>Detail color</button>

                                                </div>
                                            </div>
                                            <div className='tags-input '>
                                                <h5>Button</h5>
                                                <div className='phy-btns bg-pic '>
                                                    <button>Button Background Color</button>

                                                    <button>Button Background Hover Color</button>
                                                    <button>Button Text Color</button>

                                                </div>
                                            </div>
                                            <div className='tags-input '>
                                                <h5>Background</h5>
                                                <div className='phy-btns '>
                                                    <Button
                                                        className='upload-btn'
                                                        variant="contained"
                                                        component="label"
                                                    >
                                                        Upload Image
                                                        <input
                                                            type="file"
                                                            hidden
                                                        />
                                                    </Button> No files selected<br />
                                                    <br />
                                                    <button>Fill Background</button>
                                                    <button>Gutter Left</button>
                                                    <button>Ticket Background</button>

                                                </div>
                                            </div>
                                            <div className='phy-btns mt-5 align-btn'>
                                                <button onClick={hidebx}>Cancel</button>
                                                <button>Save</button>

                                            </div>
                                        </div>
                                    </div>

                                    <div className='tags-input mt-5'>
                                        <MonetizationOnIcon className='grid-icon' />
                                        <h5>Sales Tax</h5>
                                        <div className='date-pick'>
                                            <p>Sales Tax</p>
                                            <input type="text" className='input-per' value="0.00" name="" id="" />
                                            <p className='percent-sign'>%</p>
                                            <input className='chk-bx' type="checkbox" />
                                            <h6 className='tax'>Pass tax to attendes</h6>

                                        </div>
                                    </div>
                                    <div className='phy-btns align-btn'>
                                        <button onClick={backtab1}>Back</button>
                                        <button onClick={activetab2}>Next</button>

                                    </div>
                                    {/* Ticket area ENd */}
                                </div>
                                <div className="tab-pane tab-pad fade " id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                    {/* start Checkout Formg  */}
                                    <div className='tags-input '>
                                        <EventNoteIcon className='grid-icon' />
                                        <h5>Checkout Form</h5>
                                        <Button
                                            className='upload-btn'
                                            variant="contained"
                                            component="label"
                                        >
                                            Add Item
                                        </Button>
                                        <div className='mt-4 last-o'>
                                            < ErrorOutlineIcon className='warn-icon ' /> <p>No checkout form items added. Click on "Add item" to add one.</p>
                                        </div>
                                    </div>
                                    <div className='tags-input '>
                                        <SpeakerNotesIcon className='grid-icon' />
                                        <h5>Checkout Message</h5>
                                        <div className='mt-4 last-o'>
                                            < ErrorOutlineIcon className='warn-icon ' /> <p>This message will be shown to ticket purchasers after they have purchased a ticket.</p>
                                        </div>
                                        <div className='date-pick'>
                                            <p>Message (Optional)</p>
                                            <textarea name="" id="" cols="30" rows="10"></textarea>


                                        </div>
                                        <div className='phy-btns align-btn'>
                                            <button onClick={backtab2}>Back</button>
                                            <button onClick={activetab3}>Next</button>

                                        </div>
                                    </div>
                                    {/* End Checkout Form */}
                                </div>
                                {/* Start Reveiw area */}
                                <div className="tab-pane tab-pad fade " id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
                                    <div className='tags-input '>
                                        <RateReviewIcon className='grid-icon' />
                                        <h5>Review</h5>

                                        <div className='mt-5 '>
                                            < ReportProblemIcon className='warn-icon ' /> <p>Please connect a wallet before you can publish.</p>
                                        </div>
                                        <div className='mt-4 '>
                                            < ReportProblemIcon className='warn-icon ' /> <p>Please complete all sections before you can publish.</p>
                                        </div>
                                    </div>
                                    <table className='review-table' >

                                        <tr>
                                            <td className='left-colmn'>Event name</td>
                                            <td>No event name</td>
                                        </tr>
                                        <tr>
                                            <td className='left-colmn'>Event start</td>
                                            <td>No date specified</td>
                                        </tr>
                                        <tr>
                                            <td className='left-colmn'>Event end</td>
                                            <td>No date specified</td>
                                        </tr>
                                        <tr>
                                            <td className='left-colmn'>Event location</td>
                                            <td>Virtual event <br />
                                                Show location only to attendees <br />
                                                Undefined link</td>
                                        </tr>
                                        <tr>
                                            <td className='left-colmn'>Event Banner</td>
                                            <td>No banner image </td>
                                        </tr>
                                        <tr>
                                            <td className='left-colmn'>Event description</td>
                                            <td>## Organiser name / group, <br /><br />

                                                ## Event description<br /><br />

                                                ## How to get there
                                                (Insert detailed information on where the event will be at, what time, how to get to the event.If online, insert information on how to log in.)<br /><br />

                                                ## Contact information
                                                Twitter:
                                                Discord:
                                                Email:
                                                Phone: </td>
                                        </tr>
                                        <tr>
                                            <td className='left-colmn'>Visibility</td>
                                            <td>Unlisted </td>
                                        </tr>
                                        <tr>
                                            <td className='left-colmn'>Tickets</td>
                                            <td>No tickets</td>
                                        </tr>
                                        <tr>
                                            <td className='left-colmn'>Checkout form</td>
                                            <td>No checkout form</td>
                                        </tr>
                                        <tr>
                                            <td className='left-colmn'>Checkout message
                                            </td>
                                            <td> No checkout message</td>
                                        </tr>
                                    </table>

                                    <div className='phy-btns align-btn'>
                                        <button >Connect to Wallet</button>

                                    </div>
                                </div>
                                {/* End Reveiw area  */}
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
