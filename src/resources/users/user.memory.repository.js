const User =  require('./user.model')

function createUsers() {
  const usersExample = []
  for (let i = 0; i <= 30; i += 1) {
    const user = {};
    user.id = i.toString();
    user.name = `name_${i}`;
    user.login = `login_${i}`;
    user.password = `password_${i}`;
    usersExample.push(user);
  }
  return usersExample
}

let users = []
users.push(...createUsers());
const getAll = async () => users;

const save = async (userCredentials) => {
  const newUser = await new User(userCredentials)
  users.push(newUser)
  return newUser
}
const get = (id) => {
  const currentUser = users.find(user => user.id === id)
  if (currentUser === undefined) return {}
  return currentUser;
}

const update = (id, userCredentials) => {
  users = users.map(user => user.id === id ? { ...userCredentials } : user);
  return userCredentials;
}

const remove = (id) => {
  users = users.filter(user => user.id !== id);
  return { message: 'User successfully removed.'}
}


module.exports = { getAll, save, get, update, remove };
