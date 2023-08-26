import React, { useState } from "react";
import { Inputs, UserData } from "../App";
import axios from "axios";
import { setCookie } from "../setCookie";
interface Props {}

const Register = ({}: Props): JSX.Element => {
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

  const doSignUp = async (newData: UserData) => {
    try {
      const { data } = await axios.post("http://localhost:4000/register", newData);
      //   console.log(data);
      setCookie("accessToken", data["accessToken"], { path: "/" });
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
    doSignUp(newData);
  };

  return (
    <>
      <>
        {" "}
        <h1>회원가입</h1>
        <form onSubmit={(e) => onSubmitData(e)}>
          <input name="email" onChange={inputChangeHandler} />
          <input name="password" type="password" onChange={inputChangeHandler} />
          <button>회원가입</button>
        </form>
      </>
    </>
  );
};

export default Register;
