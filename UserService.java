package com.ecommmerce.ecommerce.service;

import com.ecommmerce.ecommerce.entity.UserEntry;
import com.ecommmerce.ecommerce.repository.ECommorceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public class UserService {

    @Autowired
    private ECommorceRepository eCommorceRepository;

    public void saveEntry(UserEntry userEntry){
        eCommorceRepository.save(userEntry);
    }
    public List<UserEntry> getAll(){
       return eCommorceRepository.findAll();
    }

    public Optional<UserEntry> findbyId(String id){
        return eCommorceRepository.findById(id);
    }

    public void deleteById(String id){
        eCommorceRepository.deleteById(id);
    }
}
