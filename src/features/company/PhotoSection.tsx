import React from 'react';
import { Photo } from './companyTypes';
import { useDeleteImageMutation } from './companyApi';
import styles from './PhotoSection.module.css';

interface PhotoSectionProps {
  companyId: string;
  photos: Photo[];
  onDelete: () => void;
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ companyId, photos, onDelete }) => {
  const [deleteImage] = useDeleteImageMutation();

  const handleDelete = async (imageName: string) => {
    try {
      await deleteImage({ id: companyId, imageName }).unwrap();
      onDelete();
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  return (
    <div className={styles.photosGrid}>
      {photos.map((photo) => (
        <div key={photo.name} className={styles.photoItem}>
          <img 
            src={photo.thumbpath} 
            alt={photo.name} 
            className={styles.thumbnail}
          />
          <button 
            className={styles.deleteButton}
            onClick={() => handleDelete(photo.name)}
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

export default PhotoSection;