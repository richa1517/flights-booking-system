package com.project.flights.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Flight {

    @Id
    int flightId;
    String sourceLocation;
    String destinationLocation;
    String departureTime;
    String arrivalTime;
    String date;
    double fare;
    int availableSeats;

    public Flight() {
    }

    public Flight(int flightId, String sourceLocation, String destinationLocation, String departureTime, String arrivalTime, String date, double fare, int availableSeats) {
        this.flightId = flightId;
        this.sourceLocation = sourceLocation;
        this.destinationLocation = destinationLocation;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
        this.date = date;
        this.fare = fare;
        this.availableSeats = availableSeats;
    }

    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    public String getSourceLocation() {
        return sourceLocation;
    }

    public void setSourceLocation(String sourceLocation) {
        this.sourceLocation = sourceLocation;
    }

    public String getDestinationLocation() {
        return destinationLocation;
    }

    public void setDestinationLocation(String destinationLocation) {
        this.destinationLocation = destinationLocation;
    }

    public String getDepartureTime() {
        return departureTime;
    }

    public void setDepartureTime(String departureTime) {
        this.departureTime = departureTime;
    }

    public String getArrivalTime() {
        return arrivalTime;
    }

    public void setArrivalTime(String arrivalTime) {
        this.arrivalTime = arrivalTime;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public double getFare() {
        return fare;
    }

    public void setFare(double fare) {
        this.fare = fare;
    }

    public int getAvailableSeats() {
        return availableSeats;
    }

    public void setAvailableSeats(int availableSeats) {
        this.availableSeats = availableSeats;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "flightId=" + flightId +
                ", sourceLocation='" + sourceLocation + '\'' +
                ", destinationLocation='" + destinationLocation + '\'' +
                ", departureTime='" + departureTime + '\'' +
                ", arrivalTime='" + arrivalTime + '\'' +
                ", date='" + date + '\'' +
                ", fare=" + fare +
                ", availableSeats=" + availableSeats +
                '}';
    }
}
