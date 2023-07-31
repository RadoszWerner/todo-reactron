import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

const AddNote = () => {
  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleButtonClick = (e) => {
    e.preventDefault();
    const note = { text };
    console.log(note);
    fetch("http://localhost:8080/note/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(note),
    });
    setText("");
  };

  return (
    <>
      <TextField
        value={text}
        onChange={handleInputChange}
        label="What do you want to do?"
      />
      <Button
        variant="contained"
        startIcon={<SendIcon />}
        sx={{ maxHeight: "100%" }}
        onClick={handleButtonClick}
      />
    </>
  );
};

export default AddNote;
