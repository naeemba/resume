import React from 'react';

const Score = ({ score }) => {
  if (!score || score > 5) return 'Invalid Score';
  return [
    ...Array(score)
      .fill()
      .map(each => <div key={each} className="filled-bullet" />),
    ...Array(5 - score)
      .fill()
      .map(each => <div key={each} className="empty-bullet" />),
  ];
};

const Skills = ({ skills }) => {
  if (!skills || !Array.isArray(skills)) return null;
  return [
    <div className="heading">Skills</div>,
    ...skills.map(skill => (
      <div className="level">
        <div className="label">{skill.label}</div>
        <div className="bullet-container">
          <Score score={skill.score} />
        </div>
      </div>
    )),
  ];
};

export default Skills;
