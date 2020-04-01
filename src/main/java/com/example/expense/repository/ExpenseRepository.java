package com.example.expense.repository;

import org.springframework.boot.autoconfigure.data.jpa.JpaRepositoriesAutoConfiguration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.support.JpaRepositoryFactory;

import com.example.expense.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, Long> {

}
