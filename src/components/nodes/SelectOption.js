import PropTypes from 'prop-types';

const SelectOption = ({value, children, ...props}) => (<option value={value} {...props}>{children}</option>);

SelectOption.propTypes = {
    value: PropTypes.string.isRequired
}

export default SelectOption