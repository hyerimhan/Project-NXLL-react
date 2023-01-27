import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { requestAPI } from '../../api/requests';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { userState } from '../../recoil';

type Props = {};
type userData = {};

const SignUpPage = (props: Props) => {
  const navigate = useNavigate();
  const isLogined = false;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');

  const [user, setUser] = useRecoilState(userState);

  const type = 'post';
  const endpoint = '/auth/signup';
  const page = '';
  const data = {
    email,
    password,
    displayName,
  };
  const accessToken = '';

  const loginHandler = async () => {
    console.log(user);
    try {
      const res = await requestAPI({ type, endpoint, data, page, accessToken });
      console.log(res);
      if (res?.status === 200) {
        setUser(res.data);
        navigate('/');
        console.log(user);
      }
    } catch (error) {
      if (error instanceof Error) alert('회원가입 실패 : ' + error.message);
      else alert('회원가입 실패');
      console.log('회원가입 실팯ㅈㅁㄹㄷㅈㅁㅊㄹ');
    }
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    // if (!id) return alert('id 입력 필수');
    // else if (!password) return alert('pw 입력 필수');
    loginHandler();
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert('회원가입 클릭');
        }}
      >
        <table>
          <colgroup>
            <col style={{ width: 150 }} />
            <col style={{ width: 'auto' }} />
          </colgroup>
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
            <tr>
              <td>
                <label htmlFor='passwordCheck'>비밀번호 확인</label>
              </td>
              <td>
                <input
                  id='passwordCheck'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label htmlFor='userName'>이름</label>
              </td>
              <td>
                <input
                  id='userName'
                  type='text'
                  value={displayName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setDisplayName(e.target.value)
                  }
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type='submit' onClick={handleSubmit}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
