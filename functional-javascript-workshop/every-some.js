module.exports = function checkUsersValid(goodUsers) {
  return function(submittedUsers) {
      return !submittedUsers.some(function(submittedUser){
          return !goodUsers.some(function(goodUser){
              return goodUser.id == submittedUser.id
          })
      })
  };
}