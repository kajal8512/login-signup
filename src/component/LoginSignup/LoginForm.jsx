import React, { useState } from 'react';
import styles from './LoginForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';


export default function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // for show password
  const [showAlert, setShowAlert] = useState(false); // for show alert message
  
  const handleSumbit = (e) => {
    e.preventDefault();
    if(password.length < 8) {
      setShowAlert(true);
      return;
    }
    setShowAlert(false);
    console.log(email, password)
    setEmail('');
    setPassword('');
  }
   
  return <>
    {/*for multipule class name put array inside curly braces*/}
      <form className={styles.form} onSubmit={handleSumbit}> 
      <h1>&#x1F510; Login &#x1F510;</h1>
        <div className={styles.inputContainer}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <input type="email" placeholder="Enter email..." value={email} onChange={(e)=>setEmail(e.target.value)} required/>
        </div>
        <div className={styles.inputErrorContainer}>
        <div className={styles.inputContainer}>
          <FontAwesomeIcon icon={faLock} className={styles.icon}/>
          <input type={showPassword?"text":"password"} placeholder="Enter password..." value={password} onChange={(e) => setPassword(e.target.value)}
    className={styles.passwordInput}/>
          {
            showPassword ? <FontAwesomeIcon icon={faEye} className={styles.icon} onClick={() => setShowPassword(!showPassword)}/> : <FontAwesomeIcon icon={faEyeSlash} className={styles.icon} onClick={() => setShowPassword(!showPassword)}/>
          }
          </div>
          {
            showAlert && <p className={styles.alertMessage}>Password must be at least 8 characters!</p>
          }
          </div>
          <button className={styles.login} type="submit">Login</button>
          <div className='cornerButton'>
            <button className='sideButto'>Select here for SignUp</button>
        </div>
      </form>
  </>
};