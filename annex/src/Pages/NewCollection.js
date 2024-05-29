import React, { useState } from 'react';
import './NewCollection.css'; 

const NewCollection = () => {
  const [collectionData, setCollectionData] = useState({
    image: '',
    name: '',
    description: '',
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCollectionData({
      ...collectionData,
      [name]: value,
    });
  };

  const handleAddTag = () => {
    const newTag = prompt('Enter a new tag:');
    if (newTag) {
      setCollectionData({
        ...collectionData,
        tags: [...collectionData.tags, newTag],
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new-collection-page">
      <h2>Create New Collection</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" value={collectionData.image} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Collection Name:</label>
          <input type="text" id="name" name="name" value={collectionData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" value={collectionData.description} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Tags:</label>
          <ul>
            {collectionData.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
          <button type="button" onClick={handleAddTag}>Add Tag</button>
        </div>
        <div className="button-group">
          <button type="submit">Create</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewCollection;