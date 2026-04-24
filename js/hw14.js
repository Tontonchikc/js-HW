const getUserNames = (users) => {
  return users.map((user) => user.name);
};



const getUsersWithEyeColor = (users, color) => {
  return users.filter((user) => user.eyeColor === color);
};


const getUsersWithGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .map((user) => user.name);
};



const getInactiveUsers = (users) => {
  return users.filter((user) => !user.isActive);
};



const getUserWithEmail = (users, email) => {
  return users.find((user) => user.email === email);
};