package com.project.flights.service;

import com.project.flights.entities.Passenger;

import java.util.List;

public interface IPassengerService {
    public List<Passenger> getPassengers();
    public Passenger getPassengerById(int passengerId);
    public Passenger addPassenger(Passenger passenger);
    public Passenger updatePassenger(Passenger passenger);
    public void deletePassenger(int passengerId);
    public List<Passenger> getPassengersByBookingId(int bookingId);
}
