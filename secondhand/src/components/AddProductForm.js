"use client"; // Add this directive

import { useState } from 'react';
import { db, storage} from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const AddProductForm = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [seller, setSeller] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload the image to Firebase Storage
      const storageRef = ref(storage, `products/${image.name}`);
      const snapshot = await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(snapshot.ref);

      // Save the product details to Firestore
      await addDoc(collection(db, 'products'), {
        title,
        seller,
        price,
        imageUrl
      });

      alert('Product added successfully!');
      setTitle('');
      setSeller('');
      setPrice('');
      setImage(null);
      onClose(); // Close the form on successful submission
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred while adding the product.');
    }
  };

  return (
    <div className="container">
      <h1>Add a Product</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="seller">Seller:</label>
        <input
          type="text"
          id="seller"
          name="seller"
          value={seller}
          onChange={(e) => setSeller(e.target.value)}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          step="0.01"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button type="submit">Add Product</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
};

export default AddProductForm;

