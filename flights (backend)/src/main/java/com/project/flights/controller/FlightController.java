package com.project.flights.controller;

import com.project.flights.entities.Flight;
import com.project.flights.exception.FlightAlreadyExistsException;
import com.project.flights.exception.FlightNotFoundException;
import com.project.flights.service.IFlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class FlightController {

    @Autowired
    IFlightService flightService;

    @GetMapping("/flights")
    public List<Flight> getFlightDetails(){
        return this.flightService.getFlightDetails();
    }

    @GetMapping("/flight/{flightId}")
    public Flight getFlightDetailsById(@PathVariable int flightId) throws FlightNotFoundException{
        return this.flightService.getFlightDetailsById(flightId);
    }

    @PostMapping("/flight")
    public Flight addFlight(@RequestBody Flight flight) throws FlightAlreadyExistsException{
        return this.flightService.addFlight(flight);
    }

    @PutMapping("/flight/{flightId}")
    public Flight updateFlight(@RequestBody Flight flight, @PathVariable int flightId) throws FlightNotFoundException{
        return this.flightService.updateFlight(flight, flightId);
    }

    @DeleteMapping("/flight/{flightId}")
    public void deleteFlight(@PathVariable int flightId) throws FlightNotFoundException{
        this.flightService.deleteFlight(flightId);
    }
}
