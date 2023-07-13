
import { Feedback } from 'components/Feedback/Feedback'
import { Statistic } from 'components/Statistic/Statistic';
import { Notification } from 'components/Notification/Notification'
import Section from './Section/Section';
import React, { Component } from 'react';

class App extends Component {

state = {
  Good: 0,
  Neutral:0,
  Bad:0,
  
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
    const updatedTodos = { ...prevState };
    updatedTodos[name] += 1;
    updatedTodos.Total = this.countTotalFeedback(updatedTodos);
    updatedTodos.PositiveFeedback = this.countPositiveFeedbackPercentage(updatedTodos, updatedTodos.Total);
    prevState.emptyTodos = false;
    return updatedTodos;
  });
}



  render(){
   return <>
    <Section title={'Please leave feedback'} ><Feedback heandlerClick={this.heandlerClick}/></Section>
    <Section title={'Statistic'}>{this.state.Good + this.state.Neutral + this.state.Bad === 0 ? <Notification message={"There is no feedback"}/>: <Statistic Good={this.state.Good} Neutral={this.state.Neutral} Bad={this.state.Bad} />}</Section>


    </>
  };
};

export default App;