import PropTypes from 'prop-types';

const FormSignUp = ({
  valueName,
  valueEmail,
  valuePassword,
  valuePassword2,
  valuePhoneNumber,
  valueRole,
  onChange,
  handleSubmit,
  className,
}) => {
  return (
    <div className="">
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col w-full gap-5  ${className}`}
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={valueName}
            onChange={onChange}
            className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
            required
          />
        </div>
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
        <div className="flex justify-stretch gap-5">
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
          <div>
            <input
              type="password"
              name="password2"
              placeholder="Confirm Password"
              value={valuePassword2}
              onChange={onChange}
              className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
              required
            />
          </div>
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={valuePhoneNumber}
            onChange={onChange}
            className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
            required
          />
        </div>
        <div>
          {/* <input
            type="text"
            name="role"
            placeholder="Role"
            value={valueRole}
            onChange={onChange}
            className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
            required
          /> */}
          <select
            name="role"
            value={valueRole}
            onChange={onChange}
            className="w-full bg-transparent p-2 border border-colorgray rounded-xl"
            required
          >
            <option value="" disabled style={{ color: 'gray' }}>
              Select a role
            </option>
            <option value="student">Student</option>
            <option value="none">None</option>
          </select>
        </div>
        <button
          type="submit"
          className="self-center w-1/4 font-semibold bg-black hover:bg-colorprimary text-colorprimary hover:text-black p-2 rounded-xl"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

FormSignUp.propTypes = {
  valueName: PropTypes.string.isRequired,
  valueEmail: PropTypes.string.isRequired,
  valuePassword: PropTypes.string.isRequired,
  valuePassword2: PropTypes.string.isRequired,
  valuePhoneNumber: PropTypes.string.isRequired,
  valueRole: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FormSignUp;
