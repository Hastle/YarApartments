package com.example.yarapartserver.repository;

import com.example.yarapartserver.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {


    @Query("select u from User u where u.userName = ?1")
    Optional<User> findByUserName(String userName);
}
