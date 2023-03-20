package com.project.flights.dao;

import com.project.flights.entities.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IFlightDao extends JpaRepository<Flight, Integer> {
}
