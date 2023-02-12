import React, { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Group210 from'../../src/components/asset/Group210.png';
import Group311 from'../../src/components/asset/Group31.1.svg';
import Rectangle2 from'../../src/components/asset/Rectangle2.png';
import Rectangle21 from'../../src/components/asset/Rectangle2.1.png';
import Rectangle22 from'../../src/components/asset/Rectangle2.2.png';
import Group46 from'../../src/components/asset/Group46.png';
import Group44 from'../../src/components/asset/Group44.png';
import Group45 from'../../src/components/asset/Group45.png';
import Group66 from'../../src/components/asset/Group66.png';
import GmailLogo from'../../src/components/asset/gmail-logo.png';
import Group from'../../src/components/asset/Group.png';
import Group2 from'../../src/components/asset/Group2.png';
import Group5 from'../../src/components/asset/Group5.png';
import Linkedin from'../../src/components/asset/linkedin.png';
import Facebook from'../../src/components/asset/facebook (1).png';
import Vector from'../../src/components/asset/Vector.png';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    // bgcolor: 'background.paper',
    bgcolor: '#F3F3F3',
    // border: '2px solid #000',
    // boxShadow: 24,
    borderRadius: 0.5,
    px: 4,
    py: 5,
  };
    


export default function Body() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);

    const [nameProject , setNameProject] = useState('Gembucket');

    const handleChangeNameProject = (e) => {
		setNameProject(e.target.value);
	};

    // const nameProjectInWeb = () => {
    //     nameProject = 
    // }

    const submitNameProject = (value) => {
		console.log('value submit name project: ', value);
	};

    const [textAreaCount, setTextAreaCount] = useState(0);
    const TextArea = e  => {
        textAreaCount = e.target.value.length;
    }

    const handleOpen = () => {
        setOpen(true);
      };
  
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen1 = () => {
        setOpen1(true);
      };
  
    const handleClose1 = () => {
        setOpen1(false);
    };
  
  return (
    <div id='content'>
        <div id="content-topic">
                <div class="header-title-hotsearch">
                    <div class="title-buttonedit">
                        {/* <div class="title" id="title-topic">Gembucket</div> */}
                        <div class="title" id="title-topic">{nameProject}</div>
                        
                        <div class="button-edit-content">
                             {/* <Button class="openButton" onclick={handleOpen}><img src={Group311}
                                    class="edit" alt=''/></Button> */}
                                    <Button  class="openButton" onClick={handleOpen}><img src={Group311}
                                    class="edit" alt=''/></Button>
                            
                        </div>
                    </div>
                    <Modal open={open} onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <Box sx={{ ...style, width: 700}}>
          {/* <div class="formPopup" id="popupForm">
                            <form action="" class="formContainer"> */}
                            <div className='formContainer'>
                                <h2 class="titlePopup">Project</h2>
                                {/* <h2 class="titlePopup">{nameProject}</h2> */}
                                <div className="name">
                                    <label for="name">
                                        Name <span className='styleDot'>*</span>
                                    </label><br />
                                    {/* <input type="text" id="name" value={nameProject} placeholder="Gembucket" name="name" onChange={handleChangeNameProject}></input> */}
                                    <input type="text" id="name" value={nameProject} placeholder="Gembucket" name="name" onChange={handleChangeNameProject}></input>
                                </div>
                                <div class="keywords">
                                    <label for="keywords">
                                        Keywords
                                    </label><br />
                                    <input type="text" id="keywords" name="keywords"></input>
                                    
                                    <div class="items">
                                        <span class="item">#solar_breeze <button class="deleteButton" onclick=""><img
                                                    src={Vector} class="delete" alt=''/></button></span>
                                        <span class="item">#red_hold <button class="deleteButton" onclick=""><img
                                                    src={Vector} class="delete" alt=''/></button></span>
                                        <span class="item">#card_guard <button class="deleteButton" onclick=""><img
                                                    src={Vector} class="delete" alt=''/></button></span>
                                    </div>
                                </div>
                                <div class="summary">
                                    <label for="C">
                                        Summary <span className='styleDot'>*</span>
                                    </label><br />
                                    <div className='textAreaSummary'>
                                        <textarea type='text' className="keywords" id="keywords" rows="5" onChange={e => setTextAreaCount(e.target.value.length)}>Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis lectus suspendisse.</textarea>
                                        <div className='countCharacter'>{textAreaCount}/250</div>
                                    </div>
                                    
                                </div>
                                <label for="websites">
                                    Websites
                                </label>
                                <div class="websites">
                                    <input type="text" id="websites1" placeholder="https://gembucket.com"
                                        name="websites1" class="websites1"></input>
                                    <select>
                                        <option>Official site</option>
                                        <option>The second option</option>
                                    </select>
                                    <button type="button" class="btn remove">Remove</button>
                                </div>
                                <div class="another-websites">
                                    <label for="another-websites">
                                        Add another website
                                    </label>
                                </div>
                                <div class="style-bt-action">
                                <Button class="btn cancel" onClick={handleClose}>Cancel</Button>
                                    {/* <button type="button" class="btn cancel" onclick="closeForm()">Cancel</button> */}
                                    <button type="submit" class="btn save" onclick="saveForm()">Save</button>
                                    {/* <button type="submit" class="btn save" onClick={submitNameProject(nameProject)}>Save</button> */}
                                    
                                </div>
                            </div>
                            {/* </form>
                        </div> */}
        </Box>
      </Modal>
                    
                    {/* <Modal open={open}
        onClose={handleClose}> */}
                    <div class="editPopup">
                        <div class="formPopup" id="popupForm">
                            <form action="" class="formContainer">
                                <h2 class="titlePopup">Project</h2>
                                <div class="name">
                                    <label for="name">
                                        Name <span className='styleDot'>*</span>
                                    </label><br />
                                    <input type="text" id="name" placeholder="Gembucket" name="name"></input>
                                </div>
                                <div class="keywords">
                                    <label for="keywords">
                                        Keywords
                                    </label><br />
                                    <input type="text" id="keywords" placeholder="Gembucket" name="keywords"></input>
                                    
                                    <div class="items">
                                        <span class="item">#solar_breeze <button class="deleteButton" onclick=""><img
                                                    src={Vector} class="delete" alt=''/></button></span>
                                        <span class="item">#red_hold <button class="deleteButton" onclick=""><img
                                                    src={Vector} class="delete" alt=''/></button></span>
                                        <span class="item">#card_guard <button class="deleteButton" onclick=""><img
                                                    src={Vector} class="delete" alt=''/></button></span>
                                    </div>
                                </div>
                                <div class="summary">
                                    <label for="summary">
                                        Summary <span className='styleDot'>*</span>
                                    </label><br />
                                    <textarea name="keywords" id="keywords" cols="30" rows="5">Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis lectus suspendisse.</textarea>
                                    {/* <input type="text" id="summary" placeholder="Gembucket" name="summary"> */}
                                </div>
                                <label for="websites">
                                    Websites
                                </label>
                                <div class="websites">
                                    <input type="text" id="websites1" placeholder="https://gembucket.com"
                                        name="websites1" class="websites1"></input>
                                    <select>
                                        <option>Official site</option>
                                        <option>The second option</option>
                                    </select>
                                    <button type="button" class="btn remove">Remove</button>
                                </div>
                                <div class="another-websites">
                                    <label for="another-websites">
                                        Add another website
                                    </label>
                                </div>
                                <div class="style-bt-action">
                                    <button type="button" class="btn cancel" onclick="closeForm()">Cancel</button>
                                    <button type="submit" class="btn save" onclick="saveForm()">Save</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* </Modal> */}
                    <div class="items">
                        <div class="item">#solar_breeze #red_hold #card_guard #lotstring #tough_joy_fax #cardify</div>
                        {/* <div class="item">#red_hold</div>
                        <div class="item">#card_guard</div>
                        <div class="item">#lotstring</div>
                        <div class="item">#tough_joy_fax</div>
                        <div class="item">#cardify</div> --> */}
                    </div>
                </div>
                <div class="content-link">
                    <p >Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor
                        gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio
                        feugiat non pretium quis lectus suspendisse.</p>
                    <p class="link-official">Official site: <a href="https://gembucket.com">https://gembucket.com</a>
                    </p>
                </div>
                <div class="picture-topic">
                    <img src={Group210} class="picture-title" alt=''/>
                </div>
            </div>
            <div class="description">
                <div class="title-description">
                    <div class="title-desc">Description</div>
                    <div class="button-edit-content">
                        {/* <button class="openButton" onclick="openForm1()"><img src={Group311}
                                class="edit" alt=''/></button> */}
                                 <Button  class="openButton" onClick={handleOpen1}><img src={Group311}
                                    class="edit" alt=''/></Button>
                    </div>
                </div>
                <div class="editPopup">
                    {/* <div class="formPopup" id="popupForm1"> */}
                    <Modal open={open1} onClose={handleClose1}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                    <Box sx={{ ...style, width: 700}}>
                        <div className="formContainer">
                            <h2 class="titlePopup">Description</h2>
                            <div class="summary">
                                <label for="summary">
                                    Summary <span className='styleDot'>*</span>
                                </label><br />
                                {/* <input type="text" id="summary" placeholder="Gembucket" name="summary"></input> */}
                                
                                <div className='textAreaSummary'>
                                        <textarea type='text' className="keywords" id="keywords" rows="5" onChange={e => setTextAreaCount(e.target.value.length)}>Tellus in sagittis dui vel nisl duis ac nibh fusce lacus purus aliquet at neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio feugiat non pretium quis lectus suspendisse.</textarea>
                                        <div className='countCharacter'>{textAreaCount}/250</div>
                                </div>
                            </div>
                            <div class="style-bt-action">
                                <Button class="btn cancel" onClick={handleClose1}>Cancel</Button>
                                {/* <button type="button" class="btn cancel?" onclick="closeForm1()">Cancel</button> */}
                                <button type="submit" class="btn save">Save</button>
                            </div>
                        </div>
                        </Box>
      </Modal>
                    {/* </div> */}
                </div>
                <div class="content-description">
                    <ul>
                        <li>Dugue quam sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt ante vel
                            nasand praesent blandit lacinia erat vestibulum sed.</li>
                        <li>Augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere.</li>
                        <li>Liam neque vestibulum eget vulputate ut ultrices vel.</li>
                    </ul>
                </div>
            </div>
            <div class="features">
                <div class="title-features">
                    <div class="title-feat">Features</div>
                    <div class="button-edit-content">
                        <button class="openButton" onclick="openForm2()"><img src={Group311}
                                class="edit" alt=''/></button>
                    </div>
                </div>
                {/* <div class="editPopup">
                    <div class="formPopup" id="popupForm2">
                        <form action="" class="formContainer">
                            <h2 class="titlePopup">Features</h2>
                            <div class="summary">
                                <label for="summary">
                                    Summary <span style="color: #18C4EE;">*</span>
                                </label><br />
                                <input type="text" id="summary" placeholder="Gembucket" name="summary">
                            </div>
                            <div class="style-bt-action">
                                <button type="button" class="btn cancel" onclick="closeForm2()">Cancel</button>
                                <button type="submit" class="btn save">Save</button>
                            </div>
                        </form>
                    </div>
                </div> */}
                <div class="features1">
                    <img src={Rectangle2} class="picture-features1" alt=''/>
                    <div class="content-features1">
                        <div class="title-features1">User research</div>
                        <p>Metus vitae durea nullam ipsum aliquam non mauris morbi non lectus aliquam sit amet aliquam
                            dieam earn magna bibendum imperdiet nullam orci pede.</p>
                    </div>
                </div>
                <div class="features2">
                    <div class="content-features2">
                        <div class="title-features2">Getting stakeholder</div>
                        <p>Ipsum ac tellus semper interdum mauris libero ullamcorper purus sit amet nulla quisque arcu
                            libero rustrum sempereed ac lobortis vel dapibus at.</p>
                    </div>
                    <img src={Rectangle21} class="picture-features2" alt=''/>
                </div>
                <div class="features3">
                    <img src={Rectangle22} class="picture-features3" alt=''/>
                    <div class="content-features3">
                        <div class="title-features3">User interaction</div>
                        <p>Sollicitudin vitae consectetuer eget rutrum at lorem integer tincidunt anteca veal ipsum
                            praesent blandit lacinia erat vestibulum sed at magna.</p>
                    </div>
                </div>
            </div>
            <div class="team-members">
                <div class="title-team-members">Team-members</div>
                <ul id="list-members">
                    <div class="member">
                        <img src={Group45} class="" alt=''/>
                    </div>
                    <div class="member">
                        <img src={Group46} class="" alt=''/>
                    </div>
                    <div class="member">
                        <img src={Group44} class="" alt=''/>
                    </div>
                    <div class="member">
                        <img src={Group66} class="" alt=''/>
                    </div>
                </ul>
            </div>

            <div class="contact">
                <div class="title-contact">Want to know more, contact me!</div>
                <div class="all-contact">
                    <div class="information-contact">
                        <div class="gmail">
                            <img src={GmailLogo} class="" alt=''/>
                            <div class="style-contact">pattietrusdale@gmail.com</div>
                        </div>
                        <div class="number">
                            <img src={Group} class="" alt=''/>
                            <div class="style-contact">+8421 223 2234</div>
                        </div>
                        <div class="address">
                            <img src={Group2} class="" alt=''/>
                            <div class="style-contact">34 Milwaukee Avenue</div>
                        </div>
                    </div>
                    <div class="link-contact">
                        <div class="github">
                            <img src={Group5} class="" alt=''/>
                            <div class="style-contact">github.com/pattietrusdale</div>
                        </div>
                        <div class="linkedin">
                            <img src={Linkedin} class="" alt=''/>
                            <div class="style-contact">linkedin.com/in/pattie-trusdale-34...</div>
                        </div>
                        <div class="facebook">
                            <img src={Facebook} class="" alt=''/>
                            <div class="style-contact">facebook.com/pattie.trusdale</div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}



