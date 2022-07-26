import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    const {
      loginValid,
      handleClick,
      children,
      dataTestId,
    } = this.props;

    return (
      <div>
        <button
          type="button"
          disabled={ loginValid }
          onClick={ handleClick }
          data-testid={ dataTestId }
        >
          { children }
        </button>
      </div>
    );
  }
}

Button.defaultProps = {
  loginValid: false,
  dataTestId: 'btn',
};

Button.propTypes = {
  loginValid: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  dataTestId: PropTypes.string,
};

export default Button;
