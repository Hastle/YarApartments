package com.example.yarapartserver.controller;

import com.example.yarapartserver.config.securityConfig.JwtGenerator;
import com.example.yarapartserver.dto.request.LogInDto;
import com.example.yarapartserver.repository.RoleRepository;
import com.example.yarapartserver.repository.UserRepository;
import com.example.yarapartserver.service.seviceInterface.AuthenticationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtGenerator jwtGenerator;

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    public ResponseEntity<?> signUp(
            @RequestBody LogInDto registrationDto) {

        var jwtResponse = authenticationService.registration(registrationDto);

        if (jwtResponse == null) {
            return new ResponseEntity<>("Already exist", HttpStatus.BAD_REQUEST);
        } else return new ResponseEntity<>(jwtResponse, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<?> authenticateUser(@RequestBody LogInDto logInDto) {

        return ResponseEntity.ok(authenticationService.authentication(logInDto));
    }


}
