package com.paipai.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "gift_transactions")
public class GiftTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sender_id", nullable = false)
    private User sender;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "receiver_id", nullable = false)
    private User receiver; // The streamer

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "live_session_id", nullable = false)
    private LiveSession liveSession;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "gift_id", nullable = false)
    private Gift gift;

    @Column(nullable = false)
    private int quantity = 1;

    @Column(nullable = false)
    private int totalPrice; // Snapshotted price * quantity

    @CreationTimestamp
    private LocalDateTime createdAt;
}
