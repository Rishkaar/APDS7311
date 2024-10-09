const express = require('express');
const auth = require('../middleware/auth');  // Import the auth middleware for protected routes
const Payment = require('../models/Payment'); // Import the Payment model
const router = express.Router();

// POST route for making a payment
router.post('/', auth, async (req, res) => {
  const { amount, currency, provider, payeeAccount, swiftCode } = req.body;

  // Simple validation
  if (!amount || !currency || !provider || !payeeAccount || !swiftCode) {
    return res.status(400).json({ msg: 'All fields are required.' });
  }

  try {
    // Create a new payment
    const payment = new Payment({
      userId: req.user.id, // req.user.id comes from the JWT middleware
      amount,
      currency,
      provider,
      payeeAccount,
      swiftCode
    });

    // Save the payment to the database
    await payment.save();
    res.status(201).json({ msg: 'Payment processed successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
