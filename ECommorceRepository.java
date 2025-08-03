package com.ecommmerce.ecommerce.repository;

import com.ecommmerce.ecommerce.entity.UserEntry;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ECommorceRepository extends MongoRepository<UserEntry,String> {

}
