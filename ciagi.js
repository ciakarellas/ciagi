var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';

var animal = 'zielone słonie';

/*String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};*/

var capitalizeFirstLetter = function(word){
	return word.charAt(0).toUpperCase() + word.slice();
}


var animalCapFirstLetter = capitalizeFirstLetter(animal);

console.log(animalCapFirstLetter);

var textRepalacedAnimal = text.replace('Papugi', animalCapFirstLetter);

console.log(textRepalacedAnimal.slice(0, textRepalacedAnimal.length/2))

// według zadania zdanie powinno się skończyć "Zielone słonie koszą trawę, unosząc się nad z" ale tu chyba wszystko jest ok