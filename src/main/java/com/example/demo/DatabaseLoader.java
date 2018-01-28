package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	
	private final StudentRepository studentRepository;

    @Autowired
    public DatabaseLoader(StudentRepository studentRepository) {
        this.studentRepository = studentRepository;
    }

	@Override
	public void run(String... strings) throws Exception {
		
	}
}