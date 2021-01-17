import {useState, useEffect} from 'react';
import Authcontext from './auth';
import axios from 'axios';
import validatePassword from 'utils/validation/validatePassword';

const API = process.env.REACT_APP_API_ENDPOINT

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [splash, setSplash] = useState(false);
  const [signUpError, setSignUpError] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [signInError, setSignInError] = useState({
    email: '',
    password: '',
  })
  const [resetPassInfo, setResetPass] = useState({
    message: '',
    error: ''
  });

  useEffect(() => {
    axios.get(`${API}/user/`, {withCredentials: true}).then(({data}) => {
      setUser(data.user); 
      setIsSignedIn(data.signIn)     
    }).catch(err => {
      console.log(err)
    })
  }, [isSignedIn]);

  const signIn = (data, callback) => {
    setSplash(true);
    if(!data.email) {
      signInErrorHandle("email", "Email is required");
      setSplash(false);
    }
    let errorPass = validatePassword(data.password);
    if(errorPass) {
      signInErrorHandle("password", "Password is required");
      setSplash(false);
    } else {
      axios.post(`${API}/user/signin`, {email: data.email, password: data.password}, {withCredentials: true})
      .then(({data}) => {
        setIsSignedIn(data.signIn);
        setSplash(false);
      })
      .then(() => {
        callback()
      })
      .catch(err => {
        console.log(err)
        setSplash(false);
      })
      
    }

  }

  const signUp = (data) => {
    setSplash(true);
    if(!data.email) {
      signUpErrorHandle("email", "Email is required");
      setSplash(false);
    }
    let errorPass = validatePassword(data.password);
    if(errorPass) {
      signUpErrorHandle("password", errorPass);
      setSplash(false);
    } else {
      axios.post(`${API}/user/signup`, {email: data.email, password: data.password, name: data.name}, {withCredentials: true}).then(({data}) => {
        console.log(data);
        setIsSignedIn(data.message)
        setSplash(false);
      }).catch(err => {
        console.log(err);
        setSplash(false);
      })
    }

  }

  const signOut = () => {
    setSplash(false);
    axios.get(`${API}/user/signout`, {withCredentials: true})
    .then(({data}) => {
      setIsSignedIn(data.signIn)
      setUser(null);
      setSplash(false);
    }).catch(err => {
      console.log(err);
      setSplash(false);
    })
  }

  const resetPassword = (email) => {
    axios.post(`${API}/user/resetpassword`, {email: email}, {withCredentials: true}).then(({data}) => {
      console.log(data);
      resetPasswordHandle("message", data.message)
    }).catch(err => {
      console.log(err)
      resetPasswordHandle("error", err.message)
    })
  }

  const clearError = (e) => {
    const{name} = e.target;
    setSignUpError((prevState) => ({
        ...prevState,
        [name]: '',
    })) 
    setSignInError((prevState) => ({
        ...prevState,
        [name]: '',
    })) 
  }

  const signInErrorHandle = (name, value) => {
    setSignInError((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }
  const signUpErrorHandle = (name, value) => {
    setSignUpError((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const resetPasswordHandle = (name, value) => {
    setResetPass((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <Authcontext.Provider
      value={{
        isSignedIn,
        user,
        splash,
        signInError,
        signIn,
        signUpError,
        signUp,
        signOut,
        clearError,
        resetPassword,
        resetPassInfo
      }}
    >
        {children}
    </Authcontext.Provider>
  )
}

export default AuthProvider;