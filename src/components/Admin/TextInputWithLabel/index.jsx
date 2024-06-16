import PropTypes from "prop-types";

export default function TextInputWithLabel({
  htmlFor,
  label,
  name,
  type,
  value,
  className,
  placeholder,
  onChange,
  accept,
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="sr-only">
        {label}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        accept={accept}
        required
      />
    </div>
  );
}

TextInputWithLabel.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  accept: PropTypes.string,
};
