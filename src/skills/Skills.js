import React from 'react';

const Score = ({ score }) => {
  if (!score || score > 5) return 'Invalid Score';
  return [
    ...Array(score)
      .fill()
      // eslint-disable-next-line react/no-array-index-key
      .map((_, each) => <div key={each} className="filled-bullet" />),
    ...Array(5 - score)
      .fill()
      // eslint-disable-next-line react/no-array-index-key
      .map((_, each) => <div key={5 - each} className="empty-bullet" />),
  ];
};

const Skills = ({ skills, title }) => {
  if (!skills || !Array.isArray(skills)) return null;
  return [
    <div className="heading" key="heading">
      {title}
    </div>,
    ...skills.map(skill => (
      <div className="level" key={skill.label}>
        <div className="label">{skill.label}</div>
        <div className="bullet-container">
          <Score score={skill.score} />
        </div>
      </div>
    )),
  ];
};

export default Skills;
