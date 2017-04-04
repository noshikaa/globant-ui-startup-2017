class Movie {
    constructor(title, year, duration) {
        this.title = title;
        this.year = year;
        this.duration = duration;
    }
    play() {
        console.log("You play the Movie")
    }
    pause() {
        console.log("You Pause the Movie")
    }
    resume() {
        console.log("You resume the Movie")
    }
    tostring() {
        let str = "\nThe movie is: " + this.title + "\nThe year is: " + this.year + "\nThe duration is: " + this.duration+" minutes";
        return str
    }

}
function dothings() {
    let movie1 = new Movie("Toy Story", 1992, 180);
    let movie2 = new Movie("The Shining", 1980, 120);
    let movie3 = new Movie("Harry Potter", 2004, 140);
    movie1.play();
    movie2.pause();
    movie3.resume();
    console.log(movie1.tostring());
    console.log(movie2.tostring());
    console.log(movie3.tostring());
}
