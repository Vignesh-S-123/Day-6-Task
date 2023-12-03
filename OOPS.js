/*a. Write a constructor for the class Movie, which takes a String representing 
the title of the movie, a String representing the studio, and a String representing 
the rating as its arguments, and sets the respective class properties to these values.*/

class movie { 

    constructor(title, studio, rating) { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movieDetails = new movie("LEO","Seven Screen Studio", "PG-14");
console.log(movieDetails);

b) /*The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.*/

class movies { 

    constructor(title, studio, rating = "PG") { 

      this.title = title; 

      this.studio =  studio; 

      this.rating = rating; 

    } 
}

const movie1 = new movies("LEO","Seven Screen Studio");
console.log(movie1);


const movie2 = new movies("LEO","Seven Screen Studio", "PG-14");
console.log(movie2);


/*c.Write a method getPG, which takes an array of base type Movie as its argument, and returns a 
new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances.
 The returned array need not be full.*/

 class films {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(input) {
        let out = input.filter(movie => movie.rating === "PG");
        return out;
    }
}

let films1 = new films("Thunivu", "Zee studios", "PG");
let films2 = new films("Varisu", "Sri Venkateswara Creations", "V");
let movie3 = new films("Kantara", "KRG Studios", "PG");
let movie4 = new films("Vikram", "Raj kamal films", "PG-13");
let movie5 = new films("veeram", "Vijaya production", "PG");

let movieArray = [films1, films2, movie3, movie4, movie5];
let pgMovies = Moviee.getPG(movieArray);
console.log(pgMovies); 


/*d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
the studio “Eon Productions”, and the rating “PG­13”*/

class Moviez {
    constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
    }
    }
    
    let casinoRoyale = new Moviez("Casino Royale", "Eon Productions", "PG-13");

    console.log(casinoRoyale);

 /*---------------------------------------------------------------------------------------------------------------*/
//3.Write a “person” class to hold all the details.

class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
    getPersonDetails(){
        return `Name: ${this.firstName} ${this.lastName}
        age: ${this.age}
        department: ${this.department}
        email: ${this.email}
        mobile: ${this.mobile}
        city: ${this.city}`;
    }
}
let person1 = new Person("Vignesh", "S",24, "FSD", "s.vickyvignesh28@gmail.com",6380837238, "Chennai");
console.log(person1.getPersonDetails());
/*-------------------------------------------------------------------------------------------------------*/
 //4.write a class to calculate the uber price

class UberPrice {
    constructor(distance, duration, baseFare, costPerMile, costPerMinute) {
      this.distance = distance;
      this.duration = duration;
      this.baseFare = baseFare;
      this.costPerMile = costPerMile;
      this.costPerMinute = costPerMinute;
    }
  
    totalPrice() {
      return this.baseFare + (this.distance * this.costPerMile) + (this.duration * this.costPerMinute);
    }
  }
  
  const myUber = new UberPrice(10, 20, 80, 24, 5);
  console.log(myUber.totalPrice());
