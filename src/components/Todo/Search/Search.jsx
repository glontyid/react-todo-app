import React from "react";

export default class Search extends React.Component {
  constructor() {
    super();

    this.state = {
      term: ''
    }

    this.onChangeValue = (e) => {
      const term = e.target.value

      this.setState({term})
      this.props.onSeachChange(term)
    }
  }

  render() {
    return (
      <input 
      placeholder="search" 
      value={this.state.term}
      onChange={this.onChangeValue}
      />
    )
  }
}