import axios from "axios";
import React, { useState } from "react";
import { setCookie } from "../setCookie";
interface Login {
  email: string;
  password: string;
}

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  /**
   *
   * @param loginValue
   * 이 함수는 아이디, 비밀번호를 서버에 줘서 jwt 토큰을 얻어옵니다.
   */
  const login = async (loginValue: Login) => {
    try {
      const { data } = await axios.post("http://localhost:4000/login", loginValue, { withCredentials: true });
      setCookie("accessToken", data["accessToken"], { path: "/" });
      console.log(`로그인 완료 cookie 에 jwt를 저장했습니다.`);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newData: Login = {
      email,
      password: pw,
    };
    login(newData);
  };

  return (
    <>
      <h2>로그인</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="이메일" />
        <input type="password" onChange={(e) => setPw(e.target.value)} value={pw} placeholder="비밀번호" />
        <button>로그인</button>
      </form>
    </>
  );
};

export default Login;
