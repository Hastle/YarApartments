package com.example.yarapartserver.repository;

import com.example.yarapartserver.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    @Query("select r from Role r where r.role = ?1")
    Optional<Role> findByRole(String role);
}
