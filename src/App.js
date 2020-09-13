import React, { Component } from 'react';

class App extends Component {
  state = {
    newItem: '',
    list: []
  }

  updatedInput(key, value) {
    this.setState({
      [key]: [value]
    })
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice(0)
    }

    const list = [...this.state.list]

    list.push(newItem)

    this.setState({
      newItem: "",
      list
    })
  }

  deleteItem(id) {
    const list = [...this.state.list]

    const filteredList = list.filter(item => item.id !== id)

    this.setState({
      list: filteredList
    })
  }

  render() {

    const { newItem, list } = this.state;

  return (
    <div className="App">
      <div>
        Add item here
        <br/>
        <input
          type="text"
          placeholder="Type item here"
          value={newItem}
          onChange={e => this.updatedInput("newItem", e.target.value)}
        />
        <button
          onClick={() => this.addItem()}
        >
          Add
        </button>
        <ul>
            {list.map(item => {
              return (
                <li key={item.id}>{item.value}
                <button
                  onClick={() => this.deleteItem(item.id)}
                >
                  X
                </button></li>
              )
            })}
        </ul>
      </div>
    </div>
    );
  }
}

export default App;
