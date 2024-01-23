
import styled from '@emotion/styled';
import { Dialog, TextField, Box, Button, Typography } from '@mui/material'
import { useState } from 'react';
import { authenticateSignup, authenticatelogin } from './service/api.js';
import { DataContext } from '../context/DataProvider.jsx';
import { useContext } from 'react';



export default function LoginDialog({ open, setOpen }) {

  // accountInitialsValue
  const accountInitialsValue = {
    login: {
      view: 'login',
      heading: 'Login',
      subHeading: 'Get access to your orders, whishlist and Recommendations'
    },
    signup: {
      view: 'signup',
      heading: "Look's Like you're new here!",
      subHeading: "Sign up with your mobile number to get started"
    }

  }

  //signupInitialsValue
  const signupInitialsValue = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ""
  }

  const loginInitialsValue={
    email:'',
    password:''
    
  }


  const [account, toogleAccount] = useState(accountInitialsValue.login);
  const [signUp, setSignup] = useState(signupInitialsValue);
  const { setAuthUserName } = useContext(DataContext);
  const [login,setLogin]=useState(loginInitialsValue)
  const[error,setError]=useState(false);

  const handleClose = () => {
    setOpen(false);
    toogleAccount(accountInitialsValue.login);
    setError(false);
  }

  const toggleSignup = () => {
    toogleAccount(accountInitialsValue.signup);
  }

  const oninputChange = (e) => {
    setSignup({ ...signUp, [e.target.name]: e.target.value });
  


  }

  
  const onOutputChange=async (e)=>{
    setLogin({...login,[e.target.name]:e.target.value});
  }

  //  css
  const LoginButton = styled(Button)`
   text-transform:none;
   background:#ff8c00 ;
   width:100%;
   height:40px;
   margin-bottom:10px;
   color:#ffff;
   border-radius:2px;

  `
  const RequestOtp = styled(Button)`
   text-transform:none;
   background:#ffff ;
   width:100%;
   margin:20px 0px;
   color:#28750;
   height:40px;
   border-radius:2px;
   box-shadow: rgba(0, 0, 0,20%) 0px 2px 4px 0;


  `

  const Text = styled(Typography)`
   font-size:12px;
   color:#878787;
   margin:10px 0px;
   text-align:justify-content;
  
  `

  const CreateAccount = styled(Typography)`
  font-size:12px;
  margin:10px 4rem;
  text-align:center;
  color:#28750;
  cursor:pointer;
  `
  const SignUp = styled(Button)`
  text-transform:none;
  background:#ff8c00 ;
  width:100%;
  height:50px;
  margin-top:10px;
  color:#ffff;
  border-radius:2px;
  `

  const ErrorMessage=styled(Typography)`
   font-size:5px,
   margin-top:10px;
   font-weight:400;
   color:#ff6161,
 
  
  `
  
  const signupUser = async () => {
    let response = await authenticateSignup(signUp);
    if (!response) return;
    handleClose();
    setAuthUserName(signUp.firstname)

  }

  const LoginUser = async () => {
    let response = await authenticatelogin(login);
    if (response.status === 200) 
    {
      handleClose();
      setAuthUserName(response.data.data.firstname);
    }
    else
    {
      setError(true);
    }

  }


  return (
    <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>

      <Box className='w-[60vw] h-[85vh] flex'>

        <Box className='w-[49%]  bg-blue-600 p-[2rem] ' >
          <Typography variant='h5' className='text-white font-semibold'>{account.view === 'login' ? accountInitialsValue.login.heading : accountInitialsValue.signup.heading}</Typography>
          <Typography variant='p' className='text-white font-bold '>{account.view === 'login' ? accountInitialsValue.login.subHeading : accountInitialsValue.signup.subHeading}</Typography>
          <img className='mt-[45%]' src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="" />
        </Box>

        {/* //login page  */}
        {account.view === 'login' ? (
          <Box className="flex flex-col justify-around items-start p-[2.4rem] w-[67%] ">
            <TextField variant="standard" label="Enter Email Id" className='w-full' name="email" onChange={(e)=>onOutputChange(e)} />
          {error && (  <ErrorMessage >*Please Enter Valid Email or Password</ErrorMessage>)}
            <TextField variant="standard" label="Enter Password" className='w-full' name='password' onChange={(e)=>onOutputChange(e)}/>
            <Text className='text-xs'>By Continuing, you agree to Flipcart's Terms of Use and Privacy Policy.</Text>
            <LoginButton onClick={() => LoginUser()}>Login</LoginButton>
            <Typography style={{ textAlign: 'Center' }}>OR</Typography>
            <RequestOtp>Request OTP</RequestOtp>
            <CreateAccount onClick={() => toggleSignup()}>New to Flipcart? Create an account</CreateAccount>
          </Box>
        ) :
          (
            // signup page
            <Box className="flex flex-col justify-evenly items-start p-[2.4rem] w-[67%] ">
              <TextField variant="standard" name='firstname' label="Enter Firstname" onChange={(e) => oninputChange(e)} className='w-full' />
              <TextField variant="standard" name="lastname" label="Enter Lastname" onChange={(e) => oninputChange(e)} className='w-full' />
              <TextField variant="standard" name="username" label="Enter Username" onChange={(e) => oninputChange(e)} className='w-full' />
              <TextField variant="standard" name="email" label="Enter Email" onChange={(e) => oninputChange(e)} className='w-full' />
              <TextField variant="standard" name="password" label="Enter Password" onChange={(e) => oninputChange(e)} className='w-full' />
              <TextField variant="standard" name="phone" label="Enter Phone" onChange={(e) => oninputChange(e)} className='w-full' />
              <SignUp onClick={() => signupUser()}>Continue</SignUp>



            </Box>

          )


        }


      </Box>
    </Dialog>
  )
}
