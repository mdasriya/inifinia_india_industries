import React, { useState, useEffect } from "react";
import { stats } from "../data";

const Stats = () => {
  const [animatedStats, setAnimatedStats] = useState(stats.map(item => ({ ...item, animatedValue: 0 })));

  useEffect(() => {
    const animationDuration = 1500; // Duration of the animation in milliseconds
    const intervalDuration = 50; // Interval duration in milliseconds

    const intervalId = setInterval(() => {
      const updatedStats = animatedStats.map(item => {
        const step = item.value / (animationDuration / intervalDuration);
        const newValue = Math.min(item.animatedValue + step, item.value);
        return { ...item, animatedValue: newValue };
      });
      setAnimatedStats(updatedStats);

      // Clear interval when animation is complete
      if (updatedStats.every(item => item.animatedValue === item.value)) {
        clearInterval(intervalId);
      }
    }, intervalDuration);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, [animatedStats]);

  return (
    <div className="bg-teal-600 rounded-[20px] p-10 selection ssm:mt-10  ssm:p-5 ">
      <div className="flex flex-wrap gap-y-8">
        {animatedStats.map((item, index) => (
          <div
            className="min-h-[70px] w-3/6 flex flex-col justify-center  lg:flex-1 "
            key={index}
          >
            <div className="text-2xl font-semibold lg:text-4xl ">{Math.round(item.animatedValue)}{item.value == 1 ? 'Lac+' : "+"}</div>
            <div className="text-base font-light max-w-[170px] mx-auto lg:text-md">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
