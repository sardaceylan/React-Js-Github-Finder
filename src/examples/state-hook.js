import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       text: "",
//     };
//   }
//   componentDidMount() {
//     console.log("component did mount");
//   }
//   componentDidUpdate() {
//     console.log("component did mount");
//   }
//   render() {
//     return (
//       <div>
//         <p>Butona {this.state.count} kez tıkladınız.</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click
//         </button>
//       </div>
//     );
//   }
// }

const App = (props) => {
  const [count, setCount] = useState(props.count);
  const [text, setText] = useState(props.text);

  useEffect(() => {
    console.log("count");

    localStorage.setItem("count", count);
  }, [count]);

  useEffect(() => {
    console.log("componentdidmount");
    const countData = localStorage.getItem("count");
    if (countData) {
      setCount(Number(countData));
    }
  }, []);

  useEffect(() => {
    console.log("componentdidmount - componentdidupdate");
  });

  return (
    <div>
      <p>Butona {count} kez tıkladınız.</p>
      <p>Girilen text: {text}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(props.count)}>Default</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
};

App.defaultProps = {
  count: 0,
  text: "Arda",
};

ReactDOM.render(<App />, document.getElementById("root"));
