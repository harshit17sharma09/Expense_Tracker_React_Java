package com.example.expense.controller;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.expense.model.Category;
import com.example.expense.repository.CategoryRepository;

@RestController
@RequestMapping("/api")
public class CategoryController {
	
	private CategoryRepository categoryRepository;

	//constructor
	public CategoryController(CategoryRepository categoryRepository) {
		super();
		this.categoryRepository = categoryRepository;
	}
	
	@GetMapping("/categories")
	Collection<Category> categories(){
		
		return categoryRepository.findAll();
		// Select * from category
	}
	
	// category/2 ->finding by id
	@GetMapping("/category/{id}")
	ResponseEntity<?> getCategory(@PathVariable Long id) {
		
		Optional<Category> category = categoryRepository.findById(id);
		
		return category.map(response -> ResponseEntity.ok().body(response))
				.orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
		
		
	}
	
	
	@PostMapping("/category")
	ResponseEntity<Category> createCategory(@Valid @RequestBody Category category) throws URISyntaxException{
		
		Category result = categoryRepository.save(category);
		
		return ResponseEntity.created(new URI("/api/category" + result.getId())).body(result);
		
		 
	}
	
	
	// the method is identical to createCategory but JPA is smart enough to
	//understand if  it's PUT and Save he will over ride the existing record
	
	@PutMapping("category/{id}")
	ResponseEntity<Category> updateCategory(@Valid @RequestBody Category category) {
		
		Category result = categoryRepository.save(category);
		return ResponseEntity.ok().body(result);
		
		
	}
	
	
	@DeleteMapping("/category/{id}")
	ResponseEntity<?> deleteCategory(@PathVariable Long id) {
		categoryRepository.deleteById(id);
		return ResponseEntity.ok().build();
		// build command is to tell do not respond anything in a body
	}
	
		
		
		
//	}

	
	

}
