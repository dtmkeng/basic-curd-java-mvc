
package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface StudentRepository extends CrudRepository<Student, Long> {
       Student findByfirstName(@Param("firstName") String firstName);
}