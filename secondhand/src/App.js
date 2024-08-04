import './App.css';
import { useState } from 'react';
import AddProductForm from './components/AddProductForm';

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
        <p>
          2nd Hand Items
        </p>
        <div>
        {!showForm && (
          <button onClick={handleAddProductClick}>Add Product</button>
        )}
        {showForm && (
          <AddProductForm onClose={handleCloseForm} />
        )}
      </div>
      </header>
    </div>
  );
}
