package com.example.yarapartserver.config.securityConfig;

import com.example.yarapartserver.entity.Role;
import com.example.yarapartserver.entity.User;
import com.example.yarapartserver.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CustomUserDetails implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = userRepository.findByUserName(username)
                .orElseThrow(() -> new UsernameNotFoundException("User didnt exist"));
        return new org.springframework.security.core.userdetails.User(user.getUserName(),
                user.getPassword(), mapRoleToAuthority(user.getRoles()));
    }

    private Collection<GrantedAuthority> mapRoleToAuthority(Set<Role> roles) {

        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getRole().toString()))
                .collect(Collectors.toList());
    }
}
