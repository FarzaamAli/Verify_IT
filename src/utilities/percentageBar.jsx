import React from 'react';
import PercentageBar from 'react-percentage-bar';
// Optional: if you want to include default styles

const Percentagebar = ({ percentage }) => {
  return (
    <div style={{ width: '100%', margin: '20px 0' }}>
      <PercentageBar 
        percent={percentage} 
        style={{ backgroundColor: 'blue' }} 
        animationDuration={1} // Adjust the duration as needed
      />
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        {percentage}%
      </div>
    </div>
  );
};

export default Percentagebar;
