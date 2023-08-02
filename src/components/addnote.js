import * as React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import useNotes from "../hooks/usenotes";

const AddNote = () => {
  const [text, setText] = useState("");
  const { refetchNotes } = useNotes();

  const handleInputChange = (e) => {
    setText(e.target.value);
  };
  const handleButtonClick = async (e) => {
    e.preventDefault();
    const note = { text };
    console.log(note);
    try {
      const response = await fetch("http://localhost:8080/note/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      });
      if (response.ok) {
        console.log("Note added successfully!");
        setText("");
        refetchNotes();
      } else {
        console.error("Failed to add note:", response.status);
      }
    } catch (error) {
      console.error("Error adding note:", error);
    }
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
