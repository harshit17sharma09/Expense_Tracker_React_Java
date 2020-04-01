 package com.example.expense.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.expense.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
	
				//findBy + fieldname
	Category findByName(String name);

}
