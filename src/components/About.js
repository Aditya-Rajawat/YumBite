import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

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
        <div className="font-bold">
          User :
          <UserContext.Consumer>
            {({ LoggedInUser }) => <h4>{LoggedInUser}</h4>}
          </UserContext.Consumer>
        </div>
        <UserClass name={"First Child"} location={"Govind Nagar"} />
      </>
    );
  }
}

export default About;
