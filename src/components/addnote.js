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
    const note = { text };
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <>
      <TextField
        value={text}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
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
