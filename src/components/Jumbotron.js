import React from "react";

class MyClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      myState: null
    }
  }

  render() {
    return (
      <div>
        {this.state.myState}
      </div>
    )
  }
}

export default MyClass;