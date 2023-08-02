package com.radoszwerner.todobackend.controller;

import com.radoszwerner.todobackend.model.Note;
import com.radoszwerner.todobackend.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/note")
@CrossOrigin
public class NoteController {
    @Autowired
    private NoteService noteService;

    @PostMapping("/add")
    public String add(@RequestBody Note note){
        noteService.saveNote(note);
        return  "New note added";
    }

    @GetMapping("/get-all")
    public List<Note> getAllNotes(){
        return noteService.getAllNotes();
    }

    @DeleteMapping("/delete/{id}")
    public String deleteNoteById(@PathVariable int id) {
        noteService.deleteNoteById(id);
        return "Note with ID " + id + " deleted successfully.";
    }

    @PutMapping("/update/{id}")
    public String updateNoteStatus(@PathVariable int id, @RequestParam boolean done) {
        noteService.updateNoteStatus(id, done);
        return "Note with ID " + id + " status updated successfully.";
    }

}
