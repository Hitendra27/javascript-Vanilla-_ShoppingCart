if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready);
} else {
  ready();
}

function ready() {
  var removeCartItemsButtons = document.getElementsByClassName('btn-danger');
  console.log(removeCartItemsButtons);
  for (var i = 0; i < removeCartItemsButtons.length; i++) {
    var button = removeCartItemsButtons[i];
    button.addEventListener('click', removeCartItem);
  }
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}

function updateCartTotal() {
  var cartItemContainer = document.getElementsByClassName('cart-items')[0];
  var cartRows = cartItemContainer.getElementsByClassName('cart-row');
  total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.getElementsByClassName('cart-price')[0];
    var quantityElement = cartRow.getElementsByClassName(
      'cart-quantity-input'
    )[0];
    var price = parseFloat(priceElement.innerText.replace('$', ''));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName('cart-total-price')[0].innerText =
    '$' + total;
}
