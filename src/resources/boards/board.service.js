const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();
const save = (boardCredentials) => boardsRepo.save(boardCredentials);
const get = (id) => boardsRepo.get(id);
const update = (id, boardCredentials) => boardsRepo.update(id, boardCredentials);
const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, save, get, update, remove };
