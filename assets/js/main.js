 //lev1_1: length
let firstName = "Manuscript";
let lastName = "Str_F";
let fullName = firstName + lastName;
console.log(`firstName.length: ${firstName.length}`);
console.log(`lastName.length: ${lastName.length}`);
console.log(`fullName.length: ${fullName.length}`);

//lev1_2: indexOf 
const txt = "How inappropriate to call this planet Earth, when clearly it is Ocean.";
console.log("h " + txt.indexOf("h"));
console.log("Earth " + txt.indexOf("Earth"));
console.log("Moon " + txt.indexOf("Moon"));

//lev1_4: slice
const A = "Susi is going to codingschool";
let slice1 = A.slice(0, 5);
let slice2 = A.slice(5, 7);
let slice3 = A.slice(5, 17).concat(A.slice(23, 29));
let slice4 = A.slice(23, 29);
let slice5 = A.slice(0, 8).concat(A.slice(23, 29));
document.write(slice1 + '<br>');
document.write(slice2 + '<br>');
document.write(slice3 + '<br>');
document.write(slice4 + '<br>');
document.write(slice5 + '<br>');

//lev1_5: substring
const text = 'Susi is back from codingschool';
let sString1 = text.substring(0, 5);
let sString2 = text.substring(5, 7);
let sString4 = text.substring(24, 30);
let sString5 = text.substring(0, 8).concat(text.substring(24, 30));;
document.write(sString1 + '<br>');
document.write(sString2 + '<br>');
document.write(sString4 + '<br>');
document.write(sString5 + '<br>');

//lev1_7: replace
const text1 = "Sam is good at codingschool";
let replace1 = (text1.replace("good", "bad"));
let replace2 = (text1.replace("Sam", "Susi"));
let replace3 = (text1.replace("codingschool", "tennis"));
document.write(replace1 + '<br>');
document.write(replace2 + '<br>');
document.write(replace3 + '<br>');

//lev1_8: toLowerCase-toUpperCase
const text2 = "Sam is going to codingschool";
let tuc1 = (text2.toUpperCase());
let tlc1 = (text2.toLowerCase());
let tuc2 = (text2.slice(0, 3).toUpperCase().concat(text2.slice(3, 16)).concat(text2.slice(22, 28).toUpperCase()));
let tlc2 = (text2.slice(0, 3).toLowerCase().concat(text2.slice(3, 16).toUpperCase()).concat(text2.slice(22, 28).toLowerCase()));
let tucTlc = (text2.slice(0, 4).concat(text2.slice(4, 5).toUpperCase()).concat(text2.slice(5, 7)).concat(text2.slice(7, 8).toUpperCase()).concat(text2.slice(8, 13)).concat(text2.slice(13, 14).toUpperCase()).concat(text2.slice(14, 16)).concat(text2.slice(22, 23).toUpperCase()).concat(text2.slice(23, 28)));
document.write(tuc1 + '<br>');
document.write(tlc1 + '<br>');
document.write(tuc2 + '<br>');
document.write(tlc2 + '<br>');
document.write(tucTlc + '<br>');

//lev1_9: concat
const text11 = "Sam is going to codingschool";
const text22 = "Susi";
const text3 = "and";
const text4 = "to movie theater"
document.write(text11.concat(` ${text3} ${text4}`) + '<br>');
document.write(text11.replace("codingschool", text4) + '<br>');
document.write(`${text22} ${text3} ${text11.replace("is", "are").slice(0, 17).concat(text11.slice(22))}` + '<br>');
document.write(`${text22} ${text3} ${text11.replace("is", "are").replace("codingschool", "gym")} ${text3} ${text4}` + '<br>');
document.write(`${text11.replace("Sam", text22).slice(0, 17).concat(text11.slice(22))} ${text3} ${text4}`);

//lev1_1: Ternary Operator
function checkAge() {
    let age = document.querySelector("input[type=number]").value;
    age > 18 ? document.querySelector(".ageResult").innerHTML = "Du darfst rein!" : document.querySelector(".ageResult").innerHTML = "Du bleibst besser draußen!";
    console.log(age);
}

//lev1_2: Ternary Operator
function checkPw() {
    let pw = document.querySelector("input[type=password]").value;
    pw.length > 7 ? document.querySelector(".pwResult").innerHTML = '<span style="color: green;">Welcome 2 Da (Concred-)Jungle!</span>' : document.querySelector(".pwResult").innerHTML = '<span style="color: red;">Your Pw Is 2 Short!</span>';
}

//lev2_5: Switch Break
function check() {
    let bl = document.querySelector("input[type=text]").value;
    console.log(bl);
    switch (bl) {
        case "Berlin":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Bremen":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hessen":
            document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt";
            break;
        default: document.querySelector("#bundeslandInfoErgebnis").innerHTML = "Existiert gar nicht ODER ist noch nicht eingepflegt. Es gibt nur Berlin, Bremen und Hessen.";
            break;
    }
}

//lev2_7: Switch Break DHL
function showtxt() {
    let optionValue = document.querySelector("select[name=mylist]").value;
    console.log(optionValue);

    switch (optionValue) {
        case "0":
            document.querySelector("#masse").innerHTML = "<b>Brief und Postkarte</b> <br>L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm";
            break;
        case "1":
            document.querySelector("#masse").innerHTML = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";
            break;
        case "2":
            document.querySelector("#masse").innerHTML = "<b>DHL Paket 5 kg</b> <br> bis 120 x 60 x 60 cm";
            break;
        case "3":
            document.querySelector("#masse").innerHTML = "<b>DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm";
            break;
        default:
            document.querySelector("#masse").innerHTML = "<b>Extra große Größe</b>";
            break;
    }
}

//lvl1_1: Arrays
let arrPerson = ["Bruce", "Wayne", "Superreich"];
let friends = ["Farid", "Christian", "Sergio"];
let favFood = ["Burger", "Sushi", "Käse"];
console.log(arrPerson);
console.log(friends);
console.log(favFood);

//lvl_1_2: Arrays Index
console.log(arrPerson[0]);
console.log(arrPerson[1]);
console.log(arrPerson[2]);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(favFood[1]);
console.log(favFood[2]);
console.log(favFood[0]);

//lvl_1_3: Arrays length
console.log(arrPerson.length);
console.log(friends.length);
console.log(favFood.length);

//lvl_1_4: Arrays push()
//!!!The push() method adds new items to the end of an array, changes the length of the array and returns the new length!!!
console.log("person[] - BEFOR .push()");
console.log(arrPerson);
console.log(arrPerson.length);
console.log("arrPerson[] - AFTER .push()");
arrPerson.push("Joker", "Harley Quinn");
console.log(arrPerson);
console.log(arrPerson.length);

console.log("friends[] - BEFOR .push()");
console.log(friends);
console.log(friends.length);
console.log("friends[] - AFTER .push()");
friends.push("Marzio", "Freddy");
console.log(friends);
console.log(friends.length);

console.log("favFood[] - BEFOR .push()");
console.log(favFood);
console.log(favFood.length);
console.log("favFood[] - AFTER .push()");
favFood.push("Pizza", "Currywurst");
console.log(favFood);
console.log(favFood.length);

//lvl_1_5: Arrays pop()
//!!!The pop() method removes (pops) the last element of an array, changes the original array and returns the removed element!!!
console.log("arrPerson[] - BEFOR .pop()");
console.log(arrPerson);
console.log("arrPerson[] - AFTER pop");
let lastPerson = arrPerson.pop();
console.log(arrPerson);
console.log("lastarrPerson = " + lastPerson);

console.log("friends[] - BEFOR .pop()");
console.log(friends);
console.log("friends[] - AFTER .pop()");
let lastFriend = friends.pop();
console.log(friends);
console.log("lastFriend = " + lastFriend);

console.log("favFood[] - BEFOR .pop()");
console.log(favFood);
console.log("favFood[] - AFTER .pop()");
let lastFavFood = favFood.pop();
console.log(favFood);
console.log("lastFood = " + lastFavFood);

//lvl_1_6: Arrays shift()
//!!!The shift() method removes the first item of an array, changes the original array and returns the shifted element!!!
console.log("arrPerson[] - BEFOR .shift()");
console.log(arrPerson);
console.log("arrPerson[] - AFTER .shift()");
let firstPerson = arrPerson.shift();
console.log(arrPerson);
console.log("firstarrPerson = " + firstPerson);

console.log("friends[] - BEFOR .shift()");
console.log(friends);
console.log("friends[] - AFTER .shift()");
let firstFriend = friends.shift();
console.log(friends);
console.log("firstFriend = " + firstFriend);

console.log("favFood[] - BEFOR .shift()");
console.log(favFood);
console.log("favFood[] - AFTER .shift()");
let firstFavFood = favFood.shift();
console.log(favFood);
console.log("firstFavFood = " + firstFavFood);

//lvl_1_7: Arrays unshift()
//!!!The unshift() method adds new elements to the beginning of an array, and overwrites the original array!!!
console.log("arrPerson[] - BEFOR .unshift()");
console.log(arrPerson);
console.log("arrPerson[] - AFTER .unshift()");
arrPerson.unshift("Farid")
console.log(arrPerson);

console.log("friends[] - BEFOR .unshift()");
console.log(friends);
console.log("arrPerson[] - AFTER .unshift()");
friends.unshift("Julia", "Lea")
console.log(friends);

console.log("favFood[] - BEFOR .unshift()");
console.log(favFood);
favFood.unshift("Leberkäse", "Spinat")
console.log(favFood);

//lvl_1_9: Arrays slice()
//!!!The slice() method returns selected elements in an array, as a new array, selects from a given start, up to a (not inclusive) given end and does not change the original array!!!
let land = ["Schweden", "Polen", "Italien", "Norwegen", "Griechenland"];
console.log("land[] - BEFOR .slice()");
console.log(land);
console.log(land.slice(1, 3));
console.log("land[] - AFTER .slice()");
console.log(land);

//lvl_1_10: Arrays split()
//!!!The split() method splits a string into an array of substrings, returns a new array and does not change the original array.
//If (" ") is used as separator, the string is split between words!!!
const splitText = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards."
let split1 = splitText.split(",")
console.log(split1);
let split2 = splitText.split(" ")
console.log(split2);
let split3 = splitText.split("")
console.log(split3); 

// lev1_1: forEach()
let getraenkeForEach = ["Coca-Cola","Apfelsaft","Pepsi","Traubensaft","Sprite","Orangensaft","Red Bull Energy Drink","Fanta"];
function myDrinks() {
    getraenkeForEach.sort();
    getraenkeForEach.forEach((elt) => { console.log(elt); document.write(elt, "<br>") });
}
myDrinks();

// lev1_2: map()
let getraenkeMap = ["Coca-Cola", "Apfelsaft", "Pepsi", "Traubensaft", "Sprite", "Orangensaft", "Red Bull Energy Drink", "Fanta"];
const upperDrinks = getraenkeMap.map(elt => elt.toUpperCase());
console.log(upperDrinks);

// lev1_3: map()
let array = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];
const doubleArray = array.map(elt => elt * 2);
console.log(doubleArray.sort());

// lev1_4: map()
let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
const fahrenheitToCel = fahrenheit.map(elt => Math.round((elt - 32) / 1.8));
console.log(fahrenheitToCel);

// lev1_5: map()
let checkNumber = [18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30, 74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78];
const add100 = checkNumber.map((elt) => {
    if ((elt % 3 === 0)) {
        return elt += 100;
    } else {
        return elt
    }
})
console.log(add100);

//lev1_1: for loop Hello World
for (let i = 1; i <= 10; i++) {
    console.log("Hello SuperCoder " + i);
}

//lev1_2: for loop array
const numArr = [];
for (let i = 0; i <= 10; i++) {
    numArr.push(i);
}
console.log(numArr);

//lev1_4: for loop Namen
let names = ["Freddy", "Steffen", "Finn", "Julia", "Farid", "Christian", "Sergio"];
for (let i = 0; i < names.length; i++) {
    let elt = names[i];
    console.log(elt);
}

//lev1_6: for loop Array
const retArray = [];
for (let i = 1; i <= 100; i++) {
    retArray.push(`image_${i}.jpg`);
}
console.log(retArray);

//lev1_7: do while
let num = 0;
do {
    num++;
    console.log(`The number is ${num}`);
} while (num < 5);

//lev1_9: loops_mit_input_word
function wordPrint() {
    let words = ["hallo", "Auto", "Waschmaschine", "Schrank", "Katze", "Beispiel", "Eltern", "Fenster", "Geburtstag", "Himmel", "schwimmen", "Zeitung"];
    const inputfeld = document.querySelector('.inputfeld');
    for (let i = 0; i < words.length; i++) {
        let elt = words[i].length;
        if (elt == inputfeld.value) {
            console.log(words[i]);
        }
    }
};

//lev2_1: for loop Array 
function imageArray() {
    const returnArray = [];
    for (let i = 1; i <= 100; i++) {
        if (i < 10) {
            returnArray.push(`image_00${i}`);
        } else if (i < 100) {
            returnArray.push(`image_0${i}`);
        } else {
            returnArray.push(`image_${i}`);
        }
    }
    console.log(returnArray);
}
imageArray();

// lev2_2: loop with input
function ooo() {
    let looopArr = ["L", "p"];
    let userO = document.querySelector('.userO').value;
    for (let i = 0; i < userO; i++) {
        looopArr.splice(1, 0, "o");
    };
    document.querySelector('.lpO').innerHTML = looopArr.join("");
    document.querySelector('.lpO').style.color = 'green';
    document.querySelector('.lpO').style.fontSize = '1.5em';
}

// COMING SOON lev3_1: for loop string Array
// let text = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil", `

// COMING SOON DOM part I
// COMING SOON DOM part II

// lev1_2: Objects
const person = {
    name: "Manuel Strg_F",
    alter: 24,
    sagDeinAlter: function () {
        console.log(`name: ${this.name}, alter: ${person.alter}`);
        // window.alert(`name: ${this.name}, alter: ${person.alter}`)
    },
}
person.sagDeinAlter();

// lev1_4: Objects Accessing
let unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: ["Gipsy", "Nala", "Dinky"]
    },
    {
        tiertyp: "Hunde",
        names: ["Knöpfchen", "Pinselchen", "Droopy"]
    }
];
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);
for (const elt of unsereHaustiere) {
    console.log(elt.names);
};
unsereHaustiere[1].names.splice(0, 3, "Balu", "Snoopy");
console.log(unsereHaustiere[1].names);

// lev1_5: Objects Accessing
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    },
};
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

//lev1_6: Objects Arrays Accessing
let myMusic = [
    {
        kunstler: "The Beatles",
        title: "Abbey Road",
        release_jahr: 1969,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true,
    },
    {
        kunstler: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_jahr: 1978,
        formate: ["CS", "CD", "LP", "Download"],
        gold: true,
    },
    {
        kunstler: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_jahr: 1971,
        formate: ["CS", "LP", "Download"],
        gold: true,
    },
    {
        kunstler: "Metallica",
        title: "Kill 'Em All und Ride the Lightning",
        release_jahr: 1983,
        formate: ["LP", "CD", "MC", "Download"],
        gold: true,
    },
];
myMusic.push({
    kunstler: "Bob Marley",
    title: "Uprising",
    release_jahr: 1980,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
},);
console.log(myMusic);
console.log(myMusic[0].kunstler);
console.log(myMusic[1].formate[3]);
console.log(myMusic[1].gold);
let year = [];
for (const elt of myMusic) {
    year.push(elt.release_jahr)
}
console.log(year.find(elt => elt === 1971));
console.log(year.find(elt => elt === 1983));
console.log(myMusic[3].formate[2]);
console.log(myMusic[3].title.slice(17, 21));
console.log(myMusic[2].title.slice(13));
console.log(myMusic[1].kunstler.slice(5));

// lev1_7: Objects Arrays Loop Accessing
myMusic.forEach((elt) => {
    console.log(elt.kunstler);
    document.querySelector('.myMusic').innerHTML += elt.kunstler + "<br>";
    console.log(elt.title);
    document.querySelector('.myMusic').innerHTML += elt.title + "<br>";
    console.log(elt.formate);
    document.querySelector('.myMusic').innerHTML += elt.formate + "<br><br>";
});

// lev1_8: Objects Arrays Loop Accessing
let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"],
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"],
    },
];
studentData.map(elt => {
    console.log(elt.name);
    console.log(elt.coop);
    console.log(elt.address.city);
    console.log(elt.emails);
})

// COMING SOON lev2_1: map(), forEach(), filter()
// COMING SOON lev2_2:  Array Object sort() Singers
console.log('%c --------------------------------------------------------------------', 'background: #333; color: #ffd700');


























//course assignments
/* for (let i = 0; i < 5; i++) {
    console.log(i + 1 + " ********");
} */

/* for (let i = 5; i <= 9; i++) {
    console.log(i);
} */

/* for (let i = 50; i >=45; i--) {
    console.log(i);
    
} */

/* stars = "";
for (let i = 0; i < 6; i++) {
    stars += "*";
    console.log(stars);
} */

/* for (let i = 0; i <3; i++) {
    let stars = "";
    for (let i = 0; i <20; i++) {
        stars = stars +"*"
    }
    console.log(i +stars);
}

//console.log("%c text", "color:tomato");

let num = [10,20,30];

for (const i of num) {
    console.log(i*2);
}

console.log(num.forEach((elt) => console.log(elt*2)));

for (let elt = 0; elt < num.length; elt++) {
    console.log(num[elt]*2);
    
} */

