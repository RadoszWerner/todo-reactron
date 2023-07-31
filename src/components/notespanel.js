import * as React from "react";
import useNotes from "../hooks/usenotes";
import Note from "./note";
import { PaperStyle } from "../styles/styles";
import { NoteStyle } from "../styles/styles";
import { CenteredContainer } from "../styles/styles";

const NotesPanel = () => {
  const { notes } = useNotes();

  return (
    <CenteredContainer>
      <PaperStyle elevation={3}>
        {notes.map((note) => (
          <NoteStyle elevation={6}>
            <Note note={note} key={note.id} />
          </NoteStyle>
        ))}
      </PaperStyle>
    </CenteredContainer>
  );
};

export default NotesPanel;
