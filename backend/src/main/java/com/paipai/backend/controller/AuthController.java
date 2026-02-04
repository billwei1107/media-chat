package com.paipai.backend.controller;

import com.paipai.backend.dto.RegisterRequest;
import com.paipai.backend.dto.VerificationRequest;
import com.paipai.backend.service.AuthService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*") // Allow frontend access
public class AuthController {

    @Autowired
    private AuthService authService;

    @Autowired
    private com.paipai.backend.service.UserService userService;

    @PostMapping("/send-code")
    public ResponseEntity<?> sendVerificationCode(@Valid @RequestBody VerificationRequest request) {
        authService.sendCode(request.getEmail());
        return ResponseEntity.ok(Map.of("message", "Verification code sent"));
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {
        // 1. Verify code
        boolean isValid = authService.verifyCode(request.getEmail(), request.getCode());
        if (!isValid) {
            return ResponseEntity.badRequest().body(Map.of("error", "Invalid or expired verification code"));
        }

        // 2. Create User in DB
        try {
            userService.createUser(request);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }

        return ResponseEntity.ok(Map.of("message", "User registered successfully"));
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody com.paipai.backend.dto.LoginRequest request) {
        try {
            com.paipai.backend.entity.User user = userService.login(request);
            // In a real app, generate JWT here. For now return user info.
            return ResponseEntity.ok(Map.of(
                    "message", "Login successful",
                    "user", Map.of(
                            "id", user.getId(),
                            "username", user.getUsername(),
                            "email", user.getEmail(),
                            "role", user.getRole())));
        } catch (RuntimeException e) {
            return ResponseEntity.status(401).body(Map.of("error", e.getMessage()));
        }
    }
}
