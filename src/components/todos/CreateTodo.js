import React, { Component } from 'react'
import {connect} from 'react-redux'

class CreateTodo extends Component {

  state = {
    text: ""
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" onChange={(e) => this.setState({text: e.target.value})} value={this.state.text}/>
          </p>
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (todoText) => dispatch({type: 'ADD_TODO', payload: todoText})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
