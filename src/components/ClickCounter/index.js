import {Component} from 'react'
import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  IncreaseCont = () => {
    this.setState(preState => ({count: preState.count + 1}))
  }

  render() {
    const {count} = this.state
    console.log(count)
    return (
      <div className="bg_container">
        <div>
          <h1>
            The Button has been clicked <span className="spansty">{count}</span>{' '}
            times
          </h1>
          <p>click the button to increase the count!</p>
          <div>
            <button className="buttonstyling" onClick={this.IncreaseCont}>
              click me!
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default ClickCounter
