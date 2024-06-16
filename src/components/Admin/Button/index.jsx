import PropTypes from "prop-types";

export default function SButton({
  children,
  action,
  loading,
  disabled,
  className,
  type,
}) {
  return (
    <button
      type={type}
      className={className}
      onClick={action}
      disabled={disabled}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}

SButton.propTypes = {
  children: PropTypes.string,
  action: PropTypes.func,
  type: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};
