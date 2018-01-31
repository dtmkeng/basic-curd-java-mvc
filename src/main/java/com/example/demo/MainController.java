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
import java.util.ArrayList;
import java.util.concurrent.atomic.AtomicLong;
@Controller
public class MainController {
    
    @Autowired
    StudentRepository studentRepository;

    @ResponseBody
    @RequestMapping(path = "/firstname/{firstname}/lastname/{lastname}", method = RequestMethod.GET)
    public String InsertData(@PathVariable String firstname,@PathVariable String lastname){
            // System.out.println("Input data = "+ firstname +" "+ lastname);
            Student s1 = new Student(firstname,lastname);
            this.studentRepository.save(s1);
            if(s1==null)
                return "{\"status\":\"save data fail!\"}";
            else    
                return "{\"status\":\"save dataed!\"}";
                
    }
    @ResponseBody
    @RequestMapping(path = "/firstname/{firstname}/lastname/{lastname}", method = RequestMethod.PUT)
    public String UpdataData(@PathVariable String firstname,@PathVariable String lastname){
              Student s1 = studentRepository.findByfirstName(firstname);
              if(s1==null)
                    return "{\"status\":\"not found!\"}";
              else{
                    s1.setLastName(lastname);
                    this.studentRepository.save(s1);
                    return "{\"status\":\"updated!\"}";
              }
        }
    @ResponseBody
    @RequestMapping(path = "/firstname/{firstname}", method = RequestMethod.DELETE)
    public String DeleteData(@PathVariable String firstname){
              Student s1 = studentRepository.findByfirstName(firstname);
              if(s1==null)
                    return "{\"status\":\"not found!\"}";
              else{
                    this.studentRepository.delete(s1);
                    return "{\"status\":\"deleted!\"}";
              }
        }
    @ResponseBody
    @RequestMapping(path = "/student", method = RequestMethod.GET)
    public List getName(){
        List<Student> list = new ArrayList<>();
		studentRepository.findAll().forEach(e -> list.add(e));
		return list;
        }
    
    }