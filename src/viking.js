// Soldier
class Soldier {
    constructor(health,  strength){
        this.health = health;
        this.strength = strength;
    }
   attack(){
        return this.strength;
    }
    receiveDamage(damage){
     this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;

       
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health <= 0){
            return `${this.name} has died in act of combat`;
        }else if(this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        }
       }

       battleCry(){
        return `Odin Owns You All!`;
       }

}

// Saxon
class Saxon extends Soldier{
    constructor(name, health, strength) {
        super(name, health, strength);
  
    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health <= 0){
            return `A Saxon has died in combat`;
        }else if(this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        }
       }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    
    
    addViking(viking){
         this.vikingArmy.push(viking);
    }

    addSaxon(saxon){
        this.saxonArmy.push(saxon);
   }

   vikingAttack() {
    let i = Math.floor(Math.random() * this.saxonArmy.length);
    let j = Math.floor(Math.random() * this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[i];
    let randomViking = this.vikingArmy[j];
    let damage = randomSaxon.receiveDamage(randomViking.strength);
   
    if(randomSaxon.health <= 0 ){
        this.saxonArmy.splice(i, 1);
    }

   return damage;
   }

   saxonAttack(){

    let i = Math.floor(Math.random() * this.saxonArmy.length);
    let j = Math.floor(Math.random() * this.vikingArmy.length);

    let randomSaxon = this.saxonArmy[i];
    let randomViking = this.vikingArmy[j];
    let damage = randomViking.receiveDamage(randomSaxon.strength);
    if(randomViking.health <= 0){
        this.vikingArmy.splice(j, 1);
    }


   return damage;
   }

   showStatus(){
    if(this.saxonArmy.length === 0){
        return `Vikings have won the war of the century!`;
    }else if(this.vikingArmy.length === 0){
        return `Saxons have fought for their lives and survived another day...`;
    }else{
        return `Vikings and Saxons are still in the thick of battle.`
    }
   }
}


