import styled from 'styled-components'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const SignupContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #cce8f4;
    position: relative;
    overflow: hidden;
`;

const FormContainer = styled.div`
    width: 959px;
    height: 763px;
    background-color: #FFFFFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;

    .signup-form__logo {
        width: 550px;
        height: 147px;
        position: absolute;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;

        .signup-form__logo-text {
            font-family: 'Lao Muang Don';
            font-style: normal;
            font-weight: 400;
            font-size: 75px;
            line-height: 94px;
            text-align: center;
            
            color: #000000;

            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    
    .signup-form__input {
        .signup-form__input-name {
            width: 453px;
            height: 63px;
            padding-left: 15px;
            position: absolute;
            top: 230px;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            border-radius: 50px;
            background-color: #e9e9e9;

            color: #707070;
            font-family: 'Lao Muang Don';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 38px;
        }

        .signup-form__input-id {
            width: 453px;
            height: 63px;
            padding-left: 15px;
            position: absolute;
            top: 324px;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            border-radius: 50px;
            background-color: #e9e9e9;

            color: #707070;
            font-family: 'Lao Muang Don';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 38px;
        }

        .signup-form__input-id:focus {
            outline: none;
        }

        .signup-form__input-pwd {
            width: 453px;
            height: 63px;
            padding-left: 15px;
            position: absolute;
            top: 418px;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            border-radius: 50px;
            background-color: #e9e9e9;

            color: #707070;
            font-family: 'Lao Muang Don';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 38px;
        }

        .signup-form__input-pwd:focus {
            outline: none;
        }

        .signup-form__input-confirm-pwd {
            width: 453px;
            height: 63px;
            padding-left: 15px;
            position: absolute;
            top: 512px;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            border-radius: 50px;
            background-color: #e9e9e9;

            color: #707070;
            font-family: 'Lao Muang Don';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 38px;
        }

        .signup-form__input-confirm-pwd:focus {
            outline: none;
        }

        .signup-form__submit-button {
            width: 468px;
            height: 63px;
            position: absolute;
            top: 640px;
            left: 50%;
            transform: translate(-50%, -50%);
            border: none;
            border-radius: 50px;
            background-color: #edcb98;

            color: #ffffff;
            font-family: 'Lao Muang Don';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 38px;

            text-align: center;
        }
    }

    .signup-form__other {
        width: 200px;
        height: 50px;
        font-size: 12px;
        font-weight: 300;
        position: absolute;
        top: 270px;
        left: 50%;
        transform: translateX(-50%);
        color: #808080;

        .signup-form__sign-up {
            position: absolute;
            top: 5px;
            left: 65px;
            cursor: pointer;

            .login__link {
                color: inherit;
                text-decoration: inherit;
            }
        }

        .signup-form__id-pwd-find {
            position: absolute;
            top: 22px;
            left: 30px;
            cursor: pointer;
        }
    }
`;

function Signup() {
    const [idReg, setIdReg] = useState('')
    const [usernameReg, setUsernameReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    const [confirmpwdReg, setConfirmpwdReg] = useState('')
    // const [regSuccess, setRegSuccess] = useState(false)
    const navigate = useNavigate()

    const userSignUp = () => {
        if(idReg === "" || usernameReg === "" || passwordReg === "" || confirmpwdReg === ""){
            window.alert("빈칸을 모두 채워주세요.");
            return;
        }
        if(passwordReg !== confirmpwdReg){
            window.alert("비밀번호가 다릅니다.");
            return;
        }
        Axios.post(
            'http://localhost:3000/api/user/signup', 
            {
                id: idReg,
                username: usernameReg,
                password: passwordReg,
            }).then((response) => {
                // setRegSuccess(response.data.success)
                if(response.data.success) {
                    navigate('/login')
                }
        })
    }

    return (
        <SignupContainer>
            <FormContainer>
                <div className="signup-form__logo">
                    <div className="signup-form__logo-text">Sign Up</div>
                </div>
                <div className="signup-form__input">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="User name" 
                        className="signup-form__input-name"
                        onChange={(e) => {
                            setUsernameReg(e.target.value)
                        }}>
                    </input>
                    <input 
                        type="text" 
                        name="id" 
                        placeholder="ID" 
                        className="signup-form__input-id"
                        onChange={(e) => {
                            setIdReg(e.target.value)
                        }}>
                    </input>
                    <input 
                        type="password" 
                        name="pwd" 
                        placeholder="Password" 
                        className="signup-form__input-pwd"
                        onChange={(e) => {
                            setPasswordReg(e.target.value)
                        }}>
                    </input>
                    <input 
                        type="password" 
                        name="confirm-pwd" 
                        placeholder="Confirm Password" 
                        className="signup-form__input-confirm-pwd"
                        onChange={(e) => {
                            setConfirmpwdReg(e.target.value)
                        }}>
                    </input>
                    <button 
                        type="submit" 
                        className="signup-form__submit-button"
                        onClick={userSignUp}>
                        Sign Up
                    </button>
                </div>
            </FormContainer>
        </SignupContainer>
    )
}

export default Signup