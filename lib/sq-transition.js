'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _blacklist = require('blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transition = _react2.default.createClass({
    displayName: 'Transition',

    propTypes: {
        prefixCls: _react.PropTypes.string,
        viewKey: _react.PropTypes.string.isRequired,
        transitionName: _react.PropTypes.oneOf(['fade', 'fade-expand', 'fade-contract', 'show-from-left', 'show-from-right', 'show-from-top', 'show-from-bottom', 'reveal-from-left', 'reveal-from-right', 'reveal-from-top', 'reveal-from-bottom']),
        transitionDurationEnter: _react.PropTypes.number,
        transitionDurationLeave: _react.PropTypes.number,
        transitionEnterEnabled: _react.PropTypes.bool,
        transitionLeaveEnabled: _react.PropTypes.bool
    },
    getDefaultProps: function getDefaultProps() {
        return {
            prefixCls: 'sq-transition',
            transitionEnterEnabled: true,
            transitionLeaveEnabled: true,
            transitionDurationEnter: 500,
            transitionDurationLeave: 500
        };
    },
    render: function render() {
        var _props = this.props;
        var prefixCls = _props.prefixCls;
        var transitionName = _props.transitionName;
        var transitionEnterEnabled = _props.transitionEnterEnabled;
        var transitionLeaveEnabled = _props.transitionLeaveEnabled;
        var transitionDurationEnter = _props.transitionDurationEnter;
        var transitionDurationLeave = _props.transitionDurationLeave;
        var viewKey = _props.viewKey;

        var props = (0, _blacklist2.default)(this.props, 'transitionName', 'transitionEnterEnabled', 'transitionLeaveEnabled', 'transitionDurationEnter', 'transitionDurationLeave');
        return _react2.default.createElement(
            _reactAddonsCssTransitionGroup2.default,
            { transitionName: prefixCls + '-' + transitionName,
                transitionEnter: transitionEnterEnabled,
                transitionLeave: transitionLeaveEnabled,
                transitionEnterTimeout: transitionDurationEnter,
                transitionLeaveTimeout: transitionDurationLeave,
                className: prefixCls,
                component: 'div' },
            _react2.default.createElement(
                TransitionView,
                _extends({ className: prefixCls + '-view', key: viewKey }, props),
                this.props.children
            )
        );
    }
});

var TransitionView = _react2.default.createClass({
    displayName: 'TransitionView',

    statics: {
        shouldFillVerticalSpace: true
    },
    propTypes: {
        children: _react2.default.PropTypes.node
    },
    render: function render() {
        var props = (0, _blacklist2.default)(this.props, 'children');
        return _react2.default.createElement(
            'div',
            props,
            this.props.children
        );
    }
});

exports.default = Transition;
module.exports = exports['default'];
