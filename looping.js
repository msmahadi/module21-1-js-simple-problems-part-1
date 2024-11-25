let friends = ["Elon", "Mahadi", "Waren", "Asif"];

// ! for loop
// for (i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// };

// ! for of loop
for (let friend of friends) {
    console.log(friend);
}

// ! forEach loop
friends.forEach((friendEach) => {
    console.log(`Friends are: ${friendEach}`);
})