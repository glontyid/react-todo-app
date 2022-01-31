import React from "react";

export default class Filter extends React.Component {
  constructor() {
    super();

    this.buttons = [
      {name: 'all', text: 'All'},
      {name: 'active', text: 'Active'},
      {name: 'done', text: 'Done'},
    ]
  }

  render() {
    const { filter, onFilterChange } = this.props
    const buttons = this.buttons.map(({name, text}) => {
      const isActive = filter === name
      const activeClass = isActive ? 'btn-success' : 'btn-light'

      return (
        <button 
        className={`${activeClass} btn me-1`}
        key={name}
        onClick={() => onFilterChange(name)}
        >{text}</button>
      )
    })
    return (
      <div>
        { buttons }
      </div>
    )
  }
}