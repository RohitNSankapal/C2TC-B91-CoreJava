package com.tnsif.sm.customer;

import java.util.List;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin("*")
@RestController
public class CustomerController
{
	@Autowired
	private CustomerServiceImpl  service;
	
	//Restful API methods for retrieval operations
	//use list- the reason is in database different type of entities are present.
	
	@GetMapping("/customers")
	public List<Customer> list()
	{
		return service.listAll();
	}
	
	
	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> get(@PathVariable Integer id)
	{
		
		try {
			Customer student=service.get(id);
			return new ResponseEntity<Customer>(student,HttpStatus.OK);
		}
		catch(NoSuchElementException e) {
			
			return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
		}
	}
	
	@PostMapping("/customers")
	public void add(@RequestBody Customer customers) {
		service.save(customers);
	}
	

	
	@PutMapping("/customers/{id}")
	public ResponseEntity<?> update(@RequestBody Customer customers,@PathVariable Integer id)
	{
		try {
			@SuppressWarnings("unused")
			Customer existcustomers=service.get(id);
			service.save(customers);
			return new ResponseEntity<>(HttpStatus.OK);
		
		}catch(NoSuchElementException e) {
			return new ResponseEntity<Customer>(HttpStatus.NOT_FOUND);
			
		}
		
	}
	

	@DeleteMapping ("/customers/{id}")
	public void delete(@PathVariable Integer id)
	{
		service.delete(id);
	}
	
		
	
	
}  