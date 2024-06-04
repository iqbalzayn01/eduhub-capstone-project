import PropTypes from 'prop-types';

export default function FormSignUp({
  className,
  handleSubmit,
  onChange,
  valueName,
  valueEmail,
  valuePassword,
  valueRole,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-5 ${className}`}
    >
      <div className="flex justify-stretch gap-5">
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="First Name"
            value={valueName}
            onChange={onChange}
            className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
            required
          />
        </div>
        <div className="w-full">
          <input
            type="text"
            name="name"
            placeholder="Last Name"
            value={valueName}
            onChange={onChange}
            className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
            required
          />
        </div>
      </div>
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
      <div className="">
        <input
          type="text"
          name="role"
          placeholder="Role"
          value={valueRole}
          onChange={onChange}
          className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
          required
        />
      </div>
      <button
        type="submit"
        className="self-center w-1/4 font-semibold bg-black hover:bg-colorprimary text-colorprimary hover:text-black p-2 rounded-xl"
      >
        Sign Up
      </button>
    </form>
  );
}

FormSignUp.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func,
  onChange: PropTypes.func,
  valueName: PropTypes.string,
  valueEmail: PropTypes.string,
  valuePassword: PropTypes.string,
  valueRole: PropTypes.string,
};
