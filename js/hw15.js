const calculateTotalBalance = (users) => {
  let total = 0;
  users.forEach((user) => {
    total += user.balance;
  });
  console.log("Total balance:", total);
  return total;
};

const getUsersWithFriend = (users, friendName) => {
  const result = [];
  users.forEach((user) => {
    if (user.friends.includes(friendName)) {
      result.push(user.name);
    }
  });
  console.log(`Users with friend ${friendName}:`, result);
  return result;
};

const getNamesSortedByFriendsCount = (users) => {
  const copy = [...users];
  copy.sort((a, b) => a.friends.length - b.friends.length);
  const names = copy.map((user) => user.name);
  console.log("Sorted by friends count:", names);
  return names;
};

const getSortedUniqueSkills = (users) => {
  const skills = [];
  users.forEach((user) => {
    user.skills.forEach((skill) => {
      if (!skills.includes(skill)) {
        skills.push(skill);
      }
    });
  });
  skills.sort();
  console.log("Unique sorted skills:", skills);
  return skills;
};
