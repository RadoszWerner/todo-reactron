import * as React from "react";
import Grid from "@mui/material/Grid";
import useNotes from "../hooks/usenotes";
import Note from "./note";

const NotesPanel = () => {
  const { notes } = useNotes("db/todos.json");

  return (
    <>
      {notes.map((note) => (
        <Grid item xs={12} sm={6} md={4} key={note.id}>
          <Note note={note} key={note.id} />
        </Grid>
      ))}
    </>
  );
};

export default NotesPanel;
