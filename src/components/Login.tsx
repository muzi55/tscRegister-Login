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
   * @param loginValue 로그인 아이디, 비밀번호
   * 이 함수는
   */
  const login = async (loginValue: Login) => {
    try {
      const { data } = await axios.post("http://localhost:4000/login", loginValue);
      setCookie("accessToken", data["accessToken"], { path: "/" });

      //   console.log(data.accessToken);
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
      <form onSubmit={(e) => onSubmit(e)}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="이메일" />
        <input type="text" onChange={(e) => setPw(e.target.value)} value={pw} placeholder="비밀번호" />
        <button>로그인</button>
      </form>
    </>
  );
};

export default Login;
