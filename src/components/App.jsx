import React from "react";
import Search from "./Todo/Search";
import Title from "./Todo/Title";
import TodoList from "./Todo/TodoList";
import Filter from "./Todo/Filter";
import Status from "./Todo/Status";
import classes from "./App.module.css";
import TodoAddForm from "./Todo/TodoAddForm";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todoItems: [
        {text: 'Встать в 9:00', id: 0, important: true, done: false},
        {text: 'Умыться', id: 1, important: false, done: false},
        {text: 'Позавтракать', id: 2, important: false, done: true}
      ],
      term: '',
      filter: 'all'
    }

    this.createTodoItem = (value) => {
      return {
        text: value,
        id: this.state.todoItems.length + 1,
        important: false,
        done: false
      }
    }

    this.deleteItem = (id) => {
      this.setState(({todoItems}) => {
        let newTodoItems = todoItems.slice();
  
        return {
          todoItems: newTodoItems.filter(item => {
            return item.id !== id
          })
        }
      })
    }

    this.addItem = (value) => {
      this.setState(({todoItems}) => {
        let newTodoItems = todoItems.slice();

        return {
          todoItems: [...newTodoItems, this.createTodoItem(value)]
        };
      })
    }

    this.onToggleProperty = (array, id, propName) => {
      const idx = array.findIndex((el) => el.id === id);
      const newItem = {...array[idx], [propName]: !array[idx][propName]}

      return [...array.slice(0, idx), newItem, ...array.slice(idx + 1)]
    }

    this.onToggleImportant = (id) => {
      this.setState(({todoItems}) => {
        return {
          todoItems: this.onToggleProperty(todoItems, id, 'important')
        }
      })
    }

    this.onToggleDone = (id) => {
      this.setState(({todoItems}) => {
        return {
          todoItems: this.onToggleProperty(todoItems, id, 'done')
        }
      })
    }

    this.onSeachChange = (term) => {
      this.setState({term})
    }

    this.filterItems = (items, filter) => {
      switch (filter) {
        case 'all':
          return items
        case 'active':
          return items.filter(item => !item.done)
        case 'done': 
          return items.filter(item => item.done)
        default: 
          return items
      }
    }

    this.onFilterChange = (filter) => {
      this.setState({filter})
    }

    this.search = (items, term) => {
      if (term.length === 0) {
        return items
      }

      return items.filter(item => {
        return item.text.toLowerCase().indexOf(term.toLowerCase()) > -1
      })
    }
  }

  render() {
    const { todoItems, term, filter } = this.state
    const visibleItems = this.filterItems(this.search(todoItems, term), filter)
    const inTodo = todoItems.filter(item => {
      return !item.done
    })

    const isDone = todoItems.filter(item => {
      return item.done
    })

    return (
      <div className={classes.App}>
        <Title/>
        <Status todo={inTodo.length} done={isDone.length}/>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <Search 
          todo={visibleItems}
          onSeachChange={this.onSeachChange}
          />
          <Filter 
          filter={filter}
          onFilterChange={this.onFilterChange}
          />
        </div>
        <TodoList 
        todoItems={visibleItems} 
        onDeleted={(id) => this.deleteItem(id)}
        onToggleImportant={(id) => this.onToggleImportant(id)}
        onToggleDone={(id) => this.onToggleDone(id)}
        />
        <TodoAddForm onAddForm={(value) => this.addItem(value)} />
      </div>
    );
  }
};