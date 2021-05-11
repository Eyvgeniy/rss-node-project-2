const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();
const save = (userCredentials) => usersRepo.save(userCredentials);
const get = (id) => usersRepo.get(id);
const update = (id, userCredentials) => usersRepo.update(id, userCredentials);
const remove = (id) => usersRepo.remove(id);

module.exports = { getAll, save, get, update, remove };
