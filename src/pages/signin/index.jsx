import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FormSignIn from './formSignIn';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

export default function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const db = getFirestore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleEmailPasswordLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    const auth = getAuth();
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;

      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);

      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.is_admin) {
          navigate('/admin-dashboard');
        } else {
          navigate('/homepage');
        }
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error signing in:', error);
      alert('Terjadi kesalahan saat masuk. Silakan coba lagi.');
    }
  };

  return (
    <div className="grid grid-cols-2 w-full h-screen">
      <div
        className="flex flex-col justify-between p-10"
        style={{
          backgroundImage: `url('./images/img-signin.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          objectFit: 'cover',
        }}
      >
        <p className="text-3xl text-colorprimary font-extrabold">EduHub</p>
        <div className="flex flex-col gap-40">
          <p className="text-3xl text-white font-medium">
            We provide various top-notch events to help you enhance your skills
            in the field of technology.
          </p>
          <span className="copyright w-1/3 text-colorprimary font-medium">
            Copyright © 2024 EduHub All Right Reserved
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between p-10 gap-10">
        <div className="flex w-full flex-col items-center justify-center mt-40 gap-10">
          <h1 className="w-4/5 text-center text-5xl font-semibold">
            Welcome Back
          </h1>
          <p className="w-[60%] text-center text-lg font-medium">
            Please enter your details.
          </p>
          <FormSignIn
            className="mb-20"
            handleSubmit={handleEmailPasswordLogin}
            onChange={handleInputChange}
            valueEmail={formData.email}
            valuePassword={formData.password}
          />
          <span className="text-lg text-colorgray font-medium">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-black font-bold underline">
              Sign Up
            </Link>
          </span>
        </div>
        <ul className="self-end flex items-end gap-5"></ul>
      </div>
    </div>
  );
}
