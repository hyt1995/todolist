import React from 'react';
import Item from './Item';

class Itemlist extends React.Component{
    render(){
        const {todos, onToggle, onRemove} = this.props;
        const todolist = todos.map(
            ({id, text, checked}) => (
              <Item
                id={id}
                text={text}
                checked={checked}
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
              />
            )
          );
        return(
            <div>
                {todolist}}
            </div>
        )
    }
}

export default Itemlist;