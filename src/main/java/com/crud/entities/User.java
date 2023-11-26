package com.crud.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int id;
	public String name;
	public String middleName;
	public String surName;
	
	public User() {
		super();
	}

	public User(int id, String name, String middleName, String surName) {
		super();
		this.id = id;
		this.name = name;
		this.middleName = middleName;
		this.surName = surName;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getSurName() {
		return surName;
	}
	public void setSurName(String surName) {
		this.surName = surName;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", middleName=" + middleName + ", surName=" + surName + "]";
	}
	
	
}
