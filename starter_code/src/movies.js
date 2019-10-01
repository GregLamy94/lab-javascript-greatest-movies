/* eslint no-restricted-globals: 'off' */

// import {movies} from `/data.js` ; 


// Iteration 1: All rates average - Get the average of all rates with 2 decimals 


function ratesAverage (tabMovies) {
    var totalNotes = tabMovies.reduce(function(sum, note){
        return sum + note.rate;
      },0); 
      return Math.round((totalNotes/tabMovies.length)*100)/100 ; 
    }


 
// Iteration 2: Drama movies - Get the average of Drama Movies

function dramaMoviesRate (tabMovies) {
    var dramaMovies = tabMovies.filter(function(movie) {
        return movie.genre.includes("Drama"); 
    });
    if (!dramaMovies.length) {
        return 0;
    }
    return ratesAverage(dramaMovies) ; 

}

// Iteration 3: Ordering by duration - Order by time duration, ascending (in growing order)
function calculateDuration (movie) {
    var hmin=Number(movie.duration.split(" ")[0].split("h")[0])*60 ; 
    var min=Number(movie.duration.split(" ")[1].split("m")[0]) ; 
    return hmin+min ; 
}

function compareMovies (first, second) {
   if (calculateDuration(first) < calculateDuration(second)) {
     return -1  ; 
   } else if (calculateDuration(first) > calculateDuration(second)) {
    return 1 ; 
   } else if (first.title < second.title) {
       return -1 ; 
   } else if (first.title > second.title) {
   return 1 ; 
   }
   else return 0 ; 
} 

function orderByDuration(tabMovies) {
    return tabMovies.splice().sort(compareMovies); 
}


// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

function howManyMovies(tabMovies) {
    return tabMovies.filter(function(movie) {
         return movie.genre.includes("Drama") && movie.director==="Steven Spielberg" ; 
}).length} 

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(tabMovies){
    var tableauTrie = tabMovies.splice().sort(function(a,b) {
        if (first.title < second.title) {
            return -1 ; 
        } else if (first.title > second.title) {
        return 1 ;  
        } else return 0 ; 
    });
    if (tableauTrie.length <= 20 ) {
        return tableauTrie.map(function(movie){
            return movie.title ; 
        }); 
    }
    else if (tableauTrie.length > 20 ) {
        return tableauTrie.map(function(movie){
            return movie.title ; 
        }).splice(0,20); 
    }
}


// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
