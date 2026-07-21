import doctor from "../assets/doctor.jpg";

const appointments = [
  {
    id: 1,
    name: "Anna Svensson",
    purpose: "Follow-up",
    location: "Coppell, Virginia",
    date: "6/4/2026",
    status: "Confirmed",
  },
  {
    id: 2,
    name: "Erik Johansson",
    purpose: "Skin Issues",
    location: "Lansing, Illinois",
    date: "7/4/2026",
    status: "Confirmed",
  },
  {
    id: 3,
    name: "Maria Lindqvist",
    purpose: "Prescription",
    location: "Kent, Utah",
    date: "8/4/2026",
    status: "Waiting",
  },
  {
    id: 4,
    name: "Lars Andersson",
    purpose: "Consultation",
    location: "Lansing, Illinois",
    date: "9/4/2026",
    status: "Pending",
  },
];

export const TodaysAppointments = ({ theme }) => {
  return (
    <div className={`appointmentCard ${theme}`}>
      <div className="appointmentHeader">
        <h3>Today's appointments</h3>

        <select>
          <option>7 April, 26</option>
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Patients</th>
            <th>Location</th>
            <th>Date</th>
            <th>Status</th>
            <th>Call</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((item) => (
            <tr key={item.id}>
              <td className="patientInfo">
                <img src={doctor} alt="" />
                <div>
                  <h4>{item.name}</h4>
                  <small>{item.purpose}</small>
                </div>
              </td>

              <td>{item.location}</td>

              <td>{item.date}</td>

              <td>
                <span
                  className={
                    item.status === "Confirmed"
                      ? "confirmed"
                      : item.status === "Waiting"
                        ? "waiting"
                        : "pending"
                  }
                >
                  {item.status}
                </span>
              </td>

              <td>📹</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
