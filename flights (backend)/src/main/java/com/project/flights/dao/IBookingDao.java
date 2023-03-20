package com.project.flights.dao;

import com.project.flights.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBookingDao extends JpaRepository<Booking, Integer> {
}
