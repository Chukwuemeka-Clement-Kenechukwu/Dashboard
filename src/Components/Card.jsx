export const Card = (props) => {
  return (
    <div className="card">
      <div className="title">
        <p>{props.title}</p>
      </div>
      <div className="activities">
        <p className="number">{props.number}</p>
        <p className="vcall">{props.vcall}</p>
      </div>
      <div className="timeColor">
        <p className="green">{props.percent}</p>
        <p className="when">{props.when}</p>
      </div>
    </div>
  );
};
