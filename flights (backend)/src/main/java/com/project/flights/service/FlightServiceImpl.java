package com.project.flights.service;

import com.project.flights.dao.IFlightDao;
import com.project.flights.entities.Flight;
import com.project.flights.exception.FlightAlreadyExistsException;
import com.project.flights.exception.FlightNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightServiceImpl implements IFlightService{

    @Autowired
    private IFlightDao flightDao;


    @Override
    public List<Flight> getFlightDetails() {
        return flightDao.findAll();
    }

    @Override
    public Flight getFlightDetailsById(int flightId) {
        if(flightDao.findById(flightId).isEmpty()) {
            throw new FlightNotFoundException();
        }
        return flightDao.findById(flightId).get();
    }

    @Override
    public Flight addFlight(Flight flight) {
        if(flightDao.existsById(flight.getFlightId())) {
            throw new FlightAlreadyExistsException();
        }
        flightDao.save(flight);
        return flight;
    }

    @Override
    public Flight updateFlight(Flight flight, int flightId) {
        if(flightDao.findById(flightId).isEmpty()) {
            throw new FlightNotFoundException();
        }
        flightDao.save(flight);
        return flight;
    }

    @Override
    public void deleteFlight(int flightId) {
        if(flightDao.findById(flightId).isEmpty()) {
            throw new FlightNotFoundException();
        }
        Flight f = flightDao.findById(flightId).get();
        flightDao.delete(f);
    }
}
