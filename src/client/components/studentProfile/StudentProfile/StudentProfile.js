import React, { Component } from 'react';

import './StudentProfile.css';

import PropTypes from 'prop-types';
class Profile extends Component {
  render() {
    if (!this.props.studentData)

      return <div />;
    const arr = this.props.studentData.map(item => {
      return (
        <div className='wholeStudentContainers' key={item.id}>
          <div className='studentProfile'>
            <div className='studentContainer'>
              <div className='studentContainer__container'>

                <div className='studentImg'>
                  <img src={item.avatar} alt='' />
                </div>

                <div className='studentInfo'>
                  <h1 className='studentName'>{item.username}</h1>
                  <p className='studentLocation'>
                    <i className='fas fa-map-marker-alt dropbtn'></i>
                    {item.campus}
                  </p>
                  <p className='studentCohort'>{item.cohort}</p>
                  <p className='studentTitle'>Full Stack developer</p>
                  <a href={`https://github.com/${item.username}`} target='__blank' className='fab fa-github githubbtn'></a>
                  <a href='https://www.linkedin.com/' target='__blank' className='fab fa-linkedin inbtn'></a>
                </div>
              </div>

              <div className='studentContactInfo'>
                <span className='studentState'>{item.status}</span>
                <span className='studentPurpose'>{item.interests}</span>
                <a className='studentGitter__a' href={`https://gitter.im/${item.username}`} target='__blank'>
                  <div className='studentGitter'>
                    <img className='studentGitter__img' src='/assets/gittericon.png' />
                    <span className='studentGitter__span' >Messege on Gitter</span>
                  </div>
                </a>
              </div>
            </div>
            <div className='studentSkills'>
              <div className='studentStdHeader'>
                <h1 className='portfolio'>Skills:</h1>
              </div>
              <ul className='studentSkillsList'>
                {
                  item.skills.map((skill, index) => {
                    return (<li className='studentSingleSkills' key={index}><a>{skill}</a></li>);
                  })
                }
              </ul>
            </div>
            <div className='studentSkills'>
              <div className='studentStdHeader'>
                <h1 className='portfolio'>Portolio:</h1>
                <i className='fas fa-plus-circle addbtn'></i>
              </div>
              <ul className='studentSkillsList'>
                <li className='studentSingleSkills'><a>{item.portfolio}</a></li>
              </ul>
            </div>
            <div className='studentSkills'>
              <div className='studentStdHeader'>
                <h1 className='portfolio'>Projects Links:</h1>
                <i className='fas fa-plus-circle addbtn'></i>
              </div>
              <ul className='studentSkillsList'>{
                item.projects.map((project, index) => {
                  return (<li className='studentSingleSkills' key={index}><a>{project}</a></li>);
                })
              }
              </ul>
            </div>
            <div className='studentSkills'>
              <div className='studentStdHeader'>
                <h1 className='portfolio'>C.V.:</h1>
                <i className='fas fa-plus-circle addbtn'></i>
              </div>
              <ul className='studentSkillsList'>
                <li className='studentSingleSkills'><a>{item.cv}</a></li>
              </ul>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className='studenProfileStyle'>
        {arr}
      </div>
    );
  }
}

Profile.propTypes = {
  studentData: PropTypes.array,
  filter: PropTypes.func
};

export default Profile;
