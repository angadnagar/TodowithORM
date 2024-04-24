import { useState } from "react";
import { Button } from "../components/Button";
import { InputContainer } from "../components/InputContainer";
import axios from "axios";

export const CreateTodo = () => {
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [publish, setPublish] = useState<boolean>();

  return (
    <div>
      <label>title:</label>
      <InputContainer
        onChange={(e) => setTitle(e.target.value)}
        placeholder={"title"}
      />
      <label>Description</label>
      <InputContainer
        onChange={(e) => setDescription(e.target.value)}
        placeholder={"description"}
      />
      <select
        onChange={(e) => setPublish(e.target.value === "true")}
        name="to be published"
        id=""
      >
        <option defaultChecked value="">
          select
        </option>
        <option value="true">yes</option>
        <option value="false">no</option>
      </select>
      <Button
        onClick={async () => {
          await axios.post("http://localhost:3000/main/todo/create", {
            title,
            description,
            published: publish,
            userId: 3,
          });
        }}
        text={"Create Todo"}
      />
    </div>
  );
};
