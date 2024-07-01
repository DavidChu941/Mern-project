import React, { useState } from 'react'
import './style.scss'
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import CommonInput from '../../components/commonInput';
import MainButton from '../../components/mainButton';
import { useSnackbar } from "notistack";
import { apis } from '../../apis';

export default function OTPVerify() {
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();
  const email = location?.state?.email || '';
  const [verifyCode, setVerifyCode] = useState("")

  const verifyEmail = async () => {
    if (email !== '') {
      const verifyData = {
        otp: verifyCode, 
        email: email
      }
      await apis.verifyEmail(verifyData)
      .then((res: any) => {
        enqueueSnackbar({
          variant: "info",
          message: res.data,
        });
        setTimeout(() => {
          navigate('/login');
        }, 1000)
      })
      .catch((error) => {
        enqueueSnackbar({
          variant: "error",
          message: error.response.data || error.message,
        });
      })
    } else {
      enqueueSnackbar({
        variant: "info",
        message: "We haven't recognized your email. ",
      });
    }
  }

  const resendCode = async () => {
    await apis.codeAgain({email: email})
    .then((res) => {
      enqueueSnackbar({
        variant: "info",
        message: res.data?.msg,
      });
    })
  }

  return (
    <div className='otpVerifyBox'>
      <div className='titleBox'>	
				<div className='title'>OTP</div>
				<div className='caption'>You have received an OTP on your email address.</div>
        <div className='caption'>6-Digital Code is expired in 5 minutes. <span onClick={() => resendCode()}>Resend?</span></div>
			</div>
      <div className='subBox'>
				<div className='subTitle'>Enter OPT</div>
				<CommonInput placeholder='Enter the OTP' value={verifyCode} onChange={(event: any) => setVerifyCode(event.target.value.replace(/[^0-9.]/g, ''))} />
			</div>
      <div style={{marginTop: '20px'}}>
        <MainButton title="Verify" onClick={() => verifyEmail()} />
      </div>
    </div>
  )
}
