/**
  Last week's work, the answer I came up with
 */
function calculate() {
    var favoriteThing = 'tortilla chips';
    var age = 34;
    var oldAge = 85;
    var perDay = 35;

    var days = (oldAge - age) * 356;
    var total = perDay * days;

    if (total > 40000) {
        alert("You will need " + total + ' ' + favoriteThing + " to last you until the ripe old age of " + oldAge + ". Wow! That's a lot!");
    } else {
        alert("You will need " + total + ' ' + favoriteThing + " to last you until the ripe old age of " + oldAge + ". You seem pretty reasonable");
    }
}

/**
  Exercise 1
  -In the html file, make a new link with an onclick value for a function called favoriteThings()

  -Here, create a new function called favoriteThings().
  -In the function,
      *create an array of your favorite things
      *then, loop through the results
  -Post the results in a console or alert that will say: "My favorite things are XX, YY, ZZ'

  BONUS
  -Can you add an "and" before your last one so it says, "My favorite things are XX, YY, and ZZ"
 */



 /**
  Exercise 2
  -Add another link that calls the function myFriends() onclick

  -Add a new function to the javascript files myFriends
  -In the function, create an array of friends objects, with:
     *their names
     *hair colors
  -Use a for loop to go through each friend and describe them
  -Alert the results

  BONUS
  -Make a separate functions that describe the friends
*/


/**
  Exercise 3
  Modify your existing functions above to add new elements to the screen instead of fire an alert.

  Be creative! There's no "right" answer here as long as you're displaying the information.

  // Find elements, get or set attributes
  var listItems = document.getElementsByTagName('li');
  var img = document.getElementById('mainpicture');
  img.getAttribute('src');
  img.setAttribute('src', 'http://girldevelopit.com/assets/pink-logo.png');

  // Add html to the page
  document.body.innerHTML = '<p>I changed the whole page!</p>';
  document.body.innerHTML += "...just adding this bit at the end of the page.";

  // Create a new element and add it to the page
  var newImg = document.createElement('img');
  newImg.src = 'http://girldevelopit.com/assets/pink-logo.png';
  document.body.appendChild(newImg);
  */
