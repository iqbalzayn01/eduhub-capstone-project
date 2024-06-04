import PropTypes from 'prop-types';

export default function FormSignIn({
  className,
  handleSubmit,
  onChange,
  valueEmail,
  valuePassword,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col w-1/2 gap-5 ${className}`}
    >
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={valueEmail}
          onChange={onChange}
          className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={valuePassword}
          onChange={onChange}
          className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
          required
        />
      </div>
      <button
        type="submit"
        className="self-center w-1/2 font-semibold bg-black hover:bg-colorprimary text-colorprimary hover:text-black p-2 rounded-xl"
      >
        Sign In
      </button>
    </form>
  );
}

FormSignIn.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
  valueName: PropTypes.string,
  valueEmail: PropTypes.string,
  valuePassword: PropTypes.string,
  valueRole: PropTypes.string,
};
