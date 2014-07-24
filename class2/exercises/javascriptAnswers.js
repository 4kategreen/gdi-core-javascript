/**
 * Last week's work, the answer I came up with
 */
function calculate() {
    var favoriteThing = 'tortilla chips';
    var age = 34;
    var oldAge = 85;
    var perDay = 35;

    var days = (oldAge - age) * 356;
    var total = perDay * days;

    if (total > 40000) {
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    } else {
        alert("You will need " + total + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
    }
}

// Exercise 1
function favoriteThings() {
    var favoriteThings = ['Dogs', 'Running', 'Gardens full of food', 'Tortilla Chips', 'Hiking'];
    var result = 'My favorite things are: ';

    for (var i = 0; i<favoriteThings.length; i++){
        if (i < favoriteThings.length - 1){
            result += favoriteThings[i] + ', ';
        }else{
            result += "and " + favoriteThings[i] + '.';
        }
    }
    alert(result);
}

// Exercise 2
function myFriends() {
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var results = "My friends: ";

    for(var i = 0; i < friends.length; i++){
        results += describeFriend(friends[i]);
    }
    alert(results);
}

// Exercise 2 Bonus
function describeFriend(friend) {
    return "My friend " + friend.name + " has " + friend.hair + " hair. ";
}

/*
    HTML Additions (exercise 1 and 2, respectively)

    <a href="#" onclick="favoriteThings()">See my favorite things</a><br>
    <a href="#" onclick="myFriends()">My friends</a>

    Exercise 3 Model
*/
function myFriends() {
    var friends = [
        {name: 'Santa Claus',
        hair: 'red'},
        {name: 'Easter Bunny',
        hair: 'brown'},
        {name: 'Tooth Fairy',
        hair: 'blue'}
    ];
    var results = "My friends: ";

    for(var i = 0; i < friends.length; i++){
        results += describeFriend(friends[i]);
    }

    //alert(results);
    
    var friends = document.createElement('h3');
    friends.text = results;
    document.body.appendChild(friends);
}
