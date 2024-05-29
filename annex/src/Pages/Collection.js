import React from 'react';
import { Link } from 'react-router-dom'; 
import './Collection.css'; 

const Collection = () => {
  return (
    <div className="collection-page">
      <div className="header">
        <Link to="/new-collection"> {/* Link to NewCollection page */}
          <button className="new-collection-button">New Collection</button>
        </Link>
        <input type="text" className="search-bar" placeholder="Search..." />
      </div>
      <div className="scrolling-lists">
        <h2>Games</h2>
        <div className="horizontal-scroll">
          <div className="item"><img src="game1.jpg" alt="Game 1" /></div>
          <div className="item"><img src="game2.jpg" alt="Game 2" /></div>
          <div className="item"><img src="game3.jpg" alt="Game 3" /></div>
        </div>
      </div>
      <div className="scrolling-lists">
        <h2>Books</h2>
        <div className="horizontal-scroll">
          <div className="item"><img src="book1.jpg" alt="Book 1" /></div>
          <div className="item"><img src="book2.jpg" alt="Book 2" /></div>
          <div className="item"><img src="book3.jpg" alt="Book 3" /></div>
        </div>
      </div>
      <div className="scrolling-lists">
        <h2>Vinyls</h2>
        <div className="horizontal-scroll">
          <div className="item"><img src="vinyl1.jpg" alt="Vinyl 1" /></div>
          <div className="item"><img src="vinyl2.jpg" alt="Vinyl 2" /></div>
          <div className="item"><img src="vinyl3.jpg" alt="Vinyl 3" /></div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
