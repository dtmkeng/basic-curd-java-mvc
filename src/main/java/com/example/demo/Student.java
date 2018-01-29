package com.example.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="student")// name table in database 
public class Student {

    @Id
    @GeneratedValue
    private  Long id;

    private String firstName;
	private String lastName;

	private Student() {
    }

	public Student(String firstName, String lastName) {
         this.firstName =firstName;
         this.lastName=lastName;
    }
    public void setFirstName(String firstname){
        this.firstName=firstname;
    }
    public void setLastName(String lastname){
        this.lastName=lastname;
    }
}