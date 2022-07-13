import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loaduseraction,
  loginuseraction,
  registeruseraction,
  userotpaction,
} from "../../Actions/useraction";
import "./Login_Register.css";

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const Alert = useAlert();
  const { user, loading, isAuthenticated, error } = useSelector(
    (state) => state.User
  );

  const logintab = useRef()
  const registertab = useRef()
  const neutraltab = useRef()
  const {
    loading: Otpload,
    error: Otperror,
    CodeSent,
    useralready,
  } = useSelector((state) => state.Otp);

  useEffect(() => {
    if (isAuthenticated) {
      Alert.success("User Authenticated Successfully");
      Navigate("/");
      window.location.reload()
    }
    if (Otperror) {
      Alert.error(Otperror);
    }
    if (error) {
      Alert.error(error);
    }
    if (useralready === true) {
      // Navigate("/login/pass");
      switchTabs('login')
    } else if (useralready === false) {
      // Navigate("/register");
      switchTabs('register')
    }
  }, [isAuthenticated, dispatch, Otperror, useralready, Alert, Navigate,error]);
  
  useEffect(() => {
    dispatch(loaduseraction());
  }, [dispatch])
  
  const [Email_MobileNumber, setEmail_MobileNumber] = useState();
  const [Password, setPassword] = useState();
  const [Name, setName] = useState();
  const [CPassword, setCPassword] = useState();
  const [Avatar, setAvatar] = useState();
  const [code1, setcode1] = useState()
  const [code2, setcode2] = useState()
  const [code3, setcode3] = useState()
  const [code4, setcode4] = useState()

  const otphandle = e => {
    e.preventDefault();
    dispatch(userotpaction({ Email_MobileNumber }));
  };

  const AvatarChange = e => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatar(reader.result);
      }
    };
  };

  const loginhandle = e => {
    e.preventDefault();
    const data = { Email_MobileNumber, Code:code1+code2+code3+code4, Password };
    dispatch(loginuseraction(data));
  };
  const registerhandle = e => {
    e.preventDefault();
    const data = {
      Name,
      Email_MobileNumber,
      Password,
      CPassword,
      Code:code1+code2+code3+code4,
      Avatar,
    };
    dispatch(registeruseraction(data));
  };

  const switchTabs = (tab) => {
    if (tab === "login") {
      logintab.current.classList.remove("shift-to-right");
      neutraltab.current.classList.add("shift-to-left");
      registertab.current.classList.remove("shift-to-left");
      registertab.current.classList.add("shift-to-left2");
    }
    if (tab === "register") {
      logintab.current.classList.remove("shift-to-right");
      logintab.current.classList.add("shift-to-right2");
      neutraltab.current.classList.add("shift-to-right");
      registertab.current.classList.remove("shift-to-left");
    }
    if (tab === "main") {
      logintab.current.classList.add("shift-to-right");
      logintab.current.classList.remove("shift-to-right2");
      neutraltab.current.classList.remove("shift-to-right");
      registertab.current.classList.add("shift-to-left");
    }
  };

 
  const sec = useRef()
  const third = useRef()
  const fourth = useRef()

  const clickEvent = (e, next)=> {
    if (e.target.value.length) {
      next.current.focus();
    }
  }
  return (
    <>
    <div className="modalcontain">
      <div class="hide shift-to-left box" id="register-section" ref={registertab}>
        <div class="close">
          <a onClick={''}>
            <i class="abc5 fa fa-times fa-3x" aria-hidden="true"></i>
          </a>
        </div>

        <div class="back" onClick={()=>switchTabs('main')}>
          <i class="abc6 fa-solid fa-arrow-left-long"></i>
        </div>

        <h1 class="title4">REGISTER</h1>

        <div class="image-field">
          <img src={Avatar || "/bg.jpeg"} id="output" class="prof" />
          <input
            type="file"
            accept="image/*"
            name="image"
            id="file"
            onChange={AvatarChange}
            style={{'display': 'none'}}
          />
          <label for="file" class="choose">
            Upload Image
          </label>
        </div>

        <div class="txt_field2">
          <input type="text" style={{'color':'#adadad'}} required 
            value={Name}
            onChange={e=>setName(e.target.value)}
          />
          <label>Name</label>
          <span></span>
        </div>

        <div class="txt_field2">
          <input
            type="password"
            id="password1"
            style={{'color':'#adadad'}}
            required
            value={Password}
            onChange={e=>setPassword(e.target.value)}
          />
          <label>Password</label>
          <div class="eye1">
            <i class="fa fa-solid fa-eye" id="eye1" onClick={''}></i>
          </div>
          <span></span>
        </div>

        <div class="txt_field2">
          <input
            type="password"
            id="password2"
            style={{'color':'#adadad'}}
            required
            value={CPassword}
            onChange={e=>setCPassword(e.target.value)}
          />
          <label>Confirm Password</label>
          <div class="eye1">
            <i class="fa fa-solid fa-eye" id="eye1" onClick={''}></i>
          </div>
          <span></span>
        </div>

        <div class="otp-heading">
          <div class="title4">Enter OTP</div>
          <a class="title6" href="#" onClick={''}>
            Resend Otp
          </a>
        </div>

        <div class="userInput">
          <input
            class="otp"
            type="text"
            maxLength={1}
            onKeyUp={e=>clickEvent(e,sec)}
            value={code1 || ''}
            onChange={e=>setcode1(e.target.value)}
            onFocus={e=>e.target.select()}
          />
          <input
            class="otp"
            type="text"
            maxLength={1}
            onKeyUp={e=>clickEvent(e,third)}
            ref={sec}
            value={code2 || ''}
            onChange={e=>setcode2(e.target.value)}
            onFocus={e=>e.target.select()}
          />
          <input
            class="otp"
            type="text"
            maxLength={1}
            onKeyUp={e=>clickEvent(e,fourth)}
            ref={third}
            value={code3 || ''}
            onChange={e=>setcode3(e.target.value)}
            onFocus={e=>e.target.select()}
          />
          <input class="otp" type="text" maxLength={1} ref={fourth} 
            value={code4 || ''}
            onChange={e=>setcode4(e.target.value)}
            onFocus={e=>e.target.select()}
          />
        </div>

        <button class="button1" onClick={registerhandle}>REGISTER</button>
      </div>

      <div class="box pop-up" id="login-section" ref={neutraltab}>
        <div class="close">
          <a href="#">
            <i class="abc5 fa fa-times fa-3x" aria-hidden="true"></i>
          </a>
        </div>

        <img src="/PropTrack_Logo.png " class="img2" alt="" />

        <p class="abc3">
          <span>India's most innovative real estate platform</span>
          <span>to simplify home search.</span>
        </p>

        <div class="txt_field2">
          <input
            type="text"
            style={{'color':'#adadad'}}
            id="input-account"
            required
            value={Email_MobileNumber || ''}
            onChange={e=>setEmail_MobileNumber(e.target.value)}
          />
          <label>Enter Phone Number Or Email</label>
          <span></span>
        </div>

        <button class="button1 submit" onClick={otphandle}>CONTINUE</button>

        <p class="abc2">Or Connect With</p>

        <div class="other-btns">
          <button class="button2">
            <img src="/facebook-logo-png-23.png" class="img1" alt="" />
          </button>
          <button class="button2">
            <img src="/google-logo-9824.png" class="img1" alt="" />
          </button>
        </div>
      </div>

      <div class="box hide shift-to-right" id="password-section" ref={logintab}>
      <div class="close">
        <a href="#">
          <i class="abc5 fa fa-times fa-3x" aria-hidden="true"></i>
        </a>
      </div>
      <div class="back">
        <i class="abc6 fa-solid fa-arrow-left-long"></i>
      </div>
      <h1 class="title4">ENTER PASSWORD</h1>
      <p class="abc">
        <span>Enter password for {Email_MobileNumber}</span>
        <a href="login.html" class="edit" style={{'color':'rgb(77, 2, 135)'}}>
          Edit
        </a>
      </p>
      <div class="txt_field2">
        <input type="password" id="password" style={{'color':'#adadad'}} required
        
        value={Password}
            onChange={e=>setPassword(e.target.value)}
         />
        <label>PASSWORD</label>
        <span></span>
        <div class="eye1">
          <i class="fa fa-solid fa-eye" id="eye" onClick={''}></i>
        </div>
      </div>

      <div class="title3">OR</div>

      <div class="otp-heading">
        <div class="title4">ENTER OTP</div>
        <a class="title6" href="#">
          RESENDOTP
        </a>
      </div>

      <div class="userInput">
        <input
          class="otp"
          type="text"
          id="ist"
          maxLength={1}
          onKeyUp={e=>clickEvent(e,sec)}
        />
        <input
          class="otp"
          type="text"
          id="sec"
          maxLength={1}
          onKeyUp={e=>clickEvent(e,third)}
        />
        <input
          class="otp"
          type="text"
          id="third"
          maxLength={1}
          onKeyUp={e=>clickEvent(e,fourth)}
        />

        <input class="otp" type="text" id="fourth" maxLength={1} />
      </div>
      <button class="button1" onClick={loginhandle}>LOGIN</button>
    </div>
    </div>
    </>
  );
};

export default Login;
