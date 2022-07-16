import logo from "./logo.svg";
import "./App.css";

function ListItem(props) {
  return (
    <div className="list-item">
      {props.children} <div className="delete-btn">x</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="list-holder">
        <ListItem>whatever</ListItem>
        <ListItem>whatever 2 my guy</ListItem>
        <ListItem>whatever</ListItem>
        <ListItem>whatever</ListItem>
      </div>
    </div>
  );
}

export default App;
