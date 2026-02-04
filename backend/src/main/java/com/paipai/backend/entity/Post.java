package com.paipai.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Enumerated(EnumType.STRING)
    private PostType type;

    @Column(columnDefinition = "TEXT")
    private String content;

    private String mediaUrl; // URL to Image or Video
    
    private String thumbnailUrl; // For video thumbnails

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;
    
    // Simple counters to avoid expensive count queries on list view
    private int likeCount = 0;
    private int commentCount = 0;

    public enum PostType {
        TEXT, IMAGE, VIDEO
    }
}
