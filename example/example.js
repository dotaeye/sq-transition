import React from 'react';
import ReactDOM from 'react-dom';
import SQTransition from '../src/sq-transition';


var App = React.createClass({

    getInitialState(){
        return {
            current: 'A',
            enableTransition: false
        }
    },

    onTransitionToA(){
        this.setState({
            current: 'A',
            enableTransition: true,
            transitionName: 'show-from-left',
        })
    },
    onTransitionToB(){
        this.setState({
            current: 'B',
            enableTransition: true,
            transitionName: 'show-from-right'
        })
    },
    render () {
        let {enableTransition,current,transitionName}=this.state;
        let Component = current == 'A' ? BoxA : BoxB;
        return (
            <div >
                <ul>
                    <li>
                        <button type='button' onClick={this.onTransitionToB}>transition To B</button>
                    </li>
                    <li>
                        <button type='button' onClick={this.onTransitionToA}>transition To A</button>
                    </li>
                </ul>
                <div style={{ background: '#ccc', width: 600, height: 640, padding: 10 }}>
                    <SQTransition
                        transitionEnterEnabled={enableTransition}
                        transitionLeaveEnabled={enableTransition}
                        transitionName={transitionName}
                        viewKey={current}
                        >
                        <Component/>
                    </SQTransition>
                </div>
            </div>
        );
    }
});

var BoxA = React.createClass({
    render () {
        return (
            <div style={{ background: '#EF9393',padding:30 }}>
                <span>BoxA</span>
            </div>
        );
    }
});

var BoxB = React.createClass({
    render () {
        return (
            <div style={{ background: '#ddd',padding:30  }}>
                <span>BoxB</span>
            </div>
        );
    }
});


ReactDOM.render(<App />, document.getElementById('example'));
