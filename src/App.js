import React, {Component} from 'react';
import './App.css';

class shoppinglist extends Component {

  constructor(props){
    super(props);

    this.state = {
      list: [],
      listInputs: ''
    };
  }

  //this is to store the value

  listInputValue = (e) => {
    this.setState({listInputs: e.target.value})
  }

  // this will add a new item to the list

  addListItem = (e) => {
    e.preventDefault();

    var listItem = {
      id: Date.now(),
      text: this.state.listInputs
    }

    var shoppingList = [...this.state.list,listItem];

    this.setState({
      list: shoppingList,
      listInputs:''
    })
  }

  removeListItem = (listId) => {
    var list = this.state.list;
    var filteredList = list.filter(function(item){return item.id !=listId});
    this.setState({list:filteredList});
  }

  render(){
    return(
        <div className="wrap container">
          <h1>Shopping List</h1> 
          <ul className="list-group">
            {
              this.state.list.map((listItem) => {
                return(
                  <li className="list-group-item" key={listItem.id}>
                    <div className="item">
                      <input type="checkbox" className="checkbox"/>
                      {listItem.text}
                    </div>
                    <i onClick={(e) => {this.removeListItem(listItem.id)}} className="far fa-times-circle note-remove"></i>
                  </li>
                );
              })
            }
            <form className="new-shopping-item">
              <li className="new-item list-group-item">
                <input type="text" className="input-item" id="list-input" placeholder="new item..." value={this.state.listInputs} onChange={this.listInputValue}/>
                <button id="add-item" type="submit" className="add-item-btn" onClick={this.addListItem}>Add Item</button>
              </li>
            </form>
          </ul>
        </div>

        
    );
  }
}

export default shoppinglist;
