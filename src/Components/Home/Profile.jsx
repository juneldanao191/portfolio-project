import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

const Profile = () => {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
               
            <div className='profile-details-name'>
                <span className="primary-text">
                    {""}
                    Hello, I'M <span className='highlighted-text'>JUNEL C. DANAO </span>
                </span>
            </div>
            <div className="profile-details-role">
                <span className='primary-text'> 
                {""}
                <h1>
                    {""}
                    <Typical
                    className="typed-text"
                    loop={Infinity} 
                    steps={[
                        "Web Developer",
                        100,
                        "Editor",
                        1000,
                        "Content Creator",
                        1000,
                        "Designer",
                        1000,
                    ]}/>
                </h1>
                <div className="colz">
                    <div className="colz-icon">
                    <a href='https://www.facebook.com/junel.0619danao' target="_blank">
                        <i className='fa fa-facebook-square' aria-hidden="true"></i>
                    </a>
                    <a href='#'>
                        <i className='fa fa-google-plus-square'></i>
                    </a>
                    <a href='https://www.instagram.com/jhoneeez' target="_blank">
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://www.twitter.com/jhoneeez' target="_blank">
                        <i className='fa fa-twitter'></i>
                    </a>
                    </div>
                   
                </div>
                <span className='profile-role-tagline'>
                    Knack of building application with front and back end operations.
                </span>
                </span>
            </div>
            
            <div className="profile-options">
                <button className='btn primary-btn'>
                    {""}
                    Hire Me {""}
                </button>
                <a href='JuneldanaoResume.docx' download="Junel Danao JuneldanaoResume.docx">
                    <button className="btn highlighted-btn">
                        Get Resume
                    </button>
                </a>
            </div>
            </div>
            <div className="profile-picture">
                <div className="profile-picture-background">

                </div>
            </div>
        </div>
    </div>
  )
}
export default Profile;