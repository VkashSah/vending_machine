let coin = 100;

let coins = {};

coins.checkCoin = (amount) => {
  if (coin >= amount) {
    return true;
  } else return false;
};

coins.coinIncrement = (netAmount) => {
  coin = coin + netAmount;
  return coin;
};

coins.calculateChange = (productPrice, tender, quantity) => {
  return tender - productPrice * quantity;
};

coins.compareReturnPriceAndQuantity = async (price, quantity) => {
  let returnAmount = price * quantity;
  if (returnAmount && coin >= returnAmount) {
    return true;
  } else {
    return false;
  }
};

coins.coinDecrement = (netAmount) => {
  coin = coin - netAmount;
  return coin;
};

module.exports = { coins, coin };
