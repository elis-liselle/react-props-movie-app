import React from "react";

function Timer() {
    let currentTime = new Date().toLocaleTimeString();
    const [time, getTime] = React.useState(currentTime);
    console.log(getTime);

    function updateTime() {
        const timeNow = new Date().toLocaleTimeString();
        getTime(timeNow);
    }

    setInterval(updateTime, 1000);

    return (
    <div>
        <h3>{time}</h3>
    </div>
  );
}

export default Timer;
