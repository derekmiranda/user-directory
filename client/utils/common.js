const getNameOfUser = (user, nameType) => user.name[nameType];

export const organizeUsersByLetter = (userList, nameType) => {
  const usersLetterMap = userList
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

  const sortedUsersList = Object.keys(usersLetterMap)
    .sort()
    .map(letter => ({
      letter,
      users: usersLetterMap[letter],
    }))
    
  return sortedUsersList;
}