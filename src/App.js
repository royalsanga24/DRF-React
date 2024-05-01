import "./App.css";
import React from "react";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import Main from "./components/main";
import Task from "./components/task";
import AppList from "./components/applist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appList: [],
      appTask: {
        id: null,
        name: "",
        completed: false,
      },
      editing: false,
    };
    this.fetchApps = this.fetchApps.bind(this);
  }

  componentWillMount() {
    this.fetchApps();
  }

  fetchApps() {
    const token = "Token 1799e175e2ff4e2bf77d19bebdaf6eb875c00869";
    console.log("Fetching...");

    fetch("http://127.0.0.1:8000/api/apps", {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ appList: data }));
  }
  render() {
    var apps = this.state.appList;
    return (
      <div className="App">
        <Navbar />
        <div className="hero">
          <Sidebar />
          <Main />
          {/* <Task props={apps} /> */}
          {/* <AppList props={apps} /> */}
        </div>
      </div>
    );
  }
}

export default App;
