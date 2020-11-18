import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
    constructor() { }
    // if (HomepageComponent.getUser) {
      
    // }

    ngOnInit(): void {
      this.ready()
    }

    ready(): void  {
      var removeCartItemButtons = document.getElementsByClassName('remove-cart-items')
      for (var i = 0; i < removeCartItemButtons.length; i++) {
          var button = removeCartItemButtons[i]
          button.addEventListener('click', this.removeCartItem)
      }

      var quantityInputs = document.getElementsByClassName('cart-quantity-input')
      for (var i = 0; i < quantityInputs.length; i++) {
          var input = quantityInputs[i]
          input.addEventListener('change', this.quantityChanged)
      }

      var addToCartButtons = document.getElementsByClassName('flavor-item-button')
      for (var i = 0; i < addToCartButtons.length; i++) {
          var button = addToCartButtons[i]
          button.addEventListener('click', this.addToCartClicked)
          console.log("Added an item")
      }

      document.getElementsByClassName('btn-purchase')[0].addEventListener('click', this.purchaseClicked)
    }

    /*function*/ purchaseClicked(): void  {
      alert('Thank you for your purchase')
      var cartItems = document.getElementsByClassName('cart-items')[0]
      while (cartItems.hasChildNodes()) {
          cartItems.removeChild(cartItems.firstChild)
      }
      this.updateCartTotal();
    }

    /*function*/ removeCartItem(event): void  {
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      this.updateCartTotal()
    }

    /*function*/ quantityChanged(event): void  {
      var input = event.target
      if (isNaN(input.value) || input.value <= 0) {
          input.value = 1
      }
      this.updateCartTotal()
    }

    /*function*/ addToCartClicked(event): void  {
      var button = event.target;
      var shopItem = button.parentElement.parentElement;
      var title = shopItem.getElementsByClassName('flavor-item-title')[0].innerHTML;
      var price = shopItem.getElementsByClassName('flavor-item-price')[0].innerHTML;
      var imageSrc = shopItem.getElementsByClassName('flavor-item-image')[0].src;
      this.addItemToCart(title, price);
      this.updateCartTotal();
    }

      addItemToCart(title: string, price: any): void {
      var cartRow = document.createElement('div')
      cartRow.classList.add('cart-row')
      var cartItems = document.getElementsByClassName('cart-items')[0];
      var cartItemNames = cartItems.getElementsByClassName('cart-item-title') 
      for (var i = 0; i < cartItemNames.length; i++) {
          if (cartItemNames[i].innerHTML == title) {
              alert('This item is already added to the cart')
              return
          }
      }
      //  <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
      var cartRowContents = ` 
          <div class="cart-item cart-column">          
              <span class="cart-item-title">${title}</span>
          </div>
          <span class="cart-price cart-column">${price}</span>
          <div class="cart-quantity cart-column">
              <input class="cart-quantity-input" type="number" value="1">
              <button class="btn btn-danger" type="button">REMOVE</button>
          </div>`
      cartRow.innerHTML = cartRowContents
      cartItems.append(cartRow)
      cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', this.removeCartItem)
      cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', this.quantityChanged)
    }

    updateCartTotal(): void {
      var cartItemContainer = document.getElementsByClassName('cart-items')[0]
      var cartRows = cartItemContainer.getElementsByClassName('cart-row')
      var total = 0
      for (var i = 0; i < cartRows.length; i++) {
          var cartRow = cartRows[i]
          var priceElement = cartRow.getElementsByClassName('cart-price')[0];
          var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
          var price = parseFloat(priceElement.innerHTML.replace('$', ''))
          var quantity = quantityElement.innerHTML
          total = total + (price * parseInt(quantity))
      }
      total = Math.round(total * 100) / 100
      document.getElementsByClassName('cart-total-price')[0].innerHTML = '$' + total
    }
}
