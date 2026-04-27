import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('images');
    if (stored) setImages(JSON.parse(stored));
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    const newImages = [...images, { id: Date.now(), url }];

    setImages(newImages);
    localStorage.setItem('images', JSON.stringify(newImages));
  };

  const handleDelete = (id) => {
    const updated = images.filter(img => img.id !== id);
    setImages(updated);
    localStorage.setItem('images', JSON.stringify(updated));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Admin Dashboard</h1>

      <input type="file" onChange={handleUpload} />

      <div style={{ display: 'flex', gap: 10, marginTop: 20 }}>
        {images.map(img => (
          <div key={img.id}>
            <img src={img.url} width="150" />
            <button onClick={() => handleDelete(img.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;