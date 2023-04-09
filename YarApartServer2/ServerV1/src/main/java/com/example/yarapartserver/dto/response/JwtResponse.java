package com.example.yarapartserver.dto.response;

import lombok.Data;

@Data
public class JwtResponse {

    private String token;
    private String type = "Bearer";
    private String userName;


    public JwtResponse(String token, String userName) {
        this.token = token;
        this.userName = userName;
    }
}
