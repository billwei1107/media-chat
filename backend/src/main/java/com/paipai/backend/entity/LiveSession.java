package com.paipai.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "live_sessions")
public class LiveSession {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "streamer_id", nullable = false)
    private User streamer;

    @Column(nullable = false)
    private String title;

    private String coverUrl;

    @Enumerated(EnumType.STRING)
    private LiveStatus status = LiveStatus.PENDING;

    private int viewerCount = 0;

    @CreationTimestamp
    private LocalDateTime createdAt;

    @UpdateTimestamp
    private LocalDateTime updatedAt;

    private LocalDateTime startedAt;
    private LocalDateTime endedAt;

    public enum LiveStatus {
        PENDING, LIVE, ENDED
    }
}
