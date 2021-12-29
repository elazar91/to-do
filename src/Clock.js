import { useEffect, useState } from "react";

const Clock = () => {

  const firstTime = new Date()

  const [time, setTime] = useState(firstTime)
  useEffect(startTime, [])
  console.log(time)
  function startTime(){
    setInterval(() => {
       setTime(new Date())
    }, 1000)
  }

  return (
    <div>
      {time.toLocaleTimeString()}
    </div>
  );
};

export default Clock;