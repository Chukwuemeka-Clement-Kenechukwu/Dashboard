import { Link } from "react-router-dom";
import hummingBird from "../assets/hummingbird.png";

export const SideBar = () => {
  return (
    <aside className="aside">
      <div className="humLogo">
        <img src={hummingBird} alt="Humming birg" />
        <h2>Hummingbird</h2>
      </div>
      <div className="menu_container">
        <p className="menu">MAIN MENU</p>
        <ul>
          <Link className="link" to="/dashboard">
            Overview
          </Link>
          <Link className="link" to="patient">
            Patients
          </Link>
          <Link className="link" to="appointment">
            Appointments
          </Link>
          <Link className="link" to="message">
            Message
          </Link>
        </ul>
      </div>
    </aside>
  );
};
