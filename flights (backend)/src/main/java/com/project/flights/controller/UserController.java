package com.project.flights.controller;

import com.project.flights.entities.User;
import com.project.flights.exception.UserAlreadyExistsException;
import com.project.flights.exception.UserNotFoundException;
import com.project.flights.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserController{

    @Autowired
    private IUserService userService;

    @GetMapping("/users")
    public List<User> getUsers(){
        return this.userService.getUsers();
    }

    @GetMapping("/user/{userId}")
    public User getUserById(@PathVariable int userId) throws UserNotFoundException {
        return this.userService.getUserById(userId);
    }

    @PostMapping("/user")
    public User addUser(@RequestBody User user) throws UserAlreadyExistsException{
        return this.userService.addUser(user);
    }

    @PutMapping("/user/{userId}")
    public User updateUser(@RequestBody User user, @PathVariable int userId) throws UserNotFoundException{
        return this.userService.updateUser(user, userId);
    }

    @DeleteMapping("/user/{userId}")
    public void deleteUser(@PathVariable int userId) throws UserNotFoundException{
        this.userService.deleteUser(userId);
    }
}
