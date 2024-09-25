const desserts = [
  {
    image: {
      thumbnail: './assets/images/image-waffle-thumbnail.jpg',
      mobile: './assets/images/image-waffle-mobile.jpg',
      tablet: './assets/images/image-waffle-tablet.jpg',
      desktop: './assets/images/image-waffle-desktop.jpg',
    },
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
  },
  {
    image: {
      thumbnail: './assets/images/image-creme-brulee-thumbnail.jpg',
      mobile: './assets/images/image-creme-brulee-mobile.jpg',
      tablet: './assets/images/image-creme-brulee-tablet.jpg',
      desktop: './assets/images/image-creme-brulee-desktop.jpg',
    },
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
  },
  {
    image: {
      thumbnail: './assets/images/image-macaron-thumbnail.jpg',
      mobile: './assets/images/image-macaron-mobile.jpg',
      tablet: './assets/images/image-macaron-tablet.jpg',
      desktop: './assets/images/image-macaron-desktop.jpg',
    },
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
  },
  {
    image: {
      thumbnail: './assets/images/image-tiramisu-thumbnail.jpg',
      mobile: './assets/images/image-tiramisu-mobile.jpg',
      tablet: './assets/images/image-tiramisu-tablet.jpg',
      desktop: './assets/images/image-tiramisu-desktop.jpg',
    },
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
  },
  {
    image: {
      thumbnail: './assets/images/image-baklava-thumbnail.jpg',
      mobile: './assets/images/image-baklava-mobile.jpg',
      tablet: './assets/images/image-baklava-tablet.jpg',
      desktop: './assets/images/image-baklava-desktop.jpg',
    },
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
  },
  {
    image: {
      thumbnail: './assets/images/image-meringue-thumbnail.jpg',
      mobile: './assets/images/image-meringue-mobile.jpg',
      tablet: './assets/images/image-meringue-tablet.jpg',
      desktop: './assets/images/image-meringue-desktop.jpg',
    },
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
  },
  {
    image: {
      thumbnail: './assets/images/image-cake-thumbnail.jpg',
      mobile: './assets/images/image-cake-mobile.jpg',
      tablet: './assets/images/image-cake-tablet.jpg',
      desktop: './assets/images/image-cake-desktop.jpg',
    },
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
  },
  {
    image: {
      thumbnail: './assets/images/image-brownie-thumbnail.jpg',
      mobile: './assets/images/image-brownie-mobile.jpg',
      tablet: './assets/images/image-brownie-tablet.jpg',
      desktop: './assets/images/image-brownie-desktop.jpg',
    },
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 4.5,
  },
  {
    image: {
      thumbnail: './assets/images/image-panna-cotta-thumbnail.jpg',
      mobile: './assets/images/image-panna-cotta-mobile.jpg',
      tablet: './assets/images/image-panna-cotta-tablet.jpg',
      desktop: './assets/images/image-panna-cotta-desktop.jpg',
    },
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
  },
];

// Create Elements Functions
function createAnElement([elementName, classes, id, innerHtml]) {
  const element = document.createElement(elementName);
  if (classes !== '') {
    element.classList = classes;
  }
  if (id !== '') {
    element.id = id;
  }
  if (innerHtml !== '') {
    element.innerHTML = innerHtml;
  }
  return element;
}

function createImg([index, classes]) {
  const img = document.createElement('img');
  if (classes !== '') {
    img.classList = classes;
  }
  img.setAttribute('src', desserts[index].image.mobile);

  // if (window.innerWidth < 375) {
  //   img.setAttribute('src', desserts[index].image.mobile);
  // } else if (window.innerWidth > 375 && window.innerWidth < 745) {
  //   img.setAttribute('src', desserts[index].image.tablet);
  // } else {
  //   img.setAttribute('src', desserts[index].image.desktop);
  // }

  // window.addEventListener('resize', () => {
  //   if (window.innerWidth < 375) {
  //     img.setAttribute('src', desserts[index].image.mobile);
  //   } else if (window.innerWidth > 375 && window.innerWidth < 745) {
  //     img.setAttribute('src', desserts[index].image.tablet);
  //   } else {
  //     img.setAttribute('src', desserts[index].image.desktop);
  //   }
  // });
  return img;
}

// creating desserts cart
const dessertsContainer = document.getElementById('desserts');
let dessertWord;

for (let index = 0; index < desserts.length; index++) {
  dessertWord = desserts[index].name.replace(/\s+/g, '');

  const dessertsCard = createAnElement([
    'div',
    'desserts__card',
    dessertWord,
    '',
  ]);
  const imageContainer = createAnElement([
    'div',
    'card__image__container',
    '',
    '',
  ]);
  const img = createImg([index, '']);

  const h5 = createAnElement(['h5', '', '', 'Add to Cart']);
  const btn = createAnElement([
    'button',
    'rose-900 cart__info',
    'addButton',
    '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>',
  ]);

  const cardCategory = createAnElement([
    'div',
    'card__category rose-400',
    dessertWord,
    desserts[index].category,
  ]);

  const cardName = createAnElement([
    'h4',
    'card__name rose-900 mt-2',
    '',
    desserts[index].name,
  ]);

  const cardPrice = createAnElement([
    'div',
    'card__price red mt-2',
    '',
    `$<span>${desserts[index].price}</span>`,
  ]);

  dessertsContainer.appendChild(dessertsCard);
  dessertsCard.appendChild(imageContainer);
  imageContainer.appendChild(img);
  imageContainer.appendChild(btn);
  btn.appendChild(h5);
  dessertsCard.appendChild(cardCategory);
  dessertsCard.appendChild(cardName);
  dessertsCard.appendChild(cardPrice);
}

let buttons = document.querySelectorAll('#addButton');
let cartCount = 1;

buttons.forEach((button, index) =>
  button.addEventListener('click', () => {
    button.previousElementSibling.classList = 'card__image';
    const p = button.parentElement;
    const i = p.parentElement;

    const c = i.children;
    const cartCount = document.getElementById('cartCount');
    let countAdd = Number(cartCount.innerText) + 1;
    cartCount.innerText = countAdd;

    const emptyDiv = document.getElementById('cart__icon__empty');
    let cartContainer = createAnElement([
      'div',
      'cart__container',
      'cart__container',
      '',
    ]);

    // Updating the cart if the container has empty info
    if (emptyDiv) {
      emptyDiv.replaceWith(cartContainer);
      const cart = document.getElementById('cart');

      const cartTotalDiv = createAnElement(['div', 'cart__total', '', '']);
      const cartText = createAnElement([
        'p',
        'cart__total rose-500',
        '',
        'Order Total',
      ]);

      const cartTotal = createAnElement([
        'h2',
        'cart__total rose-900 fw-900',
        'cartTotal',
        c[3].innerHTML,
      ]);

      const paragraph = createAnElement([
        'p',
        'rose-500 cart__text nowrap',
        '',
        '<svg xmlns="http://www.w3.org/2000/svg"width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#1EA575" d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"/><path fill="#1EA575" d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"/></svg>This is a<span class="rose-900 fw-600"> carbon-neutral </span> delivery',
      ]);

      const confirmOrder = createAnElement([
        'button',
        'btn',
        'confirmOrder',
        'Confirm Order',
      ]);

      // Organising elements
      cartTotalDiv.appendChild(cartText);
      cartTotalDiv.appendChild(cartTotal);
      cart.appendChild(cartTotalDiv);
      cart.appendChild(paragraph);
      cart.appendChild(confirmOrder);

      // const confirmOrder = document.getElementById('confirmOrder');
      confirmOrder.addEventListener('click', () => {
        const orderConfirmed = document.querySelectorAll('#cart__item');
        const orderConfirmedCartTotal = document.getElementById('cartTotal');
        const orderConfirmedCard = createAnElement([
          'div',
          'orderConfirmedCard',
          '',
          '<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 32.121L13.5 24.6195L15.6195 22.5L21 27.879L32.3775 16.5L34.5 18.6225L21 32.121Z" fill="#1EA575"/><path d="M24 3C19.8466 3 15.7865 4.23163 12.333 6.53914C8.8796 8.84665 6.18798 12.1264 4.59854 15.9636C3.0091 19.8009 2.59323 24.0233 3.40352 28.0969C4.21381 32.1705 6.21386 35.9123 9.15077 38.8492C12.0877 41.7861 15.8295 43.7862 19.9031 44.5965C23.9767 45.4068 28.1991 44.9909 32.0364 43.4015C35.8736 41.812 39.1534 39.1204 41.4609 35.667C43.7684 32.2135 45 28.1534 45 24C45 18.4305 42.7875 13.089 38.8493 9.15076C34.911 5.21249 29.5696 3 24 3ZM24 42C20.4399 42 16.9598 40.9443 13.9997 38.9665C11.0397 36.9886 8.73256 34.1774 7.37018 30.8883C6.0078 27.5992 5.65134 23.98 6.34587 20.4884C7.04041 16.9967 8.75474 13.7894 11.2721 11.2721C13.7894 8.75473 16.9967 7.0404 20.4884 6.34587C23.98 5.65133 27.5992 6.00779 30.8883 7.37017C34.1774 8.73255 36.9886 11.0397 38.9665 13.9997C40.9443 16.9598 42 20.4399 42 24C42 28.7739 40.1036 33.3523 36.7279 36.7279C33.3523 40.1036 28.7739 42 24 42Z" fill="#1EA575"/></svg>',
        ]);
        const OrderConfirmed_h1 = createAnElement([
          'h1',
          'rose-900 OrderConfirmed_h1 fw-800 mt-3',
          '',
          'Order Confirmed',
        ]);
        const OrderConfirmed_p = createAnElement([
          'p',
          'rose-500 OrderConfirmed_p mt-2',
          '',
          'We hope you enjoy your food!',
        ]);

        const OrderConfirmedListContainer = createAnElement([
          'div',
          'OrderConfirmedListContainer mt-6',
          '',
          '',
        ]);
        const OrderConfirmedCartTextAndTotalContainer = createAnElement([
          'div',
          'cart__total rose-500',
          '',
          '',
        ]);

        const OrderConfirmedCartText = createAnElement([
          'p',
          'cart__total rose-500',
          '',
          'Order Total',
        ]);

        const OrderConfirmedCartTotal = createAnElement([
          'h2',
          'cart__total rose-900 fw-900',
          'cartTotal',
          orderConfirmedCartTotal.innerHTML,
        ]);

        const startNewOrder = createAnElement([
          'button',
          'btn',
          'confirmOrder',
          'Start New Order',
        ]);

        startNewOrder.addEventListener('click', () => location.reload());

        orderConfirmed.forEach((order) => {
          let dessertIndex;

          desserts.forEach((dessert, index) => {
            console.log(dessert.name == order.children[0].innerHTML);
            if (dessert.name === order.children[0].innerHTML) {
              dessertIndex = index;
            }
          });

          const OrderConfirmedItem = createAnElement([
            'div',
            'OrderConfirmedItem',
            '',
            '',
          ]);
          const OrderConfirmedItemDetails = createAnElement([
            'div',
            'OrderConfirmedItemDetails',
            '',
            '',
          ]);
          const OrderConfirmedImg = createImg([
            dessertIndex,
            'OrderConfirmedImg mr-2',
          ]);

          const OrderConfirmedItemName = createAnElement([
            'h4',
            'OrderConfirmedItemName mb-2 rose-900',
            '',
            order.children[0].innerHTML,
          ]);
          const OrderConfirmedNameCountPriceTotalContainer = createAnElement([
            'div',
            'OrderConfirmedNameCountPriceTotalContainer',
            '',
            '',
          ]);
          const OrderConfirmedCountPriceTotalContainer = createAnElement([
            'div',
            'OrderConfirmedCountPriceTotalContainer',
            '',
            '',
          ]);
          const OrderConfirmedCount = createAnElement([
            'h4',
            'OrderConfirmedCount red mr-2',
            '',
            order.children[1].children[0].children[0].innerHTML,
          ]);
          const OrderConfirmedCountPrice = createAnElement([
            'div',
            'OrderConfirmedCountPrice rose-500',
            '',
            '',
          ]);

          const OrderConfirmedPrice = createAnElement([
            'p',
            'OrderConfirmedPrice',
            '',
            order.children[1].children[0].children[1].innerHTML,
          ]);
          const OrderConfirmedItemTotal = createAnElement([
            'h3',
            'OrderConfirmedItemTotal rose-900',
            '',
            order.children[1].children[0].children[2].innerHTML,
          ]);

          const hr = createAnElement(['hr', 'mt-3 mb-3 rose-300 hr', '', '']);

          orderConfirmedCard.appendChild(OrderConfirmed_h1);
          orderConfirmedCard.appendChild(OrderConfirmed_p);
          orderConfirmedCard.appendChild(OrderConfirmedListContainer);
          OrderConfirmedListContainer.appendChild(OrderConfirmedItem);
          OrderConfirmedItem.appendChild(OrderConfirmedItemDetails);
          OrderConfirmedItemDetails.appendChild(OrderConfirmedImg);
          OrderConfirmedItemDetails.appendChild(
            OrderConfirmedNameCountPriceTotalContainer
          );
          OrderConfirmedNameCountPriceTotalContainer.appendChild(
            OrderConfirmedItemName
          );
          OrderConfirmedNameCountPriceTotalContainer.appendChild(
            OrderConfirmedCountPriceTotalContainer
          );
          OrderConfirmedCountPriceTotalContainer.appendChild(
            OrderConfirmedCountPrice
          );
          OrderConfirmedCountPrice.appendChild(OrderConfirmedCount);
          OrderConfirmedCountPrice.appendChild(OrderConfirmedPrice);
          OrderConfirmedCountPriceTotalContainer.appendChild(
            OrderConfirmedItemTotal
          );
          OrderConfirmedItem.appendChild(hr);
        });

        OrderConfirmedListContainer.appendChild(
          OrderConfirmedCartTextAndTotalContainer
        );
        OrderConfirmedCartTextAndTotalContainer.appendChild(
          OrderConfirmedCartText
        );
        OrderConfirmedCartTextAndTotalContainer.appendChild(
          OrderConfirmedCartTotal
        );

        const body = document.getElementsByTagName('body');
        orderConfirmedCard.appendChild(startNewOrder);
        body[0].appendChild(orderConfirmedCard);
        // const main = document.getElementsByTagName('main');
        // console.log(main[0].classList);
        // body[0].classList = ' dimmed--background';
      });

      cartContainer.nextElementSibling.remove();
    }

    // fetching againg the filled div element and creating the elements for the conatiner
    cartContainer = document.getElementById('cart__container');

    const cartItem = createAnElement([
      'div',
      'cart__item ' + i.id,
      'cart__item',
      '',
    ]);

    const cartName = createAnElement([
      'h4',
      'card__name rose-900 mt-2',
      '',
      c[2].innerText,
    ]);

    const cartItemDetailsContainer = createAnElement([
      'div',
      'cart__item__details__container mt-3',
      '',
      '',
    ]);

    const cartItemDetails = createAnElement([
      'div',
      'cart__item__details',
      '',
      '',
    ]);

    const itemNumber = createAnElement(['h4', 'red', '', 1 + '<span>x</span>']);

    const itemPrice = createAnElement([
      'p',
      'cart__item__price rose-400',
      '',
      '<small>@</small> ' + c[3].innerHTML,
    ]);

    const itemTotal = createAnElement([
      'p',
      'cart__item__total__price rose-500 ml-2',
      '',
      c[3].innerHTML,
    ]);

    const hr = createAnElement(['hr', 'mt-3 rose-300', '', '']);

    const removeButton = createAnElement([
      'button',
      'rose-400',
      'removeButton',
      '<svg class="rose-400 removeSvg" xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>',
    ]);

    const cartTotal = document.getElementById('cartTotal');
    const cartItems = document.querySelectorAll('#cart__item');
    if (cartItems.length > 0) {
      cartTotal.children[0].innerText =
        Number(cartTotal.children[0].innerText) +
        Number(c[3].children[0].innerText);
    }

    // Organising elements
    cartItem.appendChild(cartName);
    cartItemDetails.appendChild(itemNumber);
    cartItemDetails.appendChild(itemPrice);
    cartItemDetails.appendChild(itemTotal);
    cartItemDetailsContainer.appendChild(cartItemDetails);
    cartItemDetailsContainer.appendChild(removeButton);
    cartItem.appendChild(cartItemDetailsContainer);
    cartItem.appendChild(hr);
    cartContainer.appendChild(cartItem);

    // Creating elements buttons for the increament and decreament button
    const div = createAnElement(['div', 'cart__info__active', '', '']);
    button.replaceWith(div);

    const buttonS = 'buttonSubtract' + index;
    const buttonSubtract = createAnElement([
      'button',
      '',
      buttonS,
      '<svg class="addAndSubSvg" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>',
    ]);
    div.appendChild(buttonSubtract);

    const h5 = createAnElement(['h5', 'text-white', '', 1]);
    div.appendChild(h5);

    const buttonA = 'buttonAdd' + index;
    const buttonAdd = createAnElement([
      'button',
      '',
      buttonA,
      '<svg class="addAndSubSvg" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>',
    ]);
    div.appendChild(buttonAdd);

    // Selecting all the remove buttons and adding the event listener
    const removeButtons = document.querySelectorAll('#removeButton');
    removeButtons.forEach((removeButton, index) =>
      removeButton.children[0].addEventListener('click', () => {
        const dessertsCards = document.querySelectorAll('.desserts__card');
        dessertsCards.forEach((dessertsCard) => {
          if (
            dessertsCard.id ===
            removeButton.parentElement.parentElement.classList[1]
          ) {
            dessertsCard.children[0].children[0].classList = '';

            const btn = createAnElement([
              'button',
              'rose-900 cart__info',
              'addButton',
              '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>',
            ]);
            const h5 = createAnElement(['h5', '', '', 'Add to Cart ']);
            btn.appendChild(h5);
            dessertsCard.children[0].children[1].replaceWith(btn);

            // Removing the cart item from the list
            removeButton.parentElement.parentElement.remove();

            // Selecting all the cart items to sum up the number and total of all selected
            const cartItems = document.querySelectorAll('#cart__item');
            let newCartTotal = 0;
            let newCartItems = 0;
            cartItems.forEach((cartItem) => {
              const itemsTotal =
                cartItem.children[1].children[0].children[2].children[0]
                  .innerText;
              const cartTotal = document.getElementById('cartTotal');
              newCartTotal = newCartTotal + Number(itemsTotal);
              cartTotal.children[0].innerText = newCartTotal;

              newCartItems =
                newCartItems +
                Number(
                  cartItem.children[1].children[0].children[0].firstChild
                    .textContent
                );
              const cartCount = document.getElementById('cartCount');
              cartItem.children[1].children[0].children[0].firstChild =
                newCartItems;
              cartCount.innerText = newCartItems;
            });

            // checking if cart total === 0 and replace with empty cart info
            if (newCartItems === 0) {
              const cart = document.getElementById('cart');
              cart.innerHTML =
                '<h1 class="red">Your Cart(<span id="cartCount">0</span>)</h1><div id="cart__icon__empty" class="cart__icon__empty"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128"><path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z" opacity=".15"/><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"/><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"/><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16"/><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"/><path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"/><path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"/><path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"/></svg></div><p class="rose-500 fw-600 nowrap text-center mb-4">Your added items will appear here</p>';
            }
          }
        });
      })
    );

    //Selecting and Adding an event listener for the decreament buttons
    const buttonDecreament = document.querySelectorAll(
      '#buttonSubtract' + index
    );
    buttonDecreament.forEach((button, index) =>
      button.children[0].addEventListener('click', () => {
        const h5 = button.nextElementSibling.innerText;
        const newValue = Number(h5) - 1;
        const parent = button.parentElement.parentElement.nextElementSibling.id;
        const cartCount = document.getElementById('cartCount');
        const temp = cartCount.innerText;
        const newCountItems = Number(temp) - 1;
        cartCount.innerText = newCountItems;
        button.nextElementSibling.innerText = newValue;

        //Selecting and Looping over each item and updating the exact cart item
        const cartItems = document.querySelectorAll('#cart__item');
        cartItems.forEach((cartItem) => {
          if (cartItem.classList[1] === parent) {
            let itemCount =
              cartItem.children[1].children[0].children[0].firstChild
                .textContent;
            const newCount = Number(itemCount) - 1;
            cartItem.children[1].children[0].children[0].firstChild.textContent =
              newCount;

            const itemPrice =
              cartItem.children[1].children[0].children[1].children[1]
                .innerText;

            const itemTotal =
              cartItem.children[1].children[0].children[2].children[0]
                .innerText;

            cartItem.children[1].children[0].children[2].children[0].innerText =
              Number(itemTotal) - Number(itemPrice);

            //Looping over each item total and adding tnem to the cart total
            if (cartItem.classList[1] === parent) {
              let newCartTotal = 0;
              cartItems.forEach((cartItem) => {
                const itemsTotal =
                  cartItem.children[1].children[0].children[2].children[0]
                    .innerText;
                const cartTotal = document.getElementById('cartTotal');
                newCartTotal = newCartTotal + Number(itemsTotal);
                cartTotal.children[0].innerText = newCartTotal;
              });
            }

            //Comparison check and removing the cart item with 0 carts on the cart list
            if (cartItem.classList[1] === parent && newValue === 0) {
              cartItem.remove();
            }
          }
        });

        //Comparison check and replacing the cart info with a button if cart number === 0
        if (newValue === 0) {
          const btn = createAnElement([
            'button',
            'rose-900 cart__info',
            'addButton',
            '<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>',
          ]);
          const h5 = createAnElement(['h5', '', '', 'Add to Cart ']);
          btn.appendChild(h5);

          button.parentElement.replaceWith(btn);
          // btn.addEventListener('click' );
          btn.previousElementSibling.classList = '';
        }

        //Comparison check and replacing the cart container with a button 0 placed order info
        const cart = document.getElementById('cart');
        if (newCountItems === 0) {
          cart.innerHTML =
            '<h1 class="red">Your Cart(<span id="cartCount">0</span>)</h1><div id="cart__icon__empty" class="cart__icon__empty"><svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128"><path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z" opacity=".15"/><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"/><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"/><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16"/><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"/><path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"/><path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"/><path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"/></svg></div><p class="rose-500 fw-600 nowrap text-center mb-4">Your added items will appear here</p>';
        }
      })
    );

    //Selecting and Adding an event listener for the increament buttons
    const buttonIncreament = document.querySelectorAll('#buttonAdd' + index);
    buttonIncreament.forEach((button, index) =>
      button.children[0].addEventListener('click', () => {
        const h5 = button.previousElementSibling.innerText;
        const newValue = Number(h5) + 1;
        const cartCount = document.getElementById('cartCount');
        const temp = cartCount.innerText;
        const newCountItems = Number(temp) + 1;
        cartCount.innerText = newCountItems;
        button.previousElementSibling.innerText = newValue;
        const parent = button.parentElement.parentElement.nextElementSibling.id;
        const cartItems = document.querySelectorAll('#cart__item');

        cartItems.forEach((cartItem) => {
          if (cartItem.classList[1] === parent) {
            let itemCount =
              cartItem.children[1].children[0].children[0].firstChild
                .textContent;
            const newCount = Number(itemCount) + 1;
            cartItem.children[1].children[0].children[0].firstChild.textContent =
              newCount;

            const itemPrice =
              cartItem.children[1].children[0].children[1].children[1]
                .innerText;

            const itemTotal =
              cartItem.children[1].children[0].children[2].children[0]
                .innerText;

            cartItem.children[1].children[0].children[2].children[0].innerText =
              Number(itemTotal) + Number(itemPrice);

            let newCartTotal = 0;
            cartItems.forEach((cartItem) => {
              const itemsTotal =
                cartItem.children[1].children[0].children[2].children[0]
                  .innerText;

              const cartTotal = document.getElementById('cartTotal');
              newCartTotal = newCartTotal + Number(itemsTotal);
              cartTotal.children[0].innerText = newCartTotal;
            });
          }
        });
      })
    );
  })
);
