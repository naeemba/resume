import React from 'react';

const Info = ({ info }) => {
  if (!info || !Array.isArray(info)) return null;
  return [
    <div className="heading" key="title">
      Info
    </div>,
    ...info.map(each => {
      return each.label ? (
        <a key={each.label} href={each.link} className="no-color">
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
