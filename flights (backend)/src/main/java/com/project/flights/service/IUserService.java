package com.project.flights.service;

import com.project.flights.entities.User;

import java.util.List;

public interface IUserService {
    public List<User> getUsers();

    public User getUserById(int userId);

    public User addUser(User user);

    public User updateUser(User user, int userId);

    public void deleteUser(int userId);
}
