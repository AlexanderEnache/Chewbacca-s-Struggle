
"use strict"

class AddressBook{
	
	constructor(){
		
		this.Contacts = [];
		
	}
	
	deleteAt(idx){
		
		this.Contacts.splice(idx, 1);
		
	}
	
	add(info){
		
		this.Contacts.push(info);
		
	}
	
	deleteByName(name){
		
		for(let i = 0; i < this.Contacts.length; i++){
			
			if( this.Contacts[i].name == name ){
				
				this.deleteAt(i);
				
			}
			
		}
		
	}
	
findHighest(){
	 
	let highestScore = 0;
	let lowestScore  = this.Contacts[0].chess + this.Contacts[0].fly - this.Contacts[0].fear;
	let currentFriend = 0;
	let highestName;
	let lowestName;
	
	for(let i = 0; i < this.Contacts.length; i++){
		
		currentFriend = this.Contacts[i].chess + this.Contacts[i].fly - this.Contacts[i].fear;
		
		if( currentFriend > highestScore ){
			
			highestScore = currentFriend;
			highestName = this.Contacts[i].name;
			
		}
		if( currentFriend < lowestScore ){
			
			highestScore = currentFriend;
			lowestName = this.Contacts[i].name;
			
		}
		
	}
	console.log(highestName + " is your best friend " + lowestName + " is your least favorite");
}
	
	print(){
		
		for(let i = 0; i < this.Contacts.length; i++){
			
			console.log(this.Contacts[i].name + "	" +this.Contacts[i].chess + "	" +this.Contacts[i].fly + "	" +this.Contacts[i].fear);
			
		}
		
	}
	
}

class Friend{
	
	constructor(name, fly, chess, fear){
		
		this.name = name;
		this.fly = fly;
		this.chess = chess;
		this.fear = fear;
		
	}
	
}

let book = new AddressBook();

book.add(new Friend("A", 34, 23, 23));
book.add(new Friend("B", 34, 23, 25));
book.add(new Friend("C", 34, 23, 23));
book.add(new Friend("D", 34, 23, 23));
book.add(new Friend("E", 34, 23, 22));
book.add(new Friend("F", 34, 23, 23));
book.add(new Friend("G", 34, 23, 27));

while(true){
	
	let choice = prompt("Yould you like to add, print, delete, deleteByName, findHighest or quit");
	
	let name;
	let fly;
	let chess;
	let fear;
	
	if(choice == "add"){
		
		name = prompt("What is the friends name?");
		fly = prompt("What is their chess level?");
		chess = prompt("What is their flying level?");
		fear = prompt("How big a pussies are they?");
		
		book.add(new Friend(name, fly, chess, fear));
		
	}else if(choice.toLowerCase() == "print"){
		
		book.print();
		
	}else if(choice.toLowerCase() == "delete"){
		
		book.deleteAt(prompt("which friend would you like to delete (index) ??"));
		
	}else if(choice.toLowerCase() == "deletebyname"){
		
		book.deleteByName(prompt("what is the name of the friend you would you like to delete??"));
		
	}else if(choice.toLowerCase() == "findhighest"){
		
		book.findHighest();
		
	}else if(choice.toLowerCase() == "quit"){
		
		break;
		
	}else{
		
		alert("You must have mispealt something. Try again");
		
	}

}