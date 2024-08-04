import { useEffect, useState } from 'react';
import { db } from '../firebase'; // Adjust the import path based on your setup
import { collection, getDocs } from 'firebase/firestore';

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, 'products');
        const productSnapshot = await getDocs(productsCollection);
        const productList = productSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProducts(productList);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-cards">
      {products.map(product => (
        <div key={product.id} className="card">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCards;
