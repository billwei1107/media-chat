package com.paipai.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "interactions", indexes = {
    @Index(name = "idx_post_interaction", columnList = "post_id, type"),
    @Index(name = "idx_user_interaction", columnList = "user_id, type")
})
public class Interaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id", nullable = false)
    private Post post;

    @Enumerated(EnumType.STRING)
    private InteractionType type;
    
    @Column(length = 500)
    private String commentContent; // Only for COMMENT type

    @CreationTimestamp
    private LocalDateTime createdAt;

    public enum InteractionType {
        LIKE, COMMENT, SHARE, SAVE
    }
}
