import React, { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useImageManager = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImagesByCategory = async (category) => {
    setLoading(true);
    try {
      const records = await pb.collection('images').getFullList({
        filter: `category = "${category}"`,
        sort: '-created',
        $autoCancel: false
      });
      setImages(records);
      return records;
    } catch (error) {
      console.error('Error fetching images:', error);
      return [];
    } finally {
      setLoading(false);
    }
  };

  const uploadImage = async (file, category, title = '', description = '') => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append('image', file);
      formData.append('category', category);
      if (title) formData.append('title', title);
      if (description) formData.append('description', description);

      const record = await pb.collection('images').create(formData, { $autoCancel: false });
      return record;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (recordId) => {
    setLoading(true);
    try {
      await pb.collection('images').delete(recordId, { $autoCancel: false });
      setImages(images.filter(img => img.id !== recordId));
      return true;
    } catch (error) {
      console.error('Error deleting image:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return {
    images,
    loading,
    fetchImagesByCategory,
    uploadImage,
    deleteImage
  };
};

const ImageManager = () => {
  return null;
};

export default ImageManager;