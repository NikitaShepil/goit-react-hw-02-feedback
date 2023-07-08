
import { Feedback } from 'components/Feedback/Feedback'
import { Statistic } from 'components/Statistic/Statistic';
import { Notification } from 'components/Notification/Notification'
import React, { Component } from 'react';

class App extends Component {

state = {
  todos:{Good: 0,
  Neutral:0,
  Bad:0,
  Total:0,
  PositiveFeedback:0
},
emptyTodos:true,
}

countTotalFeedback =(todos) =>{
return todos.Good + todos.Neutral + todos.Bad
}

countPositiveFeedbackPercentage = (todos,total) =>{
  
  
  if (total === 0) {
    return 0;
  }
  return Math.round((todos.Good / total) * 100);
}

heandlerClick = (e) => {
  const name = e.target.name;
  this.setState((prevState) => {
    const updatedTodos = { ...prevState.todos };
    updatedTodos[name] += 1;
    updatedTodos.Total = this.countTotalFeedback(updatedTodos);
    updatedTodos.PositiveFeedback = this.countPositiveFeedbackPercentage(updatedTodos, updatedTodos.Total);
    prevState.emptyTodos = false;
    return { todos: updatedTodos };
    
  });
  
}



  render(){
   return <>
    <Feedback heandlerClick={this.heandlerClick}/>
    {this.state.emptyTodos ? <Notification message={"There is no feedback"}/>: <Statistic Good={this.state.todos.Good} Neutral={this.state.todos.Neutral} Bad={this.state.todos.Bad} Total={this.state.todos.Total} PositiveFeedback={this.state.todos.PositiveFeedback}/>}


    </>
  };
};

export default App;