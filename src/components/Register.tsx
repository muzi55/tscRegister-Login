import React, { useState } from "react";
import axios from "axios";

interface Inputs {
  email: string;
  password: string;
}
interface UserData {
  isDelete: boolean;
  email: string;
  password: string;
}

const Register = (): JSX.Element => {
  const [inputValue, setInputValue] = useState<Inputs>({
    email: "",
    password: "",
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const register = async (newData: UserData) => {
    try {
      await axios.post("http://localhost:4000/register", newData, { withCredentials: true });
      console.log(`가입 완료야 야!`);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmitData = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newData: UserData = {
      ...inputValue,
      isDelete: false,
    };
    // signUpMutation.mutate(newData);
    register(newData);
  };

  return (
    <>
      <>
        <h1>회원가입</h1>
        <form onSubmit={(e) => onSubmitData(e)}>
          <input type="text" placeholder="이메일" name="email" onChange={inputChangeHandler} />
          <input type="password" placeholder="비밀번호" name="password" onChange={inputChangeHandler} />
          <button>회원가입</button>
        </form>
      </>
    </>
  );
};

export default Register;
