package com.paipai.backend.service;

import com.paipai.backend.dto.RegisterRequest;
import com.paipai.backend.entity.User;
import com.paipai.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Transactional
    public void createUser(RegisterRequest request) {
        // 1. Check if email or username already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new RuntimeException("Email already registered");
        }
        if (userRepository.existsByUsername(request.getUsername())) {
            throw new RuntimeException("Username already taken");
        }

        // 2. Create User entity
        User user = new User();
        user.setEmail(request.getEmail());
        user.setUsername(request.getUsername());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(User.Role.USER);

        // 3. Save to DB
        userRepository.save(user);
    }

    public User login(com.paipai.backend.dto.LoginRequest request) {
        // 1. Find by Email or Username
        User user = userRepository.findByEmail(request.getUsername())
                .or(() -> userRepository.findByUsername(request.getUsername()))
                .orElseThrow(() -> new RuntimeException("User not found"));

        // 2. Validate Password
        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }
}
