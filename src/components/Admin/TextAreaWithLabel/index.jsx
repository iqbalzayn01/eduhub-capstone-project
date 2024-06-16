import PropTypes from "prop-types";

export default function TextAreaWithLabel({
  htmlFor,
  label,
  name,
  type,
  value,
  className,
  placeholder,
  onChange,
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="sr-only">
        {label}
      </label>
      <textarea
        name={name}
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        required
      />
    </div>
  );
}

TextAreaWithLabel.propTypes = {
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
