package com.project.flights.exception;

public class PassengerAlreadyExistsException extends RuntimeException{

    private static final long serialVersionUID = 1L;

    public PassengerAlreadyExistsException() {

    }

    public PassengerAlreadyExistsException(String message) {
        super(message);
    }
}

