import './App.css';
import { useState } from 'react';
import AddProductForm from './components/AddProductForm';
import ProductCards from './components/ProductCards';

export default function App() {
  const [showForm, setShowForm] = useState(false);

  const handleAddProductClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Jia Yi's Pre-Loved Items
        </h1>
        <h2>
          DM my telegram @jiajia_999999999 if you are interested in buying!
        </h2>
        <h2>
          Location: Preferably Raffles Hall
        </h2>
        </header>
        <div>
          <ProductCards/>
          </div>
      </div>
  );
}
