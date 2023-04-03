package com.example.yarapartserver.repository;

import com.example.yarapartserver.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {


    @Query("select u from User u where u.userName = ?1")
    Optional<User> findByUserName(String userName);

    @Query("select (count(u) > 0) from User u where u.userName = ?1")
    boolean existsByUserName(String userName);

    @Query("select (count(u) > 0) from User u where u.email = ?1")
    boolean existsByEmail(String email);
}
