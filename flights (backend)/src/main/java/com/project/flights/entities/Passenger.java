package com.project.flights.entities;

import jakarta.persistence.*;

@Entity
public class Passenger {

    private int passengerId;
    private int bookingId;
    private String firstName;
    private String lastName;
    private int age;
    private String gender;
    private String passportNumber;
    private int seatNumber;

    private Booking booking;

    public Passenger() {
    }

    public Passenger(int passengerId, int bookingId, String firstName, String lastName, int age, String gender, String passportNumber, int seatNumber) {
        this.passengerId = passengerId;
        this.bookingId = bookingId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.passportNumber = passportNumber;
        this.seatNumber = seatNumber;
    }

    @Id
    public int getPassengerId() {
        return passengerId;
    }

    public void setPassengerId(int passengerId) {
        this.passengerId = passengerId;
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassportNumber() {
        return passportNumber;
    }

    public void setPassportNumber(String passportNumber) {
        this.passportNumber = passportNumber;
    }

    public int getSeatNumber() {
        return seatNumber;
    }

    public void setSeatNumber(int seatNumber) {
        this.seatNumber = seatNumber;
    }

    @OneToOne
    @JoinColumn(name = "bookingId" , insertable = false, updatable = false)
    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    @Override
    public String toString() {
        return "Passenger{" +
                "passengerId=" + passengerId +
                ", bookingId=" + bookingId +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", passportNumber='" + passportNumber + '\'' +
                ", seatNumber=" + seatNumber +
                ", booking=" + booking +
                '}';
    }
}
