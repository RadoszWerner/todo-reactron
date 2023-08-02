import * as React from "react";
import useNotes from "../hooks/usenotes";
import Note from "./note";
import { PaperStyle } from "../styles/styles";
import { CenteredContainer } from "../styles/styles";
import { useEffect } from "react";

const NotesPanel = () => {
  const { notes, refetchNotes } = useNotes();

  useEffect(() => {
    refetchNotes();
  }, [refetchNotes]);

  return (
    <CenteredContainer>
      <PaperStyle elevation={3}>
        {notes.map((note) => (
          <Note note={note} key={note.id} />
        ))}
      </PaperStyle>
    </CenteredContainer>
  );
};

export default NotesPanel;
