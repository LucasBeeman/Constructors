function dog(ownersName, name, color)
{
    this.ownersName = ownersName;
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}

let corgi = new dog("Joe", "pizzalord", "borwn")

let germanShepered = new dog("Bob","squingily", "black");

let paragraph1 = corgi.ownersName + " has a " + corgi.color + " dog named " + corgi.name  + ".";
let paragraph2 = germanShepered.ownersName + " has a " + germanShepered.color + " dog named " + germanShepered.name  + ".";

console.log(paragraph1);
console.log(paragraph2);

document.getElementById("head").innerHTML = paragraph1;
document.getElementById("head2").innerHTML = paragraph2;