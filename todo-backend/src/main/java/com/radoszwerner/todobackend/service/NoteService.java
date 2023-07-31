package com.radoszwerner.todobackend.service;

import com.radoszwerner.todobackend.model.Note;

import java.util.List;

public interface NoteService {
    public Note saveNote(Note note);
    public List<Note> getAllNotes();
}
