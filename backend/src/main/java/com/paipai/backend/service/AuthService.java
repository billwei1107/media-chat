package com.paipai.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.Random;

@Service
public class AuthService {

    @Autowired
    private StringRedisTemplate redisTemplate;

    @Autowired
    private EmailService emailService;

    // Send verification code
    public void sendCode(String email) {
        // 1. Generate 6-digit code
        String code = String.format("%06d", new Random().nextInt(999999));

        // 2. Save to Redis with 5 minutes TTL
        String key = "verify:email:" + email;
        redisTemplate.opsForValue().set(key, code, Duration.ofMinutes(5));

        // 3. Send email via EmailService
        emailService.sendVerificationCode(email, code);
    }

    // Verify code
    public boolean verifyCode(String email, String inputCode) {
        String key = "verify:email:" + email;
        String storedCode = redisTemplate.opsForValue().get(key);

        return storedCode != null && storedCode.equals(inputCode);
    }
}
