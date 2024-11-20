import React, { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularPercentageBar = ({ targetPercentage }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev < targetPercentage) {
          return prev + 1; // Increment by 1 until reaching target
        } else {
          clearInterval(interval); // Stop animation at target percentage
          return targetPercentage;
        }
      });
    }, 10); // Adjust speed as needed (lower is faster)

    return () => clearInterval(interval);
  }, [targetPercentage]);

  return (
    <div style={{ width: '200px', height: '200px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          pathColor: '#2a6ba5',
          textColor: '#2a6ba5',
          trailColor: '#D9E0EB',
        })}
      />
    </div>
  );
};

export default CircularPercentageBar;
