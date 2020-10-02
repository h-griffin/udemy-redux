import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux';
// import * as actionTypes from '../../store/actions';
import * as actionCreators from '../../store/actions/actions';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                {/* <CounterOutput value={this.state.counter} /> */}
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
                < hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)} >store result</button>
                <ul>
                    {this.props.storedResults.map(strResult => (
                        <li 
                            key={strResult.id} 
                            onClick={() => this.props.onDeleteResult(strResult.id)} //give id to delete
                            >{strResult.value} </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // how state managed by redux should be mapped to props
    
    return {
        // map of prop names and slices
        ctr: state.ctr.counter,
        storedResults: state.res.results,
    }
}

const mapDispatchToProps = dispatch => {
    // what action

    return{
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAddCounter: () => dispatch(actionCreators.add(5)),
        onSubtractCounter: () => dispatch(actionCreators.subtract(5)),

        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
        // make sure reducer handles type
    }
}

// what slice of state and what action
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//                       ^ state           ^ action           ^ container