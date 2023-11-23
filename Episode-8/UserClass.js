import React from "react";
import { createBrowserRouter } from "react-router-dom";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    console.log(this.props.name + " constructor");

    this.state = {
      userInfo: {
        name: "hello",
      },
    };
    console.log("State variable created");
  }

  async componentDidMount() {
    console.log(this.props.name + " componentDidMount");
    const data = await fetch("https://api.github.com/users/Aditya-Rajawat");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log(this.props.name + " componentdidUpdate");
  }

  componentWillUnmount() {
    console.log(this.props.name + " componentWillUnmount");
  }

  render() {
    // const { name , location } = this.props

    console.log(this.props.name + " render");

    const { name, login, avatar_url } = this.state.userInfo;

    // debugger;

    return (
      <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Login : {login}</h3>
        <img src={avatar_url} alt="" />
        <h4>Contact : adityarajawat04@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
