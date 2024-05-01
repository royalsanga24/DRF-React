import { useState } from "react";
import "../App.css";
import img from "./facebook.png";

function Main() {
  const [value, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  return (
    <div className="main">
      <div>
        <img src={img} />
      </div>
      <div id="form-wrapper">
        <form id="form">
          <div className="form-wrapper">
            <div className="form-fields">
              <div style={{ flex: 6 }}>
                <input
                  className="form-control"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Add App.."
                />
              </div>

              <div style={{ flex: 6 }}>
                <input
                  className="form-control"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Add App.."
                />
              </div>
            </div>

            <div className="form-fields">
              <div style={{ flex: 6 }}>
                <input
                  className="form-control"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Add App.."
                />
              </div>

              <div style={{ flex: 6 }}>
                <input
                  className="form-control"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Add App.."
                />
              </div>
            </div>

            <div id="bottom-fields">
              <div style={{ flex: 6 }}>
                <input
                  className="form-control"
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Add App.."
                />
              </div>

              <div style={{ flex: 1 }}>
                <input
                  id="submit"
                  className="btn btn-warning"
                  type="submit"
                  name="Add"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
