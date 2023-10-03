import { Box, Card, CardContent, Container } from "@mui/material";
import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ note }) => {
  const [isChecked, setIsChecked] = useState(note.done);

  useEffect(() => {
    setIsChecked(note.done);
  }, [note.done]);

  const handleNoteUpdate = async (event) => {
    const isDone = event.target.checked;
    try {
      const response = await fetch(
        `http://localhost:8080/note/update/${note.id}?done=${isDone}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.ok) {
        if (response.bodyUsed) {
          const data = await response.json();
        } else {
          console.log("Note status updated successfully.");
        }
      } else {
        console.error("Failed to update note status:", response.status);
      }
    } catch (error) {
      console.error("Error updating note status:", error);
    }
  };

  const handleNoteDelete = async (e) => {
    try {
      const response = await fetch(
        `http://localhost:8080/note/delete/${note.id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        console.log("Note deleted successfully!");
      } else {
        console.error("Failed to delete note:", response.status);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  const textStyle = {
    textDecoration: note.done ? "line-through" : "none",
  };

  return (
    <Container>
      <Card variant="outlined">
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControlLabel
              control={<Checkbox checked={isChecked} />}
              label={<span style={textStyle}>{note.text}</span>}
              onChange={handleNoteUpdate}
            />
            <IconButton
              variant="outlined"
              onClick={handleNoteDelete}
              style={{ marginLeft: "auto" }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Note;
