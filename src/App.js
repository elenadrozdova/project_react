import React from 'react';
import logo from './logo.svg';
import './App.css';


class Clock extends React.Component {
  
  constructor (props) {
    super(props);
    this.state = {date : new Date(), num : 1}
  }
  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      this.props.interval    );
  }
  
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    });
  }
  handleClick = () => {
    this.setState ({num: this.state.num+1})
  }
  render() {
    const {user} = this.props;
    return (
      <div>
        <h1>Hello,  {user.name}    </h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <button onClick = {this.handleClick}>Я кнопка!</button> <h1>{this.state.num}</h1>
        <button>Ещё кнопка!</button>
      </div>
    );
  }
}



function App() {
  
  const users = [ {
    name: 'Elena',
    surname: 'Drozdova' 
  },
  {
    name: 'Kcenia',
    surname: 'Drzd'
  },
  {
    name: 'Max',
    surname: 'Drozdov'
  }]
;
  return (   
    <div> 
      <Clock interval = {1000} user = {users[0]}/>
      <Clock interval = {2000} user = {users[1]}/>
      <Clock interval = {3000} user = {users[2]}/>
      
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
}*/

export default App;
