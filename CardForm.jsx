import React, { useState } from 'react';
import styles from './CardForm.module.css';

function CardForm() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleCardNumberChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formatted += ' ';
      }
      formatted += value[i];
    }
    setCardNumber(formatted.trim());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your payment has been processed.");
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          maxLength="19"
          placeholder="1234 5678 9012 3456"
          value={cardNumber}
          onChange={handleCardNumberChange}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="cardName">Cardholder Name</label>
        <input
          type="text"
          id="cardName"
          placeholder="John Doe"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.half}>
          <label htmlFor="expiryDate">Expiry Date</label>
          <input
            type="text"
            id="expiryDate"
            placeholder="MM/YY"
            maxLength="5"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />
        </div>
        <div className={styles.half}>
          <label htmlFor="cvv">CVV</label>
          <input
            type="password"
            id="cvv"
            placeholder="123"
            maxLength="4"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
      </div>

      <button type="submit">Pay Now</button>
    </form>
  );
}

export default CardForm;