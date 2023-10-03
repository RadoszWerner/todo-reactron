package com.radoszwerner.todobackend.service;

import com.radoszwerner.todobackend.model.Note;
import com.radoszwerner.todobackend.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImp implements NoteService{
    @Autowired
    private NoteRepository noteRepository;

    @Override
    public Note saveNote(Note note) {
        return noteRepository.save(note);
    }



    @Override
    public List<Note> getAllNotes() {
        return noteRepository.findAll();
    }
    @Override
    public void deleteNoteById(int id) {
        noteRepository.deleteById(id);
    }

    @Override
    public void updateNoteStatus(int id, boolean done){
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid note ID"));
        note.setDone(done);
        noteRepository.flush();
    }
}
