package com.todo.app.api.controller;

import java.util.ArrayList;

import com.todo.app.api.model.TodoModel;
import com.todo.app.api.service.TodoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT,
        RequestMethod.DELETE })
@RestController
@RequestMapping("/api")
public class TodoController {
    @Autowired
    TodoService todoService;

    // Method to get all to-do
    @GetMapping("/todos")
    public ArrayList<TodoModel> getAllTodos() {
        return todoService.getAllTodos();
    }

    // Method to save the to-dos
    @PostMapping("/todos")
    public TodoModel saveTodo(@RequestBody TodoModel todoModel) {
        return todoService.saveTodo(todoModel);
    }
}
