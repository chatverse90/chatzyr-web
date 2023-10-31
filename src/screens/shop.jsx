import React, { useState } from 'react';
import './shop.css';
import productsJSON from './products.json'
function Shop() {
    const [products, setProducts] = useState(productsJSON);
      

  // State for modal (larger image view)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Function to open the modal with a selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedProduct(null);
    setModalOpen(false);
  };

  return (
    <div className="product-list-container">
      {/* <div className="search-bar">
        <input style={{background:'#f5f5f5',color:'black'}}type="text" placeholder="Search for products" />
      </div> */}
      <div className="product-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img
              src={product.image}
              alt={product.name}
              onClick={() => openModal(product)}
            />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p><br />
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      {/* Modal for larger image view */}
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <button style={{width:100,}}onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Shop;
