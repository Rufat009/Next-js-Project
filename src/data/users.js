"use strict";

import fs from 'fs';
import path from 'path';

const usersFilePath = path.join(process.cwd(), 'src', 'data', 'users.json');

let users = [];

if (fs.existsSync(usersFilePath)) {
  const usersData = fs.readFileSync(usersFilePath, 'utf-8');
  users = JSON.parse(usersData);
} else {
  fs.writeFileSync(usersFilePath, JSON.stringify([]));
}

const saveUsersToFile = () => {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
};

export const addUser = (email, password) => {
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) throw new Error("User already exists");

  users.push({ email, password });
  saveUsersToFile();

  console.log("Registered Users:", users);
};

export const findUser = (email, password) => {
  return users.find(
    (user) => user.email === email && user.password === password
  );
};