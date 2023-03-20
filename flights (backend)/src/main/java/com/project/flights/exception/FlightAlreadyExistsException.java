package com.project.flights.exception;

public class FlightAlreadyExistsException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public FlightAlreadyExistsException() {

    }

    public FlightAlreadyExistsException(String message) {
        super(message);
    }

}
