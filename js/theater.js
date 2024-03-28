const genAdd = 20;
    const discPrice = 10;
    const matDisc = 3;

    
    function buyTicket() {
      let age = prompt('What is your age? ');
      let price = getBaseTicketCost(age);
      const isMat = prompt('Are you attending a matinee show? ').toLowerCase();
      price = getIsMatShow(isMat, price)
      alert(`Your final price is ${price}`);
    }

    function getBaseTicketCost(age) {
      if ((age <= 12) || (age >= 65)) {
        return discPrice;
      }
      return genAdd;
    }

    function getIsMatShow(isMat, price) {
      if (isMat === 'yes' || isMat === 'y') {
        return price -= matDisc;
      }
      return price;
    }