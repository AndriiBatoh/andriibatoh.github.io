import PropTypes from 'prop-types';

const Select = ({name, children, ...props}) => (<select {...props}>{children}</select>);

Select.propTypes = {
    name: PropTypes.string.isRequired
}

export default Select;