import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super();

    // console.log("Parent constructor")
  }

  componentDidMount() {
    // console.log("Parent componentDidMount")
  }

  render() {
    // console.log("Parent render")
    return (
      <>
        <h1>About Us Page</h1>
        <UserClass name={"First Child"} location={"Govind Nagar"} />
      </>
    );
  }
}

export default About;
