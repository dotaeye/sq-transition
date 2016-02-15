import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup  from 'react-addons-css-transition-group'
import ReactDOM, { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import blacklist from 'blacklist';

const Transition = React.createClass({

    propTypes: {
        prefixCls: PropTypes.string,
        viewKey: PropTypes.string.isRequired,
        transitionName: PropTypes.oneOf([
            'fade', 'fade-expand', 'fade-contract',
            'show-from-left', 'show-from-right', 'show-from-top', 'show-from-bottom',
            'reveal-from-left', 'reveal-from-right', 'reveal-from-top', 'reveal-from-bottom'
        ]),
        transitionDurationEnter: PropTypes.number,
        transitionDurationLeave: PropTypes.number,
        transitionEnterEnabled: PropTypes.bool,
        transitionLeaveEnabled: PropTypes.bool
    },
    getDefaultProps(){
        return {
            prefixCls: 'sq-transition',
            transitionEnterEnabled: true,
            transitionLeaveEnabled: true,
            transitionDurationEnter: 500,
            transitionDurationLeave: 500
        }
    },

    render () {
        let {prefixCls,transitionName,transitionEnterEnabled,transitionLeaveEnabled,transitionDurationEnter,transitionDurationLeave,viewKey}=this.props;
        let props = blacklist(this.props, 'transitionName', 'transitionEnterEnabled', 'transitionLeaveEnabled', 'transitionDurationEnter', 'transitionDurationLeave');
        return (
            <ReactCSSTransitionGroup transitionName={prefixCls+'-'+transitionName}
                                     transitionEnter={transitionEnterEnabled}
                                     transitionLeave={transitionLeaveEnabled}
                                     transitionEnterTimeout={transitionDurationEnter}
                                     transitionLeaveTimeout={transitionDurationLeave}
                                     className={prefixCls}
                                     component='div'>
                <TransitionView className={prefixCls+'-view'} key={viewKey} {...props}>
                    {this.props.children}
                </TransitionView>
            </ReactCSSTransitionGroup>
        );
    }
});

const TransitionView = React.createClass({
    statics: {
        shouldFillVerticalSpace: true
    },
    propTypes: {
        children: React.PropTypes.node
    },
    render () {
        let props = blacklist(this.props, 'children');
        return <div {...props}>{this.props.children}</div>;
    }
});


export default Transition;