import axios from "axios";
import { type UserData } from "../App";
// import { type Inputs } from "../App";

const singUpUser = async (data: UserData) => {
  try {
    await axios.post(`http://localhost:4000/users`, data);
    console.log(`전송완료`);
  } catch (error) {
    console.error("error", error);
  }
};

export { singUpUser };
