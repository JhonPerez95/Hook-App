import React, { memo } from 'react';

const Small = ({ value }) => {
  console.log('Me volvi a llamar');
  return <small>{value}</small>;
};

export default memo(Small);
