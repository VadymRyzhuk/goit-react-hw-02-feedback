import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onGoodClick = () => {
    this.setState({ good: this.state.good + 1 });
  };
  onNeutralClick = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };
  onBadClick = () => {
    this.setState({ bad: this.state.bad + 1 });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    const percentage =
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100;
    return Math.floor(percentage);
  };

  render() {
    return (
      <>
        <p>Please leave feedback</p>
        <div>
          <button onClick={this.onGoodClick}>Good</button>
          <button onClick={this.onNeutralClick}>Neutral</button>
          <button onClick={this.onBadClick}>Bad</button>
        </div>
        <p>Statistics</p>
        <span>Good: {this.state.good}</span>
        <br />
        <span>Neutral: {this.state.neutral}</span>
        <br />
        <span>Bad: {this.state.bad}</span> <br />
        <span>
          Total: <span>{this.countTotalFeedback()}</span>
        </span>
        <br />
        <span>
          Positive percentage:
          <span>
            Positive percentage:
            <span>
              {isNaN(this.countPositiveFeedbackPercentage())
                ? 0
                : `${this.countPositiveFeedbackPercentage()}%`}
            </span>
          </span>
        </span>
        <br />
      </>
    );
  }
}

// <div
//   style={{
//     height: '100vh',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     fontSize: 40,
//     color: '#010101',
//   }}
// >
//   React homework template
// </div>;
