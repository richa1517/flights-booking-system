package com.project.flights.entities;

import jakarta.persistence.*;
import org.hibernate.annotations.Cascade;

@Entity
public class Booking {

    private int bookingId;
    private int userId;
    private int flightId;
    private String bookingDate;
    private double totalCost;
    private int seatsBooked;
    private User user;
    private Flight flight;

    public Booking() {

    }

    public Booking(int bookingId, int userId, int flightId, String bookingDate, double totalCost, int seatsBooked) {
        this.bookingId = bookingId;
        this.userId = userId;
        this.flightId = flightId;
        this.bookingDate = bookingDate;
        this.totalCost = totalCost;
        this.seatsBooked = seatsBooked;
    }

    @Id
    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getFlightId() {
        return flightId;
    }

    public void setFlightId(int flightId) {
        this.flightId = flightId;
    }

    public String getBookingDate() {
        return bookingDate;
    }

    public void setBookingDate(String bookingDate) {
        this.bookingDate = bookingDate;
    }

    public double getTotalCost() {
        return totalCost;
    }

    public void setTotalCost(double totalCost) {
        this.totalCost = totalCost;
    }

    public int getSeatsBooked() {
        return seatsBooked;
    }

    public void setSeatsBooked(int seatsBooked) {
        this.seatsBooked = seatsBooked;
    }

    @OneToOne
    @JoinColumn(name = "userId", insertable = false, updatable = false)
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @OneToOne
    @JoinColumn(name = "flightId", insertable = false, updatable = false)
    public Flight getFlight() {
        return flight;
    }

    public void setFlight(Flight flight) {
        this.flight = flight;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "bookingId=" + bookingId +
                ", userId=" + userId +
                ", flightId=" + flightId +
                ", bookingDate='" + bookingDate + '\'' +
                ", totalCost=" + totalCost +
                ", seatsBooked=" + seatsBooked +
                ", user=" + user +
                ", flight=" + flight +
                '}';
    }
}
