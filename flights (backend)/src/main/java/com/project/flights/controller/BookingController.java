package com.project.flights.controller;

import com.project.flights.entities.Booking;
import com.project.flights.exception.BookingAlreadyExistsException;
import com.project.flights.exception.BookingNotFoundException;
import com.project.flights.exception.FlightNotFoundException;
import com.project.flights.exception.UserNotFoundException;
import com.project.flights.service.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin
public class BookingController {

    @Autowired
    IBookingService bookingService;

    @GetMapping("/bookings")
    public List<Booking> getBooking(){
        return this.bookingService.getBooking();
    }

    @GetMapping("/booking/{bookingId}")
    public Booking getBookingById(@PathVariable int bookingId) throws BookingNotFoundException {
        return this.bookingService.getBookingById(bookingId);
    }

    @PostMapping("/booking")
    public Booking addBooking(@RequestBody Booking booking) throws BookingAlreadyExistsException {
        return this.bookingService.addBooking(booking);
    }

    @PutMapping("/booking")
    public Booking updateBooking(@RequestBody Booking booking) throws BookingNotFoundException{
        return this.bookingService.updateBooking(booking);
    }

    @DeleteMapping("/booking/{bookingId}")
    public void deleteBooking(@PathVariable int bookingId) throws BookingNotFoundException{
        this.bookingService.deleteBooking(bookingId);
    }

    @GetMapping("/booking/flight/{flightId}")
    public List<Booking> getBookingsByFlightId(@PathVariable int flightId) throws FlightNotFoundException{
        return this.bookingService.getBookingsByFlightId(flightId);
    }

    @GetMapping("/booking/user/{userId}")
    public List<Booking> getBookingsByUserId(@PathVariable int userId) throws UserNotFoundException{
        return this.bookingService.getBookingsByUserId(userId);
    }
}
