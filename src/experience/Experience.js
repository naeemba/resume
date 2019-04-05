import React from 'react';

const Experience = ({ experience }) => {
  if (!experience) return null;
  const { title, detail } = experience;
  return [
    <div className="heading" key="title">
      {title || 'Experience'}
    </div>,
    <div className="detail" key="detail">
      {Array.isArray(detail) &&
        detail.reverse().map((each, index) => {
          const {
            title: experienceTitle,
            location,
            date: { from, to },
            keyFeatures,
          } = each;
          let dateString = from || '';
          if (from && to && from.length > 0 && to.length > 0)
            dateString += ' - ';
          dateString += to || '';
          return [
            <div key="detail" className="history">
              <div className="title">{experienceTitle}</div>
              <div className="details">
                {dateString.length > 0 && (
                  <div className="date">{dateString}</div>
                )}
                {location && <div className="location">{location}</div>}
              </div>
              {Array.isArray(keyFeatures) && (
                <div className="description">
                  <ul>
                    {keyFeatures.map(feature => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>,
            ...(index < detail.length - 1
              ? [<div className="divider" key="divider" />]
              : []),
          ];
        })}
    </div>,
  ];
};

export default Experience;
