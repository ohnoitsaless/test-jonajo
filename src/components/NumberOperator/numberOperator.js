import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';

class NumberOperator extends React.Component {
  state = {
    seconds: 10,
    countdown: this.props.countdown,
  };

  handleReset = () => {
    this.setState({ countdown: 10 });
    this.initClock();
  };

  initClock = () => {
    const {seconds} = this.state;
    const ticker = Array(seconds).fill().map((_, i) => i+1);
    ticker.forEach((element, index) => {
      console.log((index + 1) * 1000);
      setTimeout(this.handleTick, (index + 1) * 1000);
    });
  };

  handleTick = () => {
    const { countdown } = this.state;
    let modifiedCountDown = countdown;
    modifiedCountDown -= 1;
    this.setState({ countdown: modifiedCountDown });
  };

  componentDidMount() {
    this.initClock();
  }

  render() {
    const { countdown } = this.state;

    return (
      <div>
        <button onClick={this.handleReset}>RESET</button>
        {countdown > 0 ? (
          <span>Countdown: {countdown}</span>
        ) : (
          <span>Time's out</span>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countdown: state.numberOperator.countdown,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    tick: (countdown) => dispatch({ type: 'tick', countdown }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NumberOperator);
