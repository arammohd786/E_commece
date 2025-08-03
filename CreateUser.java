package com.ecommmerce.ecommerce.userController;

import com.ecommmerce.ecommerce.entity.UserEntry;
import com.ecommmerce.ecommerce.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("hello")
@CrossOrigin(origins = "http://localhost:3002")
public class CreateUser {

    @Autowired
    private UserService userService;

    @GetMapping("see")
    public List<UserEntry> seeAll(){
        return userService.getAll();
   }

    @PostMapping("user")
    public UserEntry createEntery(@RequestBody UserEntry myEntry){
        myEntry.setCreate_at(LocalDateTime.now());
        userService.saveEntry(myEntry);
        return myEntry;
    }
    @GetMapping("id/{myId}")
    public UserEntry getUserById(@PathVariable String myId){
        return userService.findbyId(myId).orElse(null);
    }

    @DeleteMapping("id/{myId}")
    public boolean deleteUserById(@PathVariable String myId){
        userService.deleteById(myId);
        return true;
    }



}
