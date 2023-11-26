package com.crud.service;

import java.util.List;

import com.crud.entities.User;

public interface UserService {
	public List<User> findAll();
	public User save(User user);
	public User update(User user);
	public void delete(int id);
}
