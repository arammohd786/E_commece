package com.ecommmerce.ecommerce.entity;

import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.security.SecureRandom;
import java.sql.Time;
import java.time.LocalDateTime;

@Data
@Document(collection = "users")
public class UserEntry {
    @Id
    private String id;
    private String username;
    private String password;
    private String token;
    private int cart_id;
    private LocalDateTime create_at;

    public LocalDateTime getCreate_at() {
        return create_at;
    }

    public void setCreate_at(LocalDateTime create_at) {
        this.create_at = create_at;
    }
}
