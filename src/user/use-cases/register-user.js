// import makeUser from "./../entity";
const makeUserInstance = require("./../entity");
function makeAddUser({ userRepo }) {
  return async function addUser(userInfo) {
    const user = makeUserInstance.makeUser(userInfo);
    return userRepo.addUser({
      firstname: user.getFirstname(),
      lastname: user.getLastname(),
      password: user.getPassword(),
      email: user.getEmail(),
    });
  };
}
module.exports = makeAddUser;
