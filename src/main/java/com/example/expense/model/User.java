package com.example.expense.model;

import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter; 				// no need to write getter and setter in this case


@AllArgsConstructor
@NoArgsConstructor 				// Other wise JPA is going to give error
@Entity				// for db to tell this is a model
@Data  							// this is going to handle getter and setter
@Table(name = "user")
public class User {
	
	@Id
	private Long id ;
	
	private String name ;
	
	private String email ;
	
	// one user can have many categories
//	
//	@OneToMany
//	private Set<Category> category ;

}
