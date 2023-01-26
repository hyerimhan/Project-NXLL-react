import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { requestAPI } from '../../api/requests';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../recoil';
import { useNavigate } from 'react-router-dom';

type Props = {};

const SignInPage = (props: Props) => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [acToken, setAcToken] = useState('');

  // useEffect(() => {

  // }, [acToken])

  const loginHandler = async () => {
    const type = 'post';
    const endpoint = '/auth/login';
    const page = '';
    const data = {
      email,
      password,
    };
    const accessToken = localStorage.getItem('accessToken') || null;
    // console.log(user);

    if (accessToken) return;
    try {
      const res = await requestAPI({ type, endpoint, data, page, accessToken });
      console.log(res);
      if (res?.status === 200) {
        setUser(res.data);
        navigate('/');
        setAcToken(res.data.accessToken);
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('userName', res.data.user.displayName);
      }
    } catch (error) {
      if (error instanceof Error) alert('조회 실패 : ' + error.message);
      else alert('조회 실패');
      console.log('조회실패ㅁㄴㄷㄹㅊㄷㅁㄴㅊㄹ');
    }
  };

  // const logoutHandler = async () => {
  //   // if (!accessToken) return;
  //   const type = 'post';
  //   const endpoint = '/auth/logout';
  //   const page = '';
  //   const data = {
  //     email,
  //     password,
  //   };
  //   const accessToken = localStorage.getItem('accessToken') || null;
  //   try {
  //     const res = await requestAPI({ type, endpoint, data, page, accessToken });
  //     console.log(res);
  //     if (res?.status === 200) {
  //       setUser(null);
  //       // navigate('/');
  //       localStorage.removeItem('accessToken');
  //       localStorage.removeItem('userName');
  //     }
  //   } catch (error) {
  //     if (error instanceof Error) alert('로그아웃 실패 : ' + error.message);
  //     else alert('로그아웃 실패');
  //     console.log('로그아웃 실패ㅁㄴㄷㄹㅊㄷㅁㄴㅊㄹ');
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!id) return alert('id 입력 필수');
    // else if (!password) return alert('pw 입력 필수');
    loginHandler();
  };

  const handleChange = (e) => {
    e.preventDefault()[e.target.id] = e.target.value;
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('로그인 클릭');
        }}
      >
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor='email'>이메일</label>
              </td>
              <td>
                <input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='password'>비밀번호</label>
              </td>
              <td>
                <input
                  id='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type='submit' onClick={handleSubmit}>
          login
        </button>
        <br />
      </form>
    </div>
  );
};

export default SignInPage;
