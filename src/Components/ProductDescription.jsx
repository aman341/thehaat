import React from 'react';
import './Style/ProductDescription.css';

const ProductDescription = () => {
  return (
    <div className="product-description">
      <div className="product-images">
        <img src="product-image1.jpg" alt="Product" />
        <img src="product-image2.jpg" alt="Product" />
        <img src="product-image3.jpg" alt="Product" />
      </div>
      <div className="product-info">
        <h1 className="product-title">Zepto App</h1>
        <p className="product-price">$9.99</p>
        <p className="product-description-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, nunc id vulputate vestibulum, mauris sapien semper est, vitae facilisis neque ex sit amet mi. Mauris vel purus vel neque malesuada bibendum. In hac habitasse platea dictumst. Ut cursus pulvinar luctus. Integer tincidunt bibendum leo, ac consectetur ligula eleifend nec. Nunc sagittis sapien et diam finibus convallis. Suspendisse potenti.
        </p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDescription;
