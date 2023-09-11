console.log("----------oops----------");
// 1ans)
class Movie {
    constructor(title,studio,rating){
        this.title = title;
        this.studio = studio;
        this._rating = rating || "PG"
    }
         get rating(){
             return this._rating
         }
         set rating (newRating){
             console.log(this._rating = newRating)
         }

    startMovie () {
         console.log (`
         The title of the movie is ${this.title}
         The studio is ${this.studio}
         Rating : ${this._rating}
         `);
    };
};

const movie1 = new Movie("Casino Royale","Eon Productions",);
movie1.startMovie();
movie1.rating="PG14";
movie1.startMovie();

// 2ans)

class Circle {
    constructor(radius,colour){
        this._radius = radius;
      this._colour = colour;
    }
     double(){
        console.log(this._radius * 2);
    }
    get radius(){
        return this._radius
    }
     set radius(newInput){
       console.log ( this._radius = newInput);
     }
     get colour(){
        return this._colour
     }
     set colour(newColour){
        console.log(this._colour = newColour)
     }
    tostring () {
        console.log(`
            Circle ${this._radius} ${this._colour}
        `);
    }
    getArea (){
        console.log(this._radius * this._radius * 3.14 );
    }
    getCircumference (){
        console.log(2 * 3.14 * this._radius)
    }

}
const myCircle = new Circle(2.0,"blue");
myCircle.tostring();
myCircle.radius = 1;
myCircle.tostring();
myCircle.colour = "red";
myCircle.tostring();

// 3ans
class Name {
    constructor(name,education,age){
        this.name = name;
        this.education = education;
        this.age = age;
    }
      getDeatils (){
        console.log(`
             My name is ${this.name}
             I have finished${this.education}
             My age is ${this.age}YR
        `);
      };
};

const person = new Name("Vinoth","B.E","24")
console.log(person);


// 4ans:

class Uber {
   constructor(currentlocation,destination,price){
        this._currentlocation = currentlocation;
        this._destination = destination;
        this._price = price;
   }
   get currentlocation (){
     return this._currentlocation
   }
   set currentlocation (newLocation){
    console.log( this._currentlocation = newLocation);
   }
   get destination (){
    return this._destination
   }
   set destination (newDestination){
      this._destination = newDestination
   } 
   get price (){
    return this._price
   }
   set price (newPrice){
    this._price = newPrice
   };
   rideCost(){
   console.log(this._destination *this._price);
   }
     startRide (){
        console.log(`
         My current location is ${this._currentlocation}
         Your trip destination will be ${this._destination}km
         Your trip cost is ${this._price}Rs

        `);
     };
};


const uberPrice = new Uber("Mogappair",5,20);
uberPrice.startRide();
uberPrice.destination = 6;
uberPrice.startRide();
uberPrice.rideCost();
uberPrice.startRide();
uberPrice.price = 8;
uberPrice.startRide();
uberPrice.rideCost();






