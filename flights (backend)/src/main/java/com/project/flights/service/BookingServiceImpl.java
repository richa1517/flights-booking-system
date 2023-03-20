package com.project.flights.service;

import com.project.flights.dao.IBookingDao;
import com.project.flights.entities.Booking;
import com.project.flights.exception.BookingAlreadyExistsException;
import com.project.flights.exception.BookingNotFoundException;
import com.project.flights.exception.FlightNotFoundException;
import com.project.flights.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookingServiceImpl implements IBookingService{

    @Autowired
    private IBookingDao bookingDao;


    @Override
    public List<Booking> getBooking() {
        return bookingDao.findAll();
    }

    @Override
    public Booking getBookingById(int bookingId) {
        if(bookingDao.findById(bookingId).isEmpty()) {
            throw new BookingNotFoundException();
        }
        return bookingDao.findById(bookingId).get();
    }

    @Override
    public Booking addBooking(Booking booking) {
        if(bookingDao.existsById(booking.getBookingId())) {
            throw new BookingAlreadyExistsException();
        }
        bookingDao.save(booking);
        return booking;
    }

    @Override
    public Booking updateBooking(Booking booking) {
        if(bookingDao.findById(booking.getBookingId()).isEmpty()) {
            throw new BookingNotFoundException();
        }
        bookingDao.save(booking);
        return booking;
    }

    @Override
    public void deleteBooking(int bookingId) {
        if(bookingDao.findById(bookingId).isEmpty()) {
            throw new BookingNotFoundException();
        }
        Booking b = bookingDao.findById(bookingId).get();
        bookingDao.delete(b);
    }

    @Override
    public List<Booking> getBookingsByFlightId(int flightId) {
        List<Booking> bookings = new ArrayList<>();
        for(Booking b : bookingDao.findAll())
        {
            if(b.getFlightId()==flightId)
            {
                bookings.add(b);
            }
        }
        if(bookings.isEmpty()) throw new FlightNotFoundException();
        return bookings;
    }

    @Override
    public List<Booking> getBookingsByUserId(int userId) {
        List<Booking> bookings = new ArrayList<>();
        for(Booking b : bookingDao.findAll())
        {
            if(b.getUserId()==userId)
            {
                bookings.add(b);
            }
        }
        if(bookings.isEmpty()) throw new UserNotFoundException();
        return bookings;
    }
}
