import React, { useEffect, useState } from 'react';
import styles from "./signUpStyle.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; //faEyeSlash, faEye


export default function SignUpPage() {
    const [user , setUser] = useState('');
    const [email , setEmail] = useState('');
    const [password ,setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const [showPassword , setShowPassword] = useState(false);
    const [showAlert , setShowAlert] = useState(false);

    const handleSumbit =(e) =>{
        e.preventDefault();
        if(password.length < 8){
            setShowAlert(true);
            return;
        }
        setShowAlert(false);
        console.log(user, email, password, confirmPassword)
        console.log(email, password)
        setUser('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');    
    }
    // add data in the local storage
    useEffect(()=>{
        localStorage.setItem('email', JSON.stringify(email)); 
    },[email]) 

    return <>
        <form className={styles.form} onSubmit={handleSumbit}>
            <h1 className={styles.signUp}>SignUp</h1>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faUser} className={styles.icon} />
                <input type="text" className={styles.signName} name="name" placeholder="User name" value={user} onChange={(e)=>setUser(e.target.value)}/>
            </div>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
                <input type="email" className={styles.signgmail} name="email" placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                <input type={showPassword? "text":"password"} className={styles.signpsd} name="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                {showPassword ? <FontAwesomeIcon icon={faEye} className={styles.icon} onClick={()=>setShowPassword(!showPassword)}/> : <FontAwesomeIcon icon={faEyeSlash} className={styles.icon} onClick={()=>setShowPassword(!showPassword)}/>}
            </div>
            <div className={styles.errorMsg}>
                {showAlert && <p className={styles.errorMessage}>Password must be at least 8 characters!</p>}
            </div>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon icon={faLock} className={styles.icon}/>
                <input type={showPassword? "text":"password"} className={styles.signConfirmPsd} name="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
                {showPassword ? <FontAwesomeIcon icon={faEye} className={styles.icon} onClick={()=> setShowPassword(!showPassword)}/>: <FontAwesomeIcon icon={faEyeSlash} className={styles.icon} onClick={()=> setShowPassword(!showPassword)}/>}
                
            </div>
            <button className={styles.signUpButton} type="submit" >SignUp</button>
        </form>   
    </>
}