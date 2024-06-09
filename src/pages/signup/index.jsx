import { Link } from 'react-router-dom';
import { useState } from 'react';

import { signUp } from '../../utils/auth';
import { db } from '../../utils/firebase';
import { doc, setDoc } from 'firebase/firestore';

import FormSignUp from './formSignUp';

export default function SignUp() {
  const [formData, setFormData] = useState({
    // firstName: '',
    // lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signUp(formData.email, formData.password);
      const user = userCredential.user;
      await setDoc(doc(db, 'users', user.uid), {
        // firstName: formData.firstName,
        // lastName: formData.lastName,
        email: formData.email,
      });
      alert('Registration successful!');
    } catch (error) {
      console.error('Error creating user:', error);
      alert('Error creating user: ' + error.message);
    }
  };

  return (
    <div className="grid grid-cols-2 w-full h-screen">
      <div
        className="flex flex-col justify-between p-10"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./images/img-signup.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectFit: 'cover',
        }}
      >
        <p className="text-3xl text-colorprimary font-extrabold">
          InsightGathers.
        </p>
        <div className="flex items-end justify-between">
          <span className="copyright w-1/3 text-colorprimary font-medium">
            Copyright © 2024 InsightGathers All Right Reserved
          </span>
          <ul className="flex gap-5">
            <li>
              <Link
                to="#terms-of-service"
                className="text-colorprimary font-semibold"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="#privacy-police"
                className="text-colorprimary font-semibold"
              >
                Privacy Police
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="w-4/5 text-center text-5xl font-semibold">
          Expand Your Knowledge & Skills
        </h1>
        <p className="w-[60%] text-center text-lg font-medium">
          We provide various top-notch events to help you enhance your skills in
          the field of technology.
        </p>
        <FormSignUp
          className="mb-20"
          handleSubmit={handleSubmit}
          onChange={handleChange}
          valueFirstName={formData.firstName}
          valueLastName={formData.lastName}
          valueEmail={formData.email}
          valuePassword={formData.password}
          valueRole={formData.role}
        />
        <span className="text-lg text-colorgray font-medium">
          Already have an account?{' '}
          <Link to="/signin" className="text-black font-bold underline">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
}
