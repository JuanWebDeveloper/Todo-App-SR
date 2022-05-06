package com.todo.app.api.service;

import java.util.ArrayList;

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

}
