import React, {Component} from 'react';
import {connect} from 'react-redux';

import {loadChores} from '../reducers/chores';

class Chores extends Component {

    componentDidMount(){
        this.props.loadChores();
    }

    render(){
        return <div>
            <h1>Chores</h1>
            <ul>
                {this.props.chores.map((chore, index) => <li key={chore.id} >{chore.name}</li>)}
            </ul>
        </div>
    }
}

function mapState (state) {
    return {chores: state.chores}
}

function mapDispatch(dispatch){
    return {
        loadChores: () => dispatch(loadChores())
    }
}

export default connect(mapState, mapDispatch)(Chores)
