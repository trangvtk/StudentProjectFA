import React from 'react';
import BackButton from '../../src/components/asset/Group13.png';
import ProfilePicture from '../../src/components/asset/Ellipse.svg';

function Header() {
  return (
    <div id="header">
      <div className="button-back">
        <img src={BackButton} className="back" alt="back button" />
      </div>
      <div className="account">
        <div className="infor-account">
          <div className="picture-account">
            <img src={ProfilePicture} alt="profilePicture" />
          </div>
          <div className="information">
            <div className="name">Pattie Trusdale</div>
            <div className="career">Full-stack Development</div>
          </div>
        </div>
        <div className="button-hire">
          <button type="button" className="style-button">HIRE</button>
        </div>
      </div>
    </div>

        
  )
}

export default Header