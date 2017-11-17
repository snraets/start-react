import React, {Component} from 'react';
import {connect} from 'react-redux';

import {addChore} from '../reducers/chores';

class AddChore extends Component {

    constructor(){
        super();
        this.state = {
            newChore: ''
        };
    }

    update(evt){
        this.setState({newChore: evt.target.value})
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addChore(this.state.newChore);
    }

    render(){
        return <form onSubmit={this.handleSubmit.bind(this)}>
            <label>Add Chore</label>
            <input type="input" 
            onChange={this.update.bind(this)}/>
        </form>
    }
}

function mapState (state) {
    return {newChore: state.newChore}
}

function mapDispatch(dispatch){
    return {
        addChore: (chore) => dispatch(addChore(chore))
    }
}

export default connect(null, mapDispatch)(AddChore);