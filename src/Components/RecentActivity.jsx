import doctor from "../assets/doctor.jpg";

const activities = [
  {
    id: 1,
    name: "Emma Berg",
    action: "New appointment created",
    time: "5 min ago",
  },
  {
    id: 2,
    name: "Oscar Wilde",
    action: "Message sent",
    time: "12 min ago",
  },
  {
    id: 3,
    name: "Klara Nyström",
    action: "Prescription renewed",
    time: "27 min ago",
  },
  {
    id: 4,
    name: "Johan Enstrom",
    action: "Record updated",
    time: "1 hr ago",
  },
  {
    id: 5,
    name: "Lina Dahl",
    action: "Video call ended",
    time: "2 hr ago",
  },
];

export const RecentActivity = ({ theme }) => {
  return (
    <div className={`recentActivity ${theme}`}>
      <div className="activityHeader">
        <h3>Recent activity</h3>
        <p>•••</p>
      </div>

      {activities.map((item) => (
        <div key={item.id} className="activityCard">
          <img src={doctor} alt="" />

          <div className="activityText">
            <h4>{item.name}</h4>
            <small>{item.action}</small>
          </div>

          <span>{item.time}</span>
        </div>
      ))}
    </div>
  );
};
