package com.todo.app.api.model;

import javax.persistence.*;

@Entity
@Table(name = "todos")
public class TodoModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;
    private String todoDescription;
    private boolean isCompleted;

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTodoDescription() {
        return todoDescription;
    }

    public void setTodoDescription(String todoDescription) {
        this.todoDescription = todoDescription;
    }

    public boolean getIsCompleted() {
        return isCompleted;
    }

    public void setIsCompleted(boolean isCompleted) {
        this.isCompleted = isCompleted;
    }

    // Constructors
    public TodoModel(String todoDescription, boolean isCompleted) {
        this.todoDescription = todoDescription;
        this.isCompleted = isCompleted;
    }

    public TodoModel() {
    }
}
