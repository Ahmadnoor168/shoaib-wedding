import React, { useState, useEffect } from 'react';
import "./styles.css"
const CountdownTimer = () => {
  // Set the target date and time (December 1, 12:01 PM)
  const targetDate = new Date('December 1, 2024 12:01:00').getTime();

  // State to store the time remaining in days, hours, minutes, and seconds
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Function to calculate the time difference
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      } else {
        // Time is up
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Run the calculation every second
    const interval = setInterval(calculateTimeLeft, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className='time-zone'>

        <p>{timeRemaining.days} <span>days</span> </p>
        <p>{timeRemaining.hours} <span>Hours</span> </p>
        <p>{timeRemaining.minutes} <span>Min</span> </p>
        <p>{timeRemaining.seconds} <span>Sec</span> </p>
        
  
    </div>
  );
};

export default CountdownTimer;
