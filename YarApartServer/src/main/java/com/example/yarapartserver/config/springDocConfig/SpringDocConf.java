package com.example.yarapartserver.config.springDocConfig;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@OpenAPIDefinition
@Configuration
@SecurityScheme(
        name = "token",
        type = SecuritySchemeType.HTTP,
        bearerFormat = "JWT",
        scheme = "bearer"
)
public class SpringDocConf {

    @Bean
    public OpenAPI baseOpenAPI() {
        return new OpenAPI().info(new Info().title("YarApartServer").version("1.0.0")
                .description("Documentation to server side"));
    }

    @Bean
    public GroupedOpenApi authentication() {
        String[] path = {"/auth/**"};

        return GroupedOpenApi.builder()
                .group("Authentication")
                .pathsToMatch(path)
                .build();
    }
}
