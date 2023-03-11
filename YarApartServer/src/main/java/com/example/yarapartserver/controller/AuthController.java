package com.example.yarapartserver.controller;

import com.example.yarapartserver.dto.LogInDto;
import com.example.yarapartserver.dto.RegistrationDto;
import com.example.yarapartserver.entity.Role;
import com.example.yarapartserver.entity.User;
import com.example.yarapartserver.entity.enums.Erole;
import com.example.yarapartserver.repository.RoleRepository;
import com.example.yarapartserver.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashSet;
import java.util.Set;

@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @PostMapping("/signup")
    public ResponseEntity<String> registration(
            @RequestBody RegistrationDto registrationDto) {

        if (userRepository.existsByUserName(registrationDto.getUserName())) {
            return new ResponseEntity<>("Already exist", HttpStatus.BAD_REQUEST);
        }

        User createUser = new User();
        createUser.setUserName(registrationDto.getUserName());
        createUser.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        Set<Role> newRoles = new HashSet<>();
        Role userRole = roleRepository.findByRole(Erole.USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        newRoles.add(userRole);
        createUser.setRoles(newRoles);

        userRepository.save(createUser);
        return new ResponseEntity<>("User was added", HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    public ResponseEntity<String> logIn(@RequestBody LogInDto logInDto) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(logInDto.getUserName(),
                        logInDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);

        return new ResponseEntity<>("User singed success", HttpStatus.OK);
    }


}
