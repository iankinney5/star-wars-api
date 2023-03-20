const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
let arr = characters.map(item => item.name);
//2. Get array of all heights
let arr2 = characters.map(item => item.height);
//3. Get array of objects with just name and height properties
let arr3 = characters.map(item => {
    return {'name': item.name, 'height': item.height};
});
//4. Get array of all first names
let arr4 = characters.map(item => item.name.split(' ')[0]);


//***REDUCE***
//1. Get total mass of all characters
let mass = characters.reduce((prev, cur) => {
    return prev + cur.mass;
}, 0)
//2. Get total height of all characters
let height = characters.reduce((prev, cur) => {
    return prev + cur.height;
}, 0)

//3. Get total number of characters by eye color
// MAP solution
function getNumOfCharactersByEyeColor(eyeColor) {
    let charactersByEyeColor = [];
    characters.map((character) => {
        if(character.eye_color == eyeColor) {
            charactersByEyeColor.push(character);
        }
    })
    return charactersByEyeColor.length
}
// REDUCE solution
function getNumofCharactersByEyeColorReduce(eyeColor) {
	let num = characters.reduce((prev, cur) => {
  	if(cur.eye_color === eyeColor) {
    	return prev + 1
    } else {
    	return prev + 0
    }
  },0)
  return num;
};

//4. Get total number of characters in all the character names
let character_count = characters.reduce((prev, cur) => {
    let nameNoSpace = cur.name.replace(' ','');
    return prev + cur.name.length;
}, 0)


//***FILTER***
//1. Get characters with mass greater than 100
let arr7 = characters.filter(item => item.mass > 100);
//2. Get characters with height less than 200
let arr8 = characters.filter(item => item.height < 200);
//3. Get all male characters
let arr9 = characters.filter(item => item.gender === 'male');
//4. Get all female characters
let arr10 = characters.filter(item => item.gender === 'female');


//***SORT***
//1. Sort by mass in ascending order
let massSort = characters.sort((a, b) => {
    return a.mass-b.mass
})
//2. Sort by height in ascending order
let heightSort = characters.sort((a, b) => {
    return a.height-b.height
})
//3. Sort by name
let nameSort = characters.sort((a, b) => {
    if(a.name > b.name) return 1;
    if(a.name < b.name) return -1;
    else return 0;
})
//4. Sort by gender
let genderSort = characters.sort((a, b) => {
    if(a.gender === 'female') return 1;
    if(a.gender === 'male') return -1;
    else return 0;
})

//***EVERY***
//1. Does every character have blue eyes?
let blueEyesCheck = characters.every(info => {
    return info.eye_color === 'blue';
})
//2. Does every character have mass more than 40?
let massCheck = characters.every(info => {
    return info.mass > 40;
})
//3. Is every character shorter than 200?
let heightCheck = characters.every((info) => {
    return info.height < 200;
})
//4. Is every character male?
let genderCheck = characters.every((info) => {
    return info.gender === 'male';
})

//***SOME***
//1. Is there at least one male character?
let genderSome = characters.some(info => {
    return info.gender === 'male';
})
//2. Is there at least one character with blue eyes?
let eyeSome = characters.some(info => {
    return info.eye_color === 'blue';
})
//3. Is there at least one character taller than 210?
let heightSome = characters.some(info => {
    return info.height > 210;
})
//4. Is there at least one character that has mass less than 50?
let massSome = characters.some(info => {
    return info.mass < 50;
})