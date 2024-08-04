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
          Jia Yi's 2nd Hand Items
        </h1>
        </header>
        <div>
          <ProductCards/>
          </div>
      </div>
  );
}
