package com.project.flights.controller;

import com.project.flights.entities.Booking;
import com.project.flights.entities.Passenger;
import com.project.flights.exception.BookingNotFoundException;
import com.project.flights.exception.PassengerAlreadyExistsException;
import com.project.flights.exception.PassengerNotFoundException;
import com.project.flights.service.IPassengerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
public class PassengerController {

    @Autowired
    IPassengerService passengerService;

    @GetMapping("/passengers")
    public List<Passenger> getPassengers(){
        return this.passengerService.getPassengers();
    }

    @GetMapping("/passenger/{passengerId}")
    public Passenger getPassengerById(@PathVariable int passengerId) throws PassengerNotFoundException {
        return this.passengerService.getPassengerById(passengerId);
    }

    @PostMapping("/passenger")
    public Passenger addPassenger(@RequestBody Passenger passenger) throws PassengerAlreadyExistsException{
        return this.passengerService.addPassenger(passenger);
    }

    @PutMapping("/passenger")
    public Passenger updatePassenger(@RequestBody Passenger passenger) throws PassengerNotFoundException{
        return this.passengerService.updatePassenger(passenger);
    }

    @DeleteMapping("/passenger/{passengerId}")
    public void deletePassenger(@PathVariable int passengerId) throws PassengerNotFoundException{
        this.passengerService.deletePassenger(passengerId);
    }

    @GetMapping("/passenger/booking/{bookingId}")
    public List<Passenger> getPassengerByBookingId(@PathVariable int bookingId) throws BookingNotFoundException{
        return this.passengerService.getPassengersByBookingId(bookingId);
    }
}
