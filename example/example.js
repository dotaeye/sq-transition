import React from 'react';
import ReactDOM from 'react-dom';
import SQTransition from '../src/sq-transition';

const animation = [
    'fade', 'fade-expand', 'fade-contract',
    'show-from-left', 'show-from-right', 'show-from-top', 'show-from-bottom',
    'reveal-from-left', 'reveal-from-right', 'reveal-from-top', 'reveal-from-bottom'
];

var App = React.createClass({

    getInitialState(){
        return {
            current: 'A',
            enableTransition: false
        }
    },

    onTransition(){
        let transitionName = animation[Math.floor(Math.random() * animation.length)];
        let current = this.state.current == 'A' ? 'B' : 'A';
        this.setState({
            current: current,
            enableTransition: true,
            transitionName: transitionName
        })
    },

    render () {
        let {enableTransition,current,transitionName}=this.state;
        let Component = current == 'A' ? BoxA : BoxB;
        return (
            <div>
                <h4>Animation Name: {transitionName}</h4>
                <ul>
                    <li>
                        <button type='button' onClick={this.onTransition}>Do Transition</button>
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
            <div style={{ background: '#EF9393',height:'100%' }}>
                <span>BoxA</span>
            </div>
        );
    }
});

var BoxB = React.createClass({
    render () {
        return (
            <div style={{ background: '#ddd',height:'100%'}}>
                <span>BoxB</span>
            </div>
        );
    }
});


ReactDOM.render(<App />, document.getElementById('example'));
