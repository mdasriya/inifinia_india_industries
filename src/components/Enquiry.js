// EnquiryModal.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from "styled-components";

Modal.setAppElement('#root');

const Enquiry = ({ isOpen, onRequestClose }) => {
  const [executiveType, setExecutiveType] = useState('Customer');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log({
      executiveType,
      name,
      email,
      phone,
      companyName,
      description
    });
    // Reset form fields
    setExecutiveType('Customer');
    setName('');
    setEmail('');
    setPhone('');
    setCompanyName('');
    setDescription('');
    onRequestClose();
  };

  return (
     <DIV>
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Enquiry Form"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>ENQUIRY</h2>
      <p>Provide discussion information and we will get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit}>
        <div className="executive-type">
          <label>
            <input
              type="radio"
              value="Customer"
              checked={executiveType === 'Customer'}
              onChange={(e) => setExecutiveType(e.target.value)}
            />
            Customer
          </label>
          <label>
            <input
              type="radio"
              value="Dealer"
              checked={executiveType === 'Dealer'}
              onChange={(e) => setExecutiveType(e.target.value)}
            />
            Dealer
          </label>
          <label>
            <input
              type="radio"
              value="Distributor"
              checked={executiveType === 'Distributor'}
              onChange={(e) => setExecutiveType(e.target.value)}
            />
            Distributor
          </label>
        </div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
        <textarea
          placeholder="Describe"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>For Investors Query Please Mail to: <a href="mailto:cs@kakaprofle.com">cs@kakaprofle.com</a> / <a href="mailto:investors@kakaprofle.com">investors@kakaprofle.com</a></p>
    </Modal>
    </DIV>
  );
};

export default Enquiry;
const DIV = styled.div`
/* EnquiryModal.css */
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  marginRight: '-50%';
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  padding: 20px;
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)';
  borderRadius: '10px';
  outline: 'none';
}

.overlay {
  position: 'fixed';
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backgroundColor: 'rgba(0, 0, 0, 0.75)';
}

.executive-type label {
  margin-right: 10px;
}

form input, form textarea {
  width: calc(100% - 20px);
  padding: 10px;
  margin: 10px 0;
}

button {
  padding: 10px 20px;
  background-color: #800000;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #660000;
}

`