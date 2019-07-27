import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class shoppinglist extends Component {

  constructor(props){
    super(props);
    this.items = [
      {
        id: 1,
        text: 'milk'
      },
      {
        id: 2,
        text: 'bread'
      },
      {
        id: 3,
        text: 'eggs'
      },
      {
        id: 4,
        text: 'flour'
      },
      {
        id: 5,
        text: 'cheese'
      }
    ];
  }

  render(){
    return(
        <div className="wrap container">
          <h1>Shopping List</h1> 
          <ul className="list-group">
            {
              this.items.map(function(item){
                return(
                  <li className="list-group-item" key={item.id}>
                    <div className="item">
                      {item.text}
                    </div>
                    <i className="far fa-times-circle note-remove"></i>
                  </li>
                );
              })
            }
          </ul>
          <div className="new-item">
            <button type="submit" className="add-item" onClick={() => alert('I want to create a new list item but i dont know how. YET!!!!!!')}>Add Item</button>
          </div>
        </div>
    );
  }
}

export default shoppinglist;
