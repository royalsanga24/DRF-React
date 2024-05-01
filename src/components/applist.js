import "../App.css";
import img from "./facebook.png";

function AppList(props) {
  return (
    <div className="main">
      {props.props.map(function (app, index) {
        img = "http://127.0.0.1:8000/" + app.icon;
        return (
          <div key={index} className="task-detail app-description">
            <img src={img} />
            <div className="app-info">
              <h1>{app.name}</h1>
              <a href={app.link} target="_blank">
                {app.link}
              </a>
            </div>
            <div id="points">{app.points}</div>
          </div>
        );
      })}
    </div>
  );
}

export default AppList;
