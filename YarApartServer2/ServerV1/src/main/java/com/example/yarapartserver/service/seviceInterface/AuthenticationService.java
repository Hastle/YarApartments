package com.example.yarapartserver.service.seviceInterface;

import com.example.yarapartserver.dto.request.LogInDto;
import com.example.yarapartserver.dto.request.RegistrationDto;
import com.example.yarapartserver.dto.response.JwtResponse;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthenticationService {

    void registration(RegistrationDto registrationDto);

    JwtResponse authentication(LogInDto logInDto);

    boolean activateUser(String code);

}
