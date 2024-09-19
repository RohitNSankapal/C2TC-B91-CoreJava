package com.tnsif.sm.customer;

import java.util.List;

public interface CustomerService {
	public List<Customer> listAll();
	public Customer get(Integer id);
	public void save(Customer customer);
	public void delete(Integer id);
	}
