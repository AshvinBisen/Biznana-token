import React, { useState, useEffect } from 'react';

const Countdown = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          return initialTime;
        } else {
          return prev - 1000;
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [initialTime]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="flex space-x-4 text-white font-bold justify-center">
      {[
        { label: 'Day', value: days },
        { label: 'Hours', value: hours },
        { label: 'Minutes', value: minutes },
        { label: 'Sec', value: seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-[#fff] rounded-lg w-16 h-16 flex items-center justify-center text-2xl text-black">
            {item.value}
          </div>
          <div className="text-xl mt-2">{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;

// Usage example:
// <Countdown initialTime={86400000} /> // 1 Day
