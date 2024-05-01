import "../App.css";
import img from "./facebook.png";

function Task(props) {
  console.log(props);
  return (
    <div className="main">
      <div className="task-detail">
        <img src={img} />
        <div className="app-info">
          <h1>Facebook</h1>
          <a href="www.facebook.com" target="_blank">
            www.facebook.com
          </a>
        </div>
        <div id="points">100 Points</div>
      </div>
      <input type="file" />
    </div>
  );
}

export default Task;
