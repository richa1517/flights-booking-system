package com.project.flights.service;

import com.project.flights.entities.Flight;

import java.util.List;

public interface IFlightService {
    public List<Flight> getFlightDetails();
    public Flight getFlightDetailsById(int flightId);
    public Flight addFlight(Flight flight);
    public Flight updateFlight(Flight flight, int flightId);
    public void deleteFlight(int flightId);
}
