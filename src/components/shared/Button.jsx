import PropTypes from 'prop-types'

const Button = ({children,version,type,isDisabled}) => {
  return (
    <button type={type} isDisabled={isDisabled} className={`btn btn-${version}`}>
        {children}
    </button>
  )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false
}

Button.propTypes={
    children: PropTypes.node.isRequired,
    version: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired

}

export default Button
