package com.paipai.backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String fromEmail;

    public void sendVerificationCode(String toEmail, String code) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom(fromEmail);
        message.setTo(toEmail);
        message.setSubject("【派派連萌】您的註冊驗證碼");
        message.setText("歡迎加入派派連萌！\n\n您的驗證碼是：" + code + "\n\n有效期限為 5 分鐘，請勿將驗證碼提供給他人。");

        mailSender.send(message);
    }
}
