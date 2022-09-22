function longestWord(strings){var longest = strings[0];
    for (i = 1; i < strings.length; i++) // We used < because counting length begins from 0
        {if (strings[i].length > longest.length){longest = strings[i]}}
        return longest;}
nameStrings = [ 'ado','bala', 'muhammad', 'umaru'];
longestWord(nameStrings) // Calling this function returns the longest name
//
//A major lapse of the above function is strings of = length
// First string with eual length is returned
function shortestWord(strings){var shortest = strings[0];
    for (i = 1; i < strings.length; i++) // We used < because counting length begins from 0
        {if (strings[i].length < shortest.length){shortest = strings[i]}} 
        return shortest;}
nameStrings = [ 'ado', 'bala', 'muhammad', 'umaru'];
shortestWord(nameStrings) // Calling this function returns the longest name



function multipleLongest(strings) {for (j = 0; j < strings.length; j++)
    {if (strings[j].length == longest.length) {newList.push(strings[j])}}}

// THIS CODE CHECK A LIST OF STRINGS AND RETURN A NEW LIST CONTAINING THE LONGEST WORDS
    function longestWord(strings){var longest = strings[0];
        for (i = 1; i < strings.length; i++) // We used < because counting length begins from 0
            {if (strings[i].length > longest.length){longest = strings[i]}}
            {var newList = [];
                for (j = 1; j < strings.length; j++)
                {if (strings[j].length == longest.length) {newList.push(strings[j])}}}
            return newList;}

//
var asd =[]; function longestWord(strings){var longest = strings[0];
    for (i = 1; i < strings.length; i++) // We used < because counting length begins from 0
        {if (strings[i].length > longest.length){longest = strings[i]}}
        {var newList = [];
            for (j = 1; j < strings.length; j++)
            {if (strings[j].length == longest.length) {newList.push(strings[j])}}}
      return asd = newList + ' is the list of names with longest strings';}