export const getNameOfUser = (user, nameType) => user[nameType];

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
    const sortVal = charA.charCodeAt() - charB.charCodeAt();
    return sortVal;
  }
  // compare w/ other name (e.g. if last doesn't work, sort by first)
  const otherNameType = nameType === 'last' ? 'first' : 'last';
  const { otherCharA, otherCharB } = getCharsToCompareWith(nameType);

  if (otherCharA && otherCharB) {
    const otherSortVal = otherCharA.charCodeAt() - otherCharB.charCodeAt();
    return otherSortVal;
  }

  // indicate that users are on similar standing w/in sorting algorithm
  return 0;
}

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
      users: usersLetterMap[letter]
        .sort(byName(nameType)),
        // .map(cleanUpUserData),
    }))

  return sortedUsersList;
}