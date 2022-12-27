import {useEffect, useState} from "preact/hooks";

const timeFmt = new Intl.RelativeTimeFormat("en-US");

export default function Countdown(props: {target: string}) {
  const target = new Date(props.target);
  const [now, setNow] = useState(new Date());

  // Set up interva to update the 'now' date every second while component is mounted
  useEffect(()=>{
    const timer = setInterval(()=>{
      setNow((now)=>{
        if (now > target) {
          clearInterval(timer);
        }
        return new Date();
      })
    },1000);


    return () => clearInterval(timer);
  },[props.target])

  // If target date has passed, we stop counting down
  if (now > target) {
    return <span>🎉</span>;
  }

  // Otherwise, format time and render it
  const secondsLeft = Math.floor((target.getTime() - now.getTime()) / 1000);
  return <span>{timeFmt.format(secondsLeft, "seconds")}</span>
}
