// make an object for your laptop
// key : valaue 
let laptopObject = {
    brand : "HP",
    processor : 'Intel Core i5',
    ram : '8gb',
    colour : "black",
    beii : 1000000,
    used : true,
    currency : "USH",
    getPrice : function(){
        return `${this.currency} ${this.beii}`
    }
    
};
console.log(laptopObject)

//accessing the price using DOT NOTATION
console.log(laptopObject.beii)

//accessing the currency and price
console.log(laptopObject.currency + " " + laptopObject.beii)

//access the price to change
laptopObject.beii = 800000
console.log(laptopObject)

//updating the name of the laptop
laptopObject.brand = "Mac"
console.log(laptopObject) 

//function price
console.log(laptopObject.getPrice())



