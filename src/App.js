import React from 'react';
import Todolist from './Todolist';
import Form from './Form';
import Itemlist from './Itemlist';

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      input:'',
      todos: []
    }
    this.id =0
    this.handleChange=this.handleChange.bind(this)
    this.handleCreate=this.handleCreate.bind(this)
    this.handleKeyPress=this.handleKeyPress.bind(this)
  }

  handleChange(e){
    this.setState({
      input:e.target.value
    })
  }

  handleCreate(){
    const {input,todos} = this.state;
    this.setState({
      todos:todos.concat({
        id:this.id++,
        text:input,
        checked:false
      }),
      input:''
    })
  }

  handleKeyPress(e){
    if(e.key === 'Enter'){
      this.handleCreate();
    }
  }

  render(){
    const {input, todos} = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress
    } = this;

    return (
      <Todolist form={(<Form
        value={input}
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        onCreate={handleCreate}
      />)}><Itemlist todos={todos} /></Todolist>
      
    )
  }
}

export default App;