package com.example.yarapartserver.controller;

import com.example.yarapartserver.dto.request.LogInDto;
import com.example.yarapartserver.dto.request.RegistrationDto;
import com.example.yarapartserver.service.seviceInterface.AuthenticationService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.ExampleObject;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
@RestController
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationService authenticationService;

    @PostMapping("/signup")
    @Operation(
            description = "registration and authentication",
            responses = {
                    @ApiResponse(
                            responseCode = "201",
                            description = "Success Created",
                            content = @Content(
                                    mediaType = "application/json",
                                    examples = {
                                            @ExampleObject(
                                                    value = "{\"token\":\"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyNCIsImlhdCI6MTY4MDM2NjExOSwiZXhwIjoxNjgxMzY2MTE5fQ.bdjoctp95L6zmsJ1BW0-5jMQySKc1voWdCR4l4og7CE0tPbaqNnO_wi9dAOdvc2GtrEmeZmYpw17Vtm3rxyKEg\"" +
                                                            ",\"type\":\"Bearer\"," +
                                                            "\"userName\":\"userUser\"}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(
                            responseCode = "400",
                            description = "User already exist"
                    ),
                    @ApiResponse(
                            responseCode = "500",
                            description = "Internal server error"
                    )
            }
    )
    public ResponseEntity<?> signUp(
            @RequestBody RegistrationDto registrationDto) {

        var jwtResponse = authenticationService.registration(registrationDto);

        if (jwtResponse == null) {
            return new ResponseEntity<>("Already exist", HttpStatus.BAD_REQUEST);
        } else return new ResponseEntity<>(jwtResponse, HttpStatus.CREATED);
    }

    @PostMapping("/signin")
    @Operation(
            description = "authentication",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Success auth",
                            content = @Content(
                                    mediaType = "application/json",
                                    examples = {
                                            @ExampleObject(
                                                    value = "{\"token\":\"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyNCIsImlhdCI6MTY4MDM2NjExOSwiZXhwIjoxNjgxMzY2MTE5fQ.bdjoctp95L6zmsJ1BW0-5jMQySKc1voWdCR4l4og7CE0tPbaqNnO_wi9dAOdvc2GtrEmeZmYpw17Vtm3rxyKEg\"" +
                                                            ",\"type\":\"Bearer\"," +
                                                            "\"userName\":\"userUser\"}"
                                            )
                                    }
                            )
                    ),
                    @ApiResponse(
                            responseCode = "401",
                            description = "Unauthorized error: Full authentication is required to access this resource"
                    ),
                    @ApiResponse(
                            responseCode = "500",
                            description = "Internal server error"
                    )
            }
    )
    public ResponseEntity<?> authenticateUser(@RequestBody LogInDto logInDto) {

        return ResponseEntity.ok(authenticationService.authentication(logInDto));
    }


}
