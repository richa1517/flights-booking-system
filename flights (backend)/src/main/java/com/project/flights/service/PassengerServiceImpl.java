package com.project.flights.service;

import com.project.flights.dao.IPassengerDao;
import com.project.flights.dao.IUserDao;
import com.project.flights.entities.Passenger;
import com.project.flights.exception.BookingNotFoundException;
import com.project.flights.exception.PassengerAlreadyExistsException;
import com.project.flights.exception.PassengerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PassengerServiceImpl implements IPassengerService{

    @Autowired
    private IPassengerDao passengerDao;


    @Override
    public List<Passenger> getPassengers() {
        return passengerDao.findAll();
    }

    @Override
    public Passenger getPassengerById(int passengerId) {
        if(passengerDao.findById(passengerId).isEmpty()) {
            throw new PassengerNotFoundException();
        }
        return passengerDao.findById(passengerId).get();
    }

    @Override
    public Passenger addPassenger(Passenger passenger) {
        if(passengerDao.existsById(passenger.getPassengerId())) {
            throw new PassengerAlreadyExistsException();
        }
        passengerDao.save(passenger);
        return passenger;
    }

    @Override
    public Passenger updatePassenger(Passenger passenger) {
        passengerDao.save(passenger);
        return passenger;
    }

    @Override
    public void deletePassenger(int passengerId) {
        if(passengerDao.findById(passengerId).isEmpty()) {
            throw new PassengerNotFoundException();
        }
        Passenger p = passengerDao.findById(passengerId).get();
        passengerDao.delete(p);
    }

    @Override
    public List<Passenger> getPassengersByBookingId(int bookingId) {
        List<Passenger> passengers = new ArrayList<>();
        for(Passenger p : passengerDao.findAll())
        {
            if(p.getBookingId()==bookingId)
            {
                passengers.add(p);
            }
        }
        if(passengers.isEmpty()) throw new BookingNotFoundException();
        return passengers;
    }
}
