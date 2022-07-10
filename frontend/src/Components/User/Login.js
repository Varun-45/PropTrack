import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loaduseraction, loginuseraction, registeruseraction, userotpaction } from '../../Actions/useraction'
import './Login.css'

const Login = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch()
  const Alert = useAlert()
  const {user,loading,isAuthenticated,error} = useSelector(state=>state.User)
  
  const {loading: Otpload, error: Otperror,CodeSent,useralready} = useSelector((state) => state.Otp);

  useEffect(() => {
    if(isAuthenticated){
      Alert.success('User Authenticated Successfully')
      Navigate('/')
    }
    if(Otperror){
      Alert.error(Otperror)
    }
    if(error){
      Alert.error(error)
    }
    if(useralready===true){
      Navigate('/login/pass')
    }else if(useralready===false){
      Navigate('/register')
    }
    dispatch(loaduseraction())
  }, [isAuthenticated,dispatch,Otperror,useralready,Alert,Navigate])

  const [Email_MobileNumber, setEmail_MobileNumber] = useState()
  const [Code, setCode] = useState()
  const [Password, setPassword] = useState()
  const [Name, setName] = useState()
  const [CPassword, setCPassword] = useState()
  const [Avatar, setAvatar] = useState()
  
  const continuehandle = (e)=>{
    e.preventDefault()
    dispatch(userotpaction({Email_MobileNumber}))
  }

  const AvatarChange = (e) => {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };
  };

  const loginhandle = (e)=>{
    e.preventDefault()
    const data = {Email_MobileNumber,Code,Password}
    dispatch(loginuseraction(data))
  }
  const registerhandle = (e)=>{
    e.preventDefault()
    const data = {Name,Email_MobileNumber,Password,CPassword,Code,Avatar}
    dispatch(registeruseraction(data))
  }
  
  return (
    <>
    <div className="boxcontain">

      <div className="box">
        <div className="close">
            <a href="#" className="close1" >
        <i className="abc5 fa fa-times fa-3x" aria-hidden="true"></i></a>
    </div>
    <div className="up">
        <img src="/PropTrack_Logo.png " className="img2" alt=""/>
    </div>
    <div>
        <p className="abc3"> India’s most innovative real estate platform <br/> to simplify home search. </p>
    </div>
    <div className="txt_field">
        <input type="text"  style={{'color':'#adadad'}} required onClick={(e)=>setEmail_MobileNumber(e.target.value)} />
        <span></span>
        <label>Enter Phone Number Or Email</label>
      </div>
      <div className='btn_field'>
        <button className="button1" onClick={continuehandle}>CONTINUE</button>
      </div>
      <div>
        <p className="abc2">Or Connect With</p>
      </div>
      <div>
      <button  className="button2"><img src="/facebook-logo-png-23.png" className="img1" alt=""/></button>
      <button className="button2"><img src="/google-logo-9824.png" className="img1" alt=""/></button>
    </div>
    </div>
    </div>
    </>
  )
}

export default Login