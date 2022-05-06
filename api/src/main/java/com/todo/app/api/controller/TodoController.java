package com.todo.app.api.controller;

import java.util.ArrayList;
import java.util.Optional;

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

    // Method to get a to-do by id
    @GetMapping("/todos/{id}")
    public Optional<TodoModel> getTodoById(@PathVariable Long id) {
        boolean exists = todoService.validateExistenceOfId(id); // Check if id exists

        if (exists) {
            return Optional.of(todoService.getTodoById(id).get()); // If the id exists, the to-dos is returned
        } else {
            return Optional.empty(); // If the id does not exist, an empty optional is returned
        }
    }

    // Method to update a to-do
    @PutMapping("/todos/{id}")
    public Optional<TodoModel> updateTodo(@RequestBody TodoModel todoModel, @PathVariable Long id) {
        boolean exists = todoService.validateExistenceOfId(id);

        if (exists) {
            return todoService.updateTodo(todoModel, id);
        } else {
            return Optional.empty();
        }
    }

    // Method to delete a to-do
    @DeleteMapping("/todos/{id}")
    public String deleteTodo(@PathVariable Long id) {
        boolean exists = todoService.validateExistenceOfId(id);

        if (exists) {
            boolean ok = todoService.deleteTodo(id); // If the id exists, the user is deleted

            if (ok) {
                return "To-do with id " + id + " was deleted";
            } else {
                return "Could not delete the to-do with id " + id;
            }
        } else {
            return "To-do with id " + id + " does not exist";
        }
    }
}
