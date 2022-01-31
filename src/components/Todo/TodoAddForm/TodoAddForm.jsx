import React from "react";

export default class TodoAddForm extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }

    this.onTextChange = (e) => {
      this.setState({
        text: e.target.value
      })
    }
  
    this.onSubmit = () => {
      this.props.onAddForm(this.state.text)
      this.setState({
        text: ''
      })
    }
  }

  render() {
    return (
      <form 
      className="mt-3 d-flex justify-content-between align-items-center"
      onSubmit={(e) => {this.onSubmit(); e.preventDefault();}}>
        <div className="input-group input-group-sm me-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">new item</span>
          </div>
          <input 
          type="text" 
          className="form-control"
          onChange={this.onTextChange}
          value={this.state.text}
          />
        </div>
        <button className="btn btn-success">add</button>
      </form>
    )
  }
}