import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import About from './components/About';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 3,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
}
  render() {
    return (
      <Router>
      <div className="App">
      <Header />
        <Route exact path="/" render={props => (
          <React.Fragment>
            <Todos todos={this.state.todos} markComplete={this.markComplete}/>
          </React.Fragment>
        )} />
        <Route path="/about" component={About} />
      </div>
      </Router>
    );
  }
}

export default App;
