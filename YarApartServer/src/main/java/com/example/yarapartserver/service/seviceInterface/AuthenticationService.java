package com.example.yarapartserver.service.seviceInterface;

import com.example.yarapartserver.dto.request.LogInDto;
import com.example.yarapartserver.dto.request.RegistrationDto;
import com.example.yarapartserver.dto.response.JwtResponse;


public interface AuthenticationService {

    JwtResponse registration(RegistrationDto registrationDto);

    JwtResponse authentication(LogInDto logInDto);

}
