import React from 'react';

const Summary = ({ summary }) => {
  if (!summary) return null;
  const { title, description } = summary;
  return [
    <div className="heading" key="title">
      {title || 'Summary'}
    </div>,
    <div className="description justify" key="description">
      {description || ''}
    </div>,
  ];
};

export default Summary;
