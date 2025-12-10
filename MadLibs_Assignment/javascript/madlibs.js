console.log("whats good");

let output;

function write() {


    let zoo = document.getElementById("zoo").value;
    let button = document.getElementById("button").value;

    console.log(zoo);

    let animal = document.getElementById("animal").value;

    let colour = document.getElementById("colour").value;

    let size = document.getElementById("size").value;

    let alt = document.getElementById("alt").value;

    let size2 = document.getElementById("size2").value;

    let fav = document.getElementById("fav").value;

    let explain = document.getElementById("explain").value;

    let alt2 = document.getElementById("alt2").value;

    document.getElementById("output").innerHTML += "Today you visited the " + zoo + " and you saw a " + animal + ". It was the colour " + colour + " and the animal was also very " + size + ". You also saw a " + alt + ". The " + alt + " was " + size2 + " compared to the " + animal + ". If you had to choose between the two, your favorite would be the " + fav + " because: " + explain + ". Finally, on the way out you also saw a " + alt2 + "."; 


    console.log(animal);


}





















