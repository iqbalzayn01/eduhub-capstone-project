import PropTypes from 'prop-types';

export default function FormSignUp({
  className,
  handleSubmit,
  onChange,
  // valueFirstName,
  // valueLastName,
  valueEmail,
  valuePassword,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      // flex flex-col gap-5
      className={`flex flex-col w-1/2 gap-5 ${className}`}
    >
      {/* <div className="flex justify-stretch gap-5">
        <div className="w-full">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            // value={valueFirstName}
            onChange={onChange}
            className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
            // required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            // value={valueLastName}
            onChange={onChange}
            className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
            // required
          />
        </div>
      </div> */}
      <div className="">
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
      <div className="">
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
        Sign Up
      </button>
    </form>
  );
}

FormSignUp.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  // valueFirstName: PropTypes.string.isRequired,
  // valueLastName: PropTypes.string.isRequired,
  valueEmail: PropTypes.string.isRequired,
  valuePassword: PropTypes.string.isRequired,
};
