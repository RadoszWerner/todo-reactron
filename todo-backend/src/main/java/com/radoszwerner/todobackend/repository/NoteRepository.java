package com.radoszwerner.todobackend.repository;

import com.radoszwerner.todobackend.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<Note, Integer>{

}
