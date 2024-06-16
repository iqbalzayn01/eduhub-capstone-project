import PropTypes from "prop-types";

export default function SAlert({ message, className }) {
  return <span className={className}>{message}</span>;
}

SAlert.propTypes = {
  message: PropTypes.string,
  className: PropTypes.string,
};
