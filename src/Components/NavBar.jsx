import doctor from "../assets/doctor.jpg";
import lightmode from "../assets/lightmode.png";
import darkmode from "../assets/darkmode.png";
import notification from "../assets/notification.png";
import { useEffect, useState } from "react";

export const NavBar = (props) => {
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    const interval = setInterval(() => {
      setHour(new Date().getHours());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const name = "Dr. Eriksson";

  let greet;

  if (hour < 12) {
    greet = "Good Morning";
  } else if (hour < 18) {
    greet = "Good Afternoon";
  } else {
    greet = "Good Evening";
  }

  return (
    <nav className="nav">
      <div className="profile">
        <div className="imgDiv">
          <img src={doctor} width={50} alt="profile photo" />
        </div>
        <div className="greetings">
          <h2>
            {greet}, <span>{name}</span>
          </h2>
          <p className="date">
            Monday, April 7, 2026 - Stockholm health center
          </p>
        </div>
      </div>

      <ul>
        <li>
          <img
            src={lightmode}
            onClick={props.onClickLight}
            width={50}
            alt="light mode"
          />
        </li>
        <li>
          <img
            src={darkmode}
            onClick={props.onClickDark}
            width={50}
            alt="darkmode"
          />
        </li>
        <li>
          <img src={notification} width={50} alt="notification" />
        </li>

        <img className="round" src={doctor} width={50} alt="doctor" />
      </ul>
    </nav>
  );
};
