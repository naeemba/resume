// @flow
import React from 'react';
import settings from './settings.json';
import Info from '../info';

const CurrentPosition = () => {
  const { currentPosition, currentCompany, currentCompanyURL } = settings;
  const companyEl = currentCompanyURL ? (
    <a
      className="no-color"
      target="_blank"
      href={currentCompanyURL}
      rel="noopener noreferrer"
    >
      {currentCompany}
    </a>
  ) : (
    currentCompany
  );
  return (
    <div className="job-title">
      {currentPosition}&nbsp;{companyEl}
    </div>
  );
};

const Resume = () => {
  const { name, profilePic, pageTitle, info, link } = settings;
  document.title = pageTitle || `${name} - Resume`;
  return (
    <div className="resume">
      <div className="page-title">
        <div
          className="profile-pic"
          style={{
            background: `url(${profilePic}) no-repeat`,
            backgroundSize: 'cover',
          }}
        />
        <div className="title">
          <div className="name">{name}</div>
          <CurrentPosition />
        </div>
      </div>
      <div className="body">
        <div className="left-column">
          <Info info={info} title="Info" linkClassName="no-color" />
          <Info info={link} title="Links" />
        </div>
      </div>
    </div>
  );
};

export default Resume;
