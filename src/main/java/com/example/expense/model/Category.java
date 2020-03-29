package com.example.expense.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@AllArgsConstructor
@NoArgsConstructor
@Entity
@Data
@Table(name = "category")
public class Category {

	@Id
	private Long id ;
	
	// like Travel , grocery
	@NonNull
	private String name ;
	
//	@ManyToOne(cascade = CascadeType.PERSIST)
//	private User user ; 
//	
	
}
