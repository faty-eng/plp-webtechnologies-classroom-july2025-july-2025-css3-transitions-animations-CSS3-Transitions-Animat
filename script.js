/* ============================
   JavaScript Logic
   Demonstrating: 
   - Function Scope
   - Parameters & Return Values
   - Animation Triggers
============================ */

/* Global variable for demonstration */
let deliveryInProgress = false;

/**
 * Function: triggerAnimation
 * --------------------------
 * Adds animation to a specific product card when button is clicked.
 * Demonstrates parameters and DOM manipulation.
 */
function triggerAnimation(cardId) {
  const card = document.getElementById(cardId);
  card.classList.add('active'); // Trigger CSS animation

  // Remove class after animation ends for reusability
  setTimeout(() => {
    card.classList.remove('active');
  }, 800);
}

/**
 * Function: startDelivery
 * ------------------------
 * Triggers the delivery truck animation and returns a status message.
 * Demonstrates local vs global scope and return values.
 */
function startDelivery() {
  const truck = document.getElementById('truck');

  if (!deliveryInProgress) {
    deliveryInProgress = true; // modify global variable
    truck.classList.add('move');
    const message = deliveryMessage('Starting delivery...'); // use helper
    console.log(message);

    // After animation completes, reset state
    setTimeout(() => {
      deliveryInProgress = false;
      truck.classList.remove('move');
      console.log(deliveryMessage('Delivery complete!'));
    }, 4000);
  } else {
    console.log(deliveryMessage('Delivery already in progress!'));
  }
}

/**
 * Function: deliveryMessage
 * -------------------------
 * Returns a formatted message string. 
 * Demonstrates parameter and return value.
 */
function deliveryMessage(status) {
  return `🚚 ${status}`;
}

/* ============================
   ORDER FORM INTERACTIONS
============================ */

/* Show/hide the form with smooth transition */
function toggleOrderForm() {
  const form = document.getElementById('orderForm');
  orderFormVisible = !orderFormVisible;

  form.classList.toggle('active', orderFormVisible);
}

/* Handle form submission */
function submitOrder(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const product = document.getElementById('product').value;
  const quantity = document.getElementById('quantity').value;
  const confirmation = document.getElementById('confirmation');

  const message = createOrderMessage(name, product, quantity);
  console.log(message); // Demonstrates return values

  // Show confirmation animation
  confirmation.classList.add('show');

  // Reset form fields after a short delay
  setTimeout(() => {
    document.getElementById('customerForm').reset();
    confirmation.classList.remove('show');
    toggleOrderForm();
  }, 2500);

  return false; // Prevent page reload
}

/* Function demonstrating parameters + return value */
function createOrderMessage(name, product, quantity) {
  return `🧾 Order received from ${name}: ${quantity} x ${product}`;
}