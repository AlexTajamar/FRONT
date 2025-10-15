const { Component } = require("react");

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Estoy en home</h1>
        <img
          src="https://s.w-x.co/UP.jpg"
          style={{ width: "150px", height: "150px" }}
          alt=""
        />
      </div>
    );
  }
}

export default Home;
