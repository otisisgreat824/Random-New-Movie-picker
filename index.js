function New_Movie_Picker() {
console.log("Random_Movie");

var Random_Number = Math.round(Math.random() *9 +1);
console.log(Random_Number);
var image = "";

if (Random_Number ==1)  {
image="Buzz Lightyear.jpeg";
 };


if (Random_Number ==2)  {
image="Doctor Strange Multiverse of Madness.jpg";
}; 

if (Random_Number ==3)  {
image="Hustle.jpg";
};

 if (Random_Number ==4)  {
image="Jurrasic World Dominion.jpg";
};


if (Random_Number ==5)  {
image="Minions the rise of GRU.jpg";
};

if (Random_Number ==6)  {
image="Resident Evil.webp";
};

if (Random_Number ==7)  {
image="Rise.Jpg";
};

if (Random_Number ==8)  {
image="Sea Beast.jpg";
};

if (Random_Number ==9)  {
image="The Black Phone.jpg";
};

if (Random_Number ==10)  {
image="Thor Love and Thunder";
};

if (Random_Number ==10)  {
    image="Top Gun Maverick.jpg";
};
document.querySelector("img").src = image;

};