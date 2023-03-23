package com.example.yarapartserver.service.serviceImpl;

import com.example.yarapartserver.config.securityConfig.AuthTokenFilter;
import com.example.yarapartserver.config.securityConfig.JwtGenerator;
import com.example.yarapartserver.dto.request.LogInDto;
import com.example.yarapartserver.dto.response.JwtResponse;
import com.example.yarapartserver.entity.Role;
import com.example.yarapartserver.entity.Token;
import com.example.yarapartserver.entity.User;
import com.example.yarapartserver.entity.enums.Erole;
import com.example.yarapartserver.entity.enums.TokenType;
import com.example.yarapartserver.repository.RoleRepository;
import com.example.yarapartserver.repository.TokenRepository;
import com.example.yarapartserver.repository.UserRepository;
import com.example.yarapartserver.service.seviceInterface.AuthenticationService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthenticationServiceImpl implements AuthenticationService {

    private final AuthenticationManager authenticationManager;
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtGenerator jwtGenerator;
    private final TokenRepository tokenRepository;

    private final AuthTokenFilter authTokenFilter;

    @Transactional
    @Override
    public JwtResponse registration(LogInDto registrationDto) {

        log.info("Start registr");
        if (userRepository.existsByUserName(registrationDto.getUserName())) {
            return null;
        }

        User createUser = new User();
        createUser.setUserName(registrationDto.getUserName());
        createUser.setPassword(passwordEncoder.encode(registrationDto.getPassword()));
        Set<Role> newRoles = new HashSet<>();
        Role userRole = roleRepository.findByRole(Erole.ROLE_USER)
                .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
        newRoles.add(userRole);
        createUser.setRoles(newRoles);

        var savedUser = userRepository.save(createUser);
        var jwtToken = authentication(registrationDto).getToken();
        //saveUserToken(savedUser,jwtToken);
        log.info("End registr");
        return new JwtResponse(jwtToken);
    }

    @Override
    public JwtResponse authentication(LogInDto logInDto) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(logInDto.getUserName(),
                        logInDto.getPassword()));
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtGenerator.generateToken(authentication);

        var user = userRepository.findByUserName(logInDto.getUserName())
                .orElseThrow();
        revokeAllUserTokens(user);
        saveUserToken(user, jwt);

        return new JwtResponse(jwt);
    }

    private void saveUserToken(User user, String jwtToken) {

        var token = Token.builder()
                .user(user)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();

        tokenRepository.save(token);
    }

    private void revokeAllUserTokens(User user) {

        var validUserTokens = tokenRepository.findAllValidTokensByUser(user.getId());

        if (validUserTokens.isEmpty()) {
            return;
        }
        validUserTokens.forEach(t -> {
            t.setExpired(true);
            t.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

}
