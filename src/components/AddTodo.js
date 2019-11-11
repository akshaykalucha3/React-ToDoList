import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Addtodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.Addtodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });


    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex', padding: '5px' }}>
                <input type="text"
                    name="title" style={{ flex: '10' }} placeholder="Add Todo ..." onChange={this.onChange} value={this.state.title} />
                <input type="submit" value="submit" className="btn" style={{ flex: '1' }} />
            </form>
        )
    }
}

//Proptypes
Addtodo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default Addtodo;