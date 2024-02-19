import React, { useState } from 'react';
import './menu.css';

const menuItems = [
  { id: 1, name: 'Margherita Pizza', category: 'Pizza', description: 'Tomato, mozzarella, basil', price: 10.99, image: 'pizza1.jpg' },
  { id: 2, name: 'Tandoori Paneer', category: 'Pizza', description: 'Spiced paneer,onion,green capsicum,red paprika and tomato in tandoori sauce', price: 14.99, image: 'paneer1.jpg' },
  { id: 3, name: 'Veg Exotica', category: 'Pizza', description: 'Red capsicum,baby corn,green capsicum,black olives', price: 12.99, image: 'veg exotica.jpg' },
  { id: 4, name: 'Chicken Alfredo', category: 'Pasta', description: 'Creamy Alfredo sauce with grilled chicken', price: 12.99, image: 'chicken alfredo pasta.jpg' },
  { id: 5, name: 'Spanish Tomato', category: 'Pasta', description: 'Classic tomato sauce given the cheesy flavor twist along with sundried tomatoes', price: 13.99, image: 'spanish tomato pasta.jpg' },
  { id: 6, name: 'Cheesy Alfredo', category: 'Pasta', description: 'Classic cheesy comfort you crave', price: 12.99, image: 'cheesy alfredo pasta.jpg' },
  { id: 7, name: 'Fresh Garden', category: 'Salad', description: 'Exotic vegetables in an italian herb dressing topped with garlic', price: 12.99, image: 'green salad.jpg' },
  { id: 8, name: 'Creamy Mushroom', category: 'Pasta', description: 'Rich creamy mushroom sauce flavoured with cheese', price: 12.99, image: 'creamy mushroom pasta.jpg' }
];

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleCategoryFilterChange = (category) => {
    setCategoryFilter(category);
  };

  return (

    <><nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" onClick={() => handleCategoryFilterChange('All')}><b>Hotel Elite</b></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" onClick={() => handleCategoryFilterChange('All')}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" onClick={() => handleCategoryFilterChange('All')}>All Categories</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li> */}
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Our Populars
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" onClick={() => handleCategoryFilterChange('Pizza')}>Pizzas</a></li>
                <li><a class="dropdown-item" onClick={() => handleCategoryFilterChange('Pasta')}>Pastas</a></li>
                <li><a class="dropdown-item" onClick={() => handleCategoryFilterChange('Salad')}>Salads</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <div className="menu">
        <h1>Menu</h1>
        <div className="menu-items">
          {menuItems.filter(item => categoryFilter === 'All' || item.category === categoryFilter).map((item) => (
            <div className='menu-item1'>
              <div key={item.id} className="menu-item" onClick={() => handleSelectItem(item)}>
                <img src={require(`./images/${item.image}`)} className="image" alt={item.name} style={{ width: '200px', height: '100px' }} />
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><b>${item.price}</b></p>
              </div>
              <button className='cart'><i class="fa-solid fa-cart-shopping"></i> Add to Cart</button>
            </div>
          ))}

        </div>
        {selectedItem && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={handleCloseModal}>&times;</span>
              <center>
                <img src={require(`./images/${selectedItem.image}`)} className="image" alt={selectedItem.name} />

                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.description}</p>
                <p><b>${selectedItem.price}</b></p>
                {<button className='cart'>Add to Cart</button>}
              </center>

            </div>
          </div>
        )}
      </div></>
  );
};

export default Menu;
