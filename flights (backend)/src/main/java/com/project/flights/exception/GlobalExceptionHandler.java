package com.project.flights.exception;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {
    @Value(value="${data.exception.message1}")
    private String message1;
    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserNotFoundException ex){
        return new ResponseEntity<>(message1, HttpStatus.NOT_FOUND);
    }

    @Value(value="${data.exception.message2}")
    private String message2;
    @ExceptionHandler(FlightNotFoundException.class)
    public ResponseEntity<String> handleFlightNotFoundException(FlightNotFoundException ex){
        return new ResponseEntity<>(message2, HttpStatus.NOT_FOUND);
    }

    @Value(value="${data.exception.message3}")
    private String message3;
    @ExceptionHandler(BookingNotFoundException.class)
    public ResponseEntity<String> handleBookingNotFoundException(BookingNotFoundException ex){
        return new ResponseEntity<>(message3, HttpStatus.NOT_FOUND);
    }

    @Value(value="${data.exception.message4}")
    private String message4;
    @ExceptionHandler(PassengerNotFoundException.class)
    public ResponseEntity<String> handlePassengerNotFoundException(PassengerNotFoundException ex){
        return new ResponseEntity<>(message4, HttpStatus.NOT_FOUND);
    }

    @Value(value="${data.exception.message5}")
    private String message5;
    @ExceptionHandler(UserAlreadyExistsException.class)
    public ResponseEntity<String> handleUserNotFoundException(UserAlreadyExistsException ex){
        return new ResponseEntity<String>(message5, HttpStatus.NOT_FOUND);
    }

    @Value(value="${data.exception.message6}")
    private String message6;
    @ExceptionHandler(FlightAlreadyExistsException.class)
    public ResponseEntity<String> handleFlightNotFoundException(FlightAlreadyExistsException ex){
        return new ResponseEntity<String>(message6, HttpStatus.NOT_FOUND);
    }

    @Value(value="${data.exception.message7}")
    private String message7;
    @ExceptionHandler(BookingAlreadyExistsException.class)
    public ResponseEntity<String> handleBookingNotFoundException(BookingAlreadyExistsException ex){
        return new ResponseEntity<String>(message7, HttpStatus.NOT_FOUND);
    }

    @Value(value="${data.exception.message8}")
    private String message8;
    @ExceptionHandler(PassengerAlreadyExistsException.class)
    public ResponseEntity<String> handlePassengerNotFoundException(PassengerAlreadyExistsException ex){
        return new ResponseEntity<String>(message8, HttpStatus.NOT_FOUND);
    }
}
