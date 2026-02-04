package com.paipai.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "gifts")
public class Gift {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String iconUrl;

    @Column(nullable = false)
    private int price; // In virtual currency

    private String animationUrl; // Lottie or SVGA

    private boolean active = true;
}
