package com.project.flights.service;

import com.project.flights.dao.IUserDao;
import com.project.flights.entities.User;
import com.project.flights.exception.UserAlreadyExistsException;
import com.project.flights.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements IUserService{

    @Autowired
    private IUserDao userDao;


    @Override
    public List<User> getUsers() {
        return userDao.findAll();
    }

    @Override
    public User getUserById(int userId){
        if(userDao.findById(userId).isEmpty()) {
            throw new UserNotFoundException();
        }
        return userDao.findById(userId).get();
    }

    @Override
    public User addUser(User user) {
        if(userDao.existsById(user.getUserId())) {
            throw new UserAlreadyExistsException();
        }
        userDao.save(user);
        return user;
    }

    @Override
    public User updateUser(User user, int userId) {
        if(userDao.findById(userId).isEmpty()) {
            throw new UserNotFoundException();
        }
        userDao.save(user);
        return user;
    }

    @Override
    public void deleteUser(int userId) {
        if(userDao.findById(userId).isEmpty()) {
            throw new UserNotFoundException();
        }
        User u = userDao.findById(userId).get();
        userDao.delete(u);
//        return "User with id: "+ userId+" deleted.";
    }
}
