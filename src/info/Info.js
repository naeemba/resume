import React from 'react';

const Info = ({ info, title, linkClassName }) => {
  if (!info || !Array.isArray(info)) return null;
  return [
    <div className="heading" key="title">
      {title}
    </div>,
    ...info.map(each => {
      return each.label ? (
        <a
          key={each.label}
          href={each.link}
          className={`${linkClassName} section`}
        >
          {each.label}
        </a>
      ) : (
        <div key={each} className="section">
          {each}
        </div>
      );
    }),
  ];
};
export default Info;
