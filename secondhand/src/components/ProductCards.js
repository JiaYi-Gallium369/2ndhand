import { useEffect, useState } from 'react';
import { db } from '../firebase'; // Adjust the import path based on your setup
import { collection, getDocs } from 'firebase/firestore';
import "./ProductCards.css";

const ProductCard = ({product, expandedCardId, setExpandedCardId}) => {
  const isExpanded = product.id === expandedCardId;

  const handleExpand = () => {
    if (isExpanded) {
      setExpandedCardId(null); // Collapse if already expanded
    } else {
      setExpandedCardId(product.id); // Expand this card
    }
  };

  return (
    <div key={product.id} className="card">
          <img src={product.imageUrl} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button className="expand-button" onClick={handleExpand}>
          {isExpanded ? 'Show Less' : 'Show Description'}
        </button>
        {isExpanded && (
    <div className="card-details">
      <p className="card-description">{product.description}</p>
    </div>
  )}
  {product.sold && <div className="sold-watermark">SOLD</div>}
        </div>
  );
};

const ProductCards = () => {
    const [products, setProducts] = useState([]);
    const [expandedCardId, setExpandedCardId] = useState(null);
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
        <ProductCard
          key={product.id}
          product={product}
          expandedCardId={expandedCardId}
          setExpandedCardId={setExpandedCardId}
        />
      ))}
    </div>
  );
};

export default ProductCards;
