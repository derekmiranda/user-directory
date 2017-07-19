export const getNameOfUser = (user, nameType) => user.name[nameType];

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

  const byName = nameType => (userA, userB) => {
    function getCharsToCompareWith(nameType) {
      const nameA = getNameOfUser(userA, nameType).toLowerCase();
      const nameB = getNameOfUser(userB, nameType).toLowerCase();

      // go thru each string till hit diff chars or ends of either
      let idx = 0;
      while (nameA[idx] && nameB[idx] && nameA[idx] === nameB[idx]) {
        idx += 1;
      }

      return {
        charA: nameA[idx],
        charB: nameB[idx],
      }
    }

    // have valid chars (i.e. non-equal words) to compare with
    const { charA, charB } = getCharsToCompareWith(nameType);
    if (charA && charB) {
      return charB.charCodeAt() - charA.charCodeAt();
    }
    // compare w/ other name (e.g. if last doesn't work, sort by first)
    const otherNameType = nameType === 'last' ? 'first' : 'last';
    const { otherCharA, otherCharB } = getCharsToCompareWith(nameType);

    if (otherCharA && otherCharB) {
      return otherCharB.charCodeAt() - otherCharA.charCodeAt();
    }

    // indicate that users are on similar standing w/in sorting algorithm
    return 0;
  }

  const sortedUsersList = Object.keys(usersLetterMap)
    .sort()
    .map(letter => ({
      letter,
      users: usersLetterMap[letter].sort(byName(nameType)),
    }))

  return sortedUsersList;
}