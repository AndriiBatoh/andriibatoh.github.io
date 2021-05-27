import PropTypes from 'prop-types';

const Button = ({type, children, ...props}) => (<button type={type} {...props}>{children}</button>);

Button.propTypes = {
    type: PropTypes.string.isRequired
}

export default Button