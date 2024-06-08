// src/components/OtherComponent.jsx
import React from 'react';

const OtherComponent = ({title}) => {
    console.log(title)
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default OtherComponent;
