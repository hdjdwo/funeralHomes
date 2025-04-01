import React from 'react';
import { Photo } from './companyTypes';
import { useDeleteImageMutation } from './companyApi';
import styles from './PhotoSection.module.css';

const PhotoSection: React.FC<{ companyId: string; photos: Photo[]; onDelete: () => void }> = ({ 
  companyId, 
  photos,
  onDelete
}) => {
  const [deleteImage] = useDeleteImageMutation();

  const handleDelete = async (imageName: string) => {
    try {
      await deleteImage({ id: companyId, imageName }).unwrap();
      onDelete();
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <div className={styles.photosGrid}>
      {photos.map((photo) => (
        <div key={photo.name} className={styles.photoItem}>
          <img src={photo.thumbpath} alt={photo.name} />
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