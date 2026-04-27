import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Upload, Trash2, Image as ImageIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Skeleton } from '@/components/ui/skeleton';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useImageManager } from '@/components/ImageManager.jsx';
import { toast } from 'sonner';
import pb from '@/lib/pocketbaseClient';

const AdminDashboard = () => {
  const { images, loading, fetchImagesByCategory, uploadImage, deleteImage } = useImageManager();
  const [heroImages, setHeroImages] = useState([]);
  const [serviceImages, setServiceImages] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    loadAllImages();
  }, []);

  const loadAllImages = async () => {
    try {
      const hero = await pb.collection('images').getFullList({
        filter: 'category = "hero"',
        sort: '-created',
        $autoCancel: false
      });
      const services = await pb.collection('images').getFullList({
        filter: 'category = "services"',
        sort: '-created',
        $autoCancel: false
      });
      const gallery = await pb.collection('images').getFullList({
        filter: 'category = "gallery"',
        sort: '-created',
        $autoCancel: false
      });
      
      setHeroImages(hero);
      setServiceImages(services);
      setGalleryImages(gallery);
    } catch (error) {
      console.error('Error loading images:', error);
      toast.error('Failed to load images');
    }
  };

  const handleUpload = async (e, category) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast.error('Please select an image file');
      return;
    }

    setUploading(true);
    try {
      await uploadImage(file, category);
      toast.success('Image uploaded successfully');
      await loadAllImages();
      e.target.value = '';
    } catch (error) {
      console.error('Upload error:', error);
      toast.error('Failed to upload image');
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (recordId, category) => {
    if (!window.confirm('Are you sure you want to delete this image?')) {
      return;
    }

    try {
      await deleteImage(recordId);
      toast.success('Image deleted successfully');
      await loadAllImages();
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Failed to delete image');
    }
  };

  const ImageSection = ({ title, category, images, uploadLabel }) => (
    <div className="bg-card rounded-2xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
        {title}
      </h2>

      <div className="mb-6">
        <Label htmlFor={`upload-${category}`} className="text-foreground mb-2 block">
          {uploadLabel}
        </Label>
        <div className="flex items-center gap-4">
          <Input
            id={`upload-${category}`}
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e, category)}
            disabled={uploading}
            className="text-foreground"
          />
          <Button
            disabled={uploading}
            className="bg-primary hover:bg-primary/90 whitespace-nowrap"
          >
            <Upload className="w-4 h-4 mr-2" />
            {uploading ? 'Uploading...' : 'Upload'}
          </Button>
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="aspect-square rounded-lg" />
          ))}
        </div>
      ) : images.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image) => (
            <div key={image.id} className="relative group">
              <img
                src={pb.files.getUrl(image, image.image, { thumb: '300x300' })}
                alt={image.title || 'Uploaded image'}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => handleDelete(image.id, category)}
                  className="transition-all duration-200 active:scale-[0.98]"
                >
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </Button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted rounded-lg">
          <ImageIcon className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
          <p className="text-muted-foreground">No images uploaded yet</p>
        </div>
      )}
    </div>
  );

  return (
    <>
      <Helmet>
        <title>Admin Dashboard - 5taag Salon</title>
        <meta name="description" content="Manage images and content for 5taag Salon beauty salon website." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
                Admin dashboard
              </h1>
              <p className="text-muted-foreground text-lg">
                Manage your beauty salon website content
              </p>
            </motion.div>

            <div className="space-y-8">
              <ImageSection
                title="Hero Banner"
                category="hero"
                images={heroImages}
                uploadLabel="Upload home page hero image"
              />

              <ImageSection
                title="Service Images"
                category="services"
                images={serviceImages}
                uploadLabel="Upload service images"
              />

              <ImageSection
                title="Gallery Images"
                category="gallery"
                images={galleryImages}
                uploadLabel="Upload gallery images (before/after)"
              />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AdminDashboard;