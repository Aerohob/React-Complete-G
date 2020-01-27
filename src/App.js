import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css'; 
import Person from './Person/Person';

class App extends Component {
state = {
  persons: [
    {
      name: 'Max', age: 28
    }, 
    {
      name: 'Manu', age: 29 
    },
    {name: 'Stephanie', age: 26}
  ],
  otherState: 'some other value',
  showPersons: false
}

  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    this.setState({
      persons: [
        {
          name: newName, age: 28
        }, 
        {
          name: 'Manu', age: 29 
        },
        {name: 'Stephanie', age: 29}
      ],
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Max', age: 28
        }, 
        {
          name: event.target.value, age: 29 
        },
        {name: 'Stephanie', age: 26}
      ],
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
     return (
      <div className="App">
        <h1>David's React App</h1>
        <p>This is working!</p>
        <button 
        style={style}
        onClick={ this.togglePersonsHandler}>Switch Name
        </button>
        
        { 
        this.state.showPersons ? 
          <div>
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}/> 
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'JOE')}
        changed={this.nameChangedHandler}> My Hobbies: Racing </Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}
        click={() => this.switchNameHandler('Testing123')}
        />
        </div> : null
        }
      </div>
      ); 
      //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Heyyy'))
  }
}

export default App;
