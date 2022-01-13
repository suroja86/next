import styles from '../styles/App.module.scss'
import {decrementCounter, incrementCounter} from "../redux/actions/counterActions";
import {getInitialProps} from "./_app";
import {connect} from 'react-redux';
import store from "../redux/store";

function App(props) {
  getInitialProps({store}).then(r => {})

  return (
      <div>
        <button
            className={styles.loginButton + ' ' + styles.blue}
            onClick={props.incrementCounter}>Increment
        </button>
        <button
            className={styles.loginButton + ' ' + styles.red}
            onClick={props.decrementCounter}>Decrement
        </button>
        <h1>{props.counter}</h1>
      </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
