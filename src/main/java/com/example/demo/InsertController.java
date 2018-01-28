package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.PagedResources;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.concurrent.atomic.AtomicLong;
@Controller
public class InsertController {
    
    @Autowired
    StudentRepository studentRepository;

    @ResponseBody
    @RequestMapping(path = "/firstname/{firstname}/lastname/{lastname}", method = RequestMethod.GET)
    public String InsertData(@PathVariable String firstname,@PathVariable String lastname){
            // System.out.println("Input data = "+ firstname +" "+ lastname);
            Student s1 = new Student(firstname,lastname);
            this.studentRepository.save(s1);
            return "{\"status\":\"insert data!\"}";
        }
    }