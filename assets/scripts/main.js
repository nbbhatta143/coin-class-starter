let body = document.querySelector("body");
const coinWithoutClass = {
  state: 0,

  flip: function () {
    return (this.state = Math.floor(Math.random() * 2));
  },

  toString: function () {
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  },

  toHTML: function () {
    let image = document.createElement("img");

    if (this.state === 0) {
      image.src = "./assets/images/heads.jpg";
      image.alt = "Heads";
    } else {
      image.src = "./assets/images/tails.jpg";
      image.alt = "Tails";
    }

    return image;
  },
};

console.group("coinWithoutClass");
console.log(coinWithoutClass);
console.groupEnd();

debugger;

const coin1 = new Coin(coinWithoutClass.flip());
const coin2 = new Coin(coinWithoutClass.flip());
const coin3 = new Coin(coinWithoutClass.flip());
const coin4 = new Coin(coinWithoutClass.flip());
console.log(coin1.state, coin2.state, coin3.state, coin4.state);
