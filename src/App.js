import React, {Component} from 'react';
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

            <li className="new-item list-group-item">
              <input type="text" className="input-item" id="list-input" placeholder="new item..."/>
              <button type="submit" className="add-item">Add Item</button>
            </li>

          </ul>
          
          
        </div>
    );
  }
}

export default shoppinglist;
