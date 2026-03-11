/*
ASSIGNMENT 4:
-------------
Movie Streaming Platform

You are working on a movie recommendation system.

Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];


Tasks:
    1. filter() only "Sci-Fi" movies
    2. map() to return:
            "Inception (8.8)"

    3. reduce() to find average movie rating
    4. find() movie "Joker"
    5. findIndex() of "Avengers"

*/

const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// 1. filter() Sci-Fi movies
let sciFiMovies = movies.filter((movie) => movie.genre === "Sci-Fi")
console.log("Sci-Fi Movies:\n", sciFiMovies)

// 2. map() return "title (rating)"
let movieList = movies.map((movie) => `${movie.title} (${movie.rating})`)
console.log("Movie List:\n", movieList)

// 3. reduce() average rating
let totalRating = movies.reduce((acc,movie)=> acc + movie.rating,0)
let avgRating = totalRating / movies.length
console.log("Average Rating:", avgRating)

// 4. find() movie Joker
let jokerMovie = movies.find((movie) => movie.title === "Joker")
console.log("Joker Movie:", jokerMovie)

// 5. findIndex() Avengers
let avengersIndex = movies.findIndex((movie) => movie.title === "Avengers")
console.log("Index of Avengers:", avengersIndex)