// @flow
import React from 'react';
import settings from './settings.json';
import Info from '../info';
import Skills from '../skills';
import Summary from '../summary';
import Experience from '../experience';

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
  const {
    name,
    profilePic,
    pageTitle,
    info,
    link,
    skills,
    languages,
    summary,
    experience,
  } = settings;
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
          <Skills skills={skills} title="Skills" />
          <Skills skills={languages} title="Languages" />
        </div>
        <div className="main-column">
          <Summary summary={summary} />
          <Experience experience={experience} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
