package com.project.flights.dao;

import com.project.flights.entities.Passenger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IPassengerDao extends JpaRepository<Passenger, Integer> {
}
