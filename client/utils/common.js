export const organizeUsersByLetter = (userList, nameType) => {
  // expect to see letter sections based on capitalized first letter of last names
  const getNameOfUser = (user, nameType) => user.name[nameType];
  const usersByLetter = userList
    .reduce((userObj, user) => {
      const name = getNameOfUser(user, nameType);
      const firstLetter = name[0];

      if (userObj[firstLetter] === undefined) {
        userObj[firstLetter] = [user];
      } else {
        userObj[firstLetter].push(user);
      }

      return userObj;
    }, {})
  return usersByLetter;
}