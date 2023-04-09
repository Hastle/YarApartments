package com.example.yarapartserver.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(TestController.class)
class TestControllerTest {

    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    @Autowired
    private MockMvc mockMvc;

    @Test
    void allAccess() {
    }

    @Test
    @WithMockUser(roles = "USER")
    void userAccessTrue() {
    }

    @Test
    void moderatorAccess() {
    }

    @Test
    void adminAccess() {
    }
}