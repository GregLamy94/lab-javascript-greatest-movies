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




// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct


// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
