package com.project.flights.service;

import com.project.flights.entities.Booking;

import java.util.List;

public interface IBookingService {
    public List<Booking> getBooking();
    public Booking getBookingById(int bookingId);
    public Booking addBooking(Booking booking);
    public Booking updateBooking(Booking booking);
    public void deleteBooking(int bookingId);
    public List<Booking> getBookingsByFlightId(int flightId);
    public List<Booking> getBookingsByUserId(int userId);
}

