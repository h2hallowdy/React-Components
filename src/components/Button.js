import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import './Button.css';
class Button extends Component {

    render() {
        const { color, border, styleBtn, children } = this.props;
        let className = 'button-custom';
        if (border) {
            className = ClassNames(className, 'button--border-thin');
        }
        switch(styleBtn) {
            case 'ujarak':
                className = ClassNames(className, 'button--ujarak');
                break;
            case 'mirror':
                className = ClassNames(className, 'button--mirror');
                break;
            default:
                break;
        }
        switch (color) {
            case 'blue':
                className = ClassNames(className, 'btn-blue');
                break;
            case 'red':
                className = ClassNames(className, 'btn-red');
                break;
            case 'green':
                className = ClassNames(className, 'btn-green');
                break;
            case 'gray':
                className = ClassNames(className, 'btn-gray');
                break;
            case 'yellow':
                className = ClassNames(className, 'btn-yellow');
                break;
            default:
                className = ClassNames(className, 'btn-transparent', 'button--border-thin');
                break;
        }
        return (
            <button className={className}>{children}</button>
        );
    }
}
Button.propTypes = {
    color: PropTypes.string,
    children: PropTypes.string.isRequired
};

export default Button;