import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FormSignUp from './formSignUp';

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
    phone: '',
    role: '',
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleGoogleRegister = async (e) => {
    e.preventDefault();
    const { name, email, password, password2, phone, role } = formData;

    if (!email || !password || !password2 || !name || !role || !phone) {
      return alert('Silakan lengkapi data');
    }

    if (password !== password2) {
      return alert('Password harus sama');
    }

    if (password.length < 6) {
      return alert('Password harus lebih dari 6 karakter');
    }

    const auth = getAuth();
    const db = getFirestore();

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const user = result.user;

      // Simpan informasi pengguna ke Firestore
      await setDoc(doc(db, 'users', user.uid), {
        name,
        email,
        phone, // pastikan ini adalah phone bukan phone
        is_admin: false,
        role,
      });

      // Simpan informasi pengguna ke local storage
      localStorage.setItem('user', JSON.stringify(user));

      // Navigate to a different page if necessary
      navigate('/some-page');
    } catch (err) {
      console.error(err);
      alert('Error creating user');
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
          className="mb-20 mx-full"
          handleSubmit={handleGoogleRegister}
          onChange={handleInputChange}
          valueName={formData.name} // updated prop name
          valueEmail={formData.email}
          valuePassword={formData.password}
          valuePassword2={formData.password2}
          valuePhoneNumber={formData.phone}
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
