package com.example.expense.model;

import java.time.Instant;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Data
@Table(name = "expense")
public class Expense {
	
	@Id
	private Long id;
	
	
	private Instant expensedate ; // for timestamp , 
	
	private String descript;
	
	// multiple expense can come under one category
	@ManyToOne
	private Category category;
	
	 // many expenses can goes to one user
	@ManyToOne
	private User user ;
	
	
	
	
	// Example
	// ID(PK),Date,   Description,      User Id,     Category Id
	// 1000, 6/16/2019, "visting jaipur",1,           10
	
	
	
}
