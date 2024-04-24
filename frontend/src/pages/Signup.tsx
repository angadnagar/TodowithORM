/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { Button } from "../components/Button";
import { InputContainer } from "../components/InputContainer";
import axios from "axios";

export const Signup = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  return (
    <div>
      <label>name:</label>
      <InputContainer
        onChange={(e) => setName(e.target.value)}
        placeholder={"Enter your name"}
      />
      <label>Email:</label>
      <InputContainer
        onChange={(e) => setEmail(e.target.value)}
        placeholder={"Enter email"}
      />
      <label>Password:</label>
      <InputContainer
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"Enter password"}
      />
      <Button
        onClick={async () => {
          await axios.post("http://localhost:3000/main/user/signup", {
            name,
            email,
            password,
          });
        }}
        text={"Signup"}
      />
    </div>
  );
};
