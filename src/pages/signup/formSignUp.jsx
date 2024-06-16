import PropTypes from 'prop-types';

export default function FormSignUp({
  className,
  handleSubmit,
  onChange,
  valueFirstName,
  valueLastName,
  valueEmail,
  valuePassword,
  valuePassword2,
  valueRole,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-5 ${className}`}>
      <div className='flex justify-stretch gap-5'>
        <div className='w-full'>
          <input
            type='text'
            name='firstName'
            placeholder='First Name'
            value={valueFirstName}
            onChange={onChange}
            className='w-full bg-transparent p-2 border border-colorgray rounded-xl'
            required
          />
        </div>
        <div className='w-full'>
          <input
            type='text'
            name='lastName'
            placeholder='Last Name'
            value={valueLastName}
            onChange={onChange}
            className='w-full bg-transparent p-2 border border-colorgray rounded-xl'
            required
          />
        </div>
      </div>
      <div>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={valueEmail}
          onChange={onChange}
          className='w-full bg-transparent p-2 border border-colorgray rounded-xl'
          required
        />
      </div>
      <div>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={valuePassword}
          onChange={onChange}
          className='w-full bg-transparent p-2 border border-colorgray rounded-xl'
          required
        />
      </div>
      <div>
        <input
          type='password'
          name='password2'
          placeholder='Confirm Password'
          value={valuePassword2}
          onChange={onChange}
          className='w-full bg-transparent p-2 border border-colorgray rounded-xl'
          required
        />
      </div>
      <div>
        <input
          type='text'
          name='role'
          placeholder='Role'
          value={valueRole}
          onChange={onChange}
          className='w-full bg-transparent p-2 border border-colorgray rounded-xl'
          required
        />
      </div>
      <button
        type='submit'
        className='self-center w-1/4 font-semibold bg-black hover:bg-colorprimary text-colorprimary hover:text-black p-2 rounded-xl'>
        Sign Up
      </button>
    </form>
  );
}

FormSignUp.propTypes = {
  className: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  valueName: PropTypes.string.isRequired,
  valueEmail: PropTypes.string.isRequired,
  valuePassword: PropTypes.string.isRequired,
  valuePassword2: PropTypes.string.isRequired,
  valueRole: PropTypes.string.isRequired,
};
