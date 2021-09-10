// import makeUser from "./../entity";
const makeUserInstance = require("./../entity");
function makeAddUser({ UserRepoInstance }) {
  return async function addUser(userInfo) {
    const user = makeUserInstance.makeUser(userInfo);
    try {
      return UserRepoInstance.addUser({
        firstname: user.getFirstname(),
        lastname: user.getLastname(),
        password: user.getPassword(),
        email: user.getEmail(),
      });
    } catch (error) {
      if (error) {
        return error;
      }
    }
  };
}
module.exports = makeAddUser;
