import {Component} from 'react'

import './index.css'

const initialState = {
  timeInMinutes: 0,
  timeInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  convertTimeInFormat = () => {
    const {timeInMinutes, timeInSeconds} = this.state

    const stringifiedMinutes =
      timeInMinutes > 9 ? timeInMinutes : `0${timeInMinutes}`
    const stringifiedSeconds =
      timeInSeconds > 9 ? timeInSeconds : `0${timeInSeconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  increaseCount = () => {
    const {timeInSeconds} = this.state

    if (timeInSeconds === 60) {
      this.setState({timeInSeconds: 0})
    }
    if (timeInSeconds === 60) {
      this.setState(prevState => ({timeInMinutes: prevState.timeInMinutes + 1}))
    } else {
      this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
    }
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  onClickStart = () => {
    this.intervalId = setInterval(this.increaseCount, 1000)
  }

  onClickStop = () => {
    this.clearTimerInterval()
  }

  onClickReset = () => {
    this.setState(initialState)
    this.clearTimerInterval()
  }

  render() {
    return (
      <div className="bg-container">
        <div className="content-container">
          <h1 className="main-heading">Stopwatch</h1>
          <div className="card-container">
            <div className="timer-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                className="image"
                alt="stopwatch"
              />
              <p className="timer-heading">Timer</p>
            </div>
            <h1 className="timer-count">{this.convertTimeInFormat()}</h1>
            <div>
              <button
                className="button-start"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="button-stop"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="button-reset"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
