package com.paipai.backend.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {
    @NotBlank(message = "Username or Email is required")
    private String username; // Can be username or email

    @NotBlank(message = "Password is required")
    private String password;
}
