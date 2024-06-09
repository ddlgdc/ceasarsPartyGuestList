const guest = ['ANTONY', 'CICERO', 'CASSIUS', 'CLEOPATRA'];

// step 1:
guest.unshift('BRUTUS');

// question 1:
// you can check if the array contains the new item by printing it with guest[0]

// step 2:
guest.push('AUGUSTUS', 'LUCIA');

// step 3
let position = guest.indexOf('SPARTACUS');

// question 2:
// the value would be -1

// step 4:
let cassiusIndex = guest.indexOf('CASSIUS');
guest.splice(cassiusIndex, 1);

// step 5:
let specialGuest = guest.slice(0, 3);

// step 6:
let guestHonor = guest.slice(0, 2);
let others = guest.slice(2);
others.sort();
let sortedGuest = guestHonor.concat(others);
