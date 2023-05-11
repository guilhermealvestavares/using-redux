import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import { startAction } from "actions/startAction";
import { stopAction } from "actions/stopAction";
import { Image } from "styles/Image.styles";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <header className="App-header">
        <Image
          src={logo}
          onClick={props.rotating ? props.stopAction : props.startAction}
          rotating={props.rotating}
          alt="logo"
        />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  startAction: () => dispatch(startAction),
  stopAction: () => dispatch(stopAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
