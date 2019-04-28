import React from 'react'

class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {todos:[1,2,3,4], done:[1,2,3,4]}
        this.handleDoneClick = this.handleDoneClick.bind(this)
        this.handleTodoClick = this.handleTodoClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit= this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    renderDone() {
        const strikeStyle = {'text-decoration':'line-through'}
        return (  <div>
        {
            this.state.done.map((doneItem,index)=>{
                return <div class='strike' style={strikeStyle} key={'done'+index} onClick={this.handleDoneClick} doneindex={index} > {doneItem}</div>
                })
        }
        </div>)
    }

    handleDoneClick(e) {
        console.log(e.target.attributes.doneindex)
        const indexToRemove = parseInt(e.target.attributes.doneindex.value)
        const valueToPush = e.target.innerText
        this.setState({done: this.state.done.filter((i,index) =>  index!== indexToRemove),
            todos: [...this.state.todos, valueToPush]
        })
    }
    handleTodoClick(e) {
        console.log(e.target.attributes.todoindex)
        const indexToRemove = parseInt(e.target.attributes.todoindex.value)
        const valueToPush = e.target.innerText
        this.setState({todos:  this.state.todos.filter((i,index) => index !== indexToRemove),
            done: [...this.state.done, valueToPush]
        })
    }
    renderTodo() {
        return (  <div>
        {
            this.state.todos.map((todoItem,index)=>{
                return <div class='todos'  key={'todos'+index } onClick={this.handleTodoClick} todoindex={index}> {todoItem}</div>
                })
        }
        </div>)
    }

    handleSubmit(event) {
        const value = this.state.value
        this.setState({
            todos: [...this.state.todos, value],
            value: ''
        })
        event.preventDefault();
      }

    render() {
        return (<div>
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <input type="submit" value="Add Todo" />
            </form>
            <br/>
            <div>Todos:</div>
            {this.renderTodo()}
            <br/>
            <br/>
            <div>Done:</div>
            {this.renderDone()}

            </div>)
    }
}

export {Todo}
export default Todo