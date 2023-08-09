import { Component } from 'react';
import { FeedbackButtons } from './FeedbackButtons/FeedbackButtons';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeStats = badge => {
    this.setState(prevState => {
      return {
        [badge]: prevState[badge] + 1,
      };
    });
  };

  handleResetStats = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  render() {
    return (
      <div>
        <FeedbackButtons
          onChangeStats={this.handleChangeStats}
          onClear={this.handleResetStats}
        />
        <Statistics statItem={this.state} />
      </div>
    );
  }
}
