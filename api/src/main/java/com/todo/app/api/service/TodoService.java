package com.todo.app.api.service;

import java.util.ArrayList;
import java.util.Optional;

import com.todo.app.api.model.TodoModel;
import com.todo.app.api.repository.TodoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    @Autowired
    TodoRepository todoRepository;

    // Method to get all to-do
    public ArrayList<TodoModel> getAllTodos() {
        return (ArrayList<TodoModel>) todoRepository.findAll();
    }

    // Method to save the to-dos
    public TodoModel saveTodo(TodoModel todoModel) {
        return todoRepository.save(todoModel);
    }

    // Method to validate if an id exists
    public boolean validateExistenceOfId(Long id) {
        return todoRepository.existsById(id);
    }

    // Method to get a to-do by id
    public Optional<TodoModel> getTodoById(Long id) {
        return todoRepository.findById(id);
    }

}
