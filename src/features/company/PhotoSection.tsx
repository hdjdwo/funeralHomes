// src/features/company/PhotoSection.tsx
import React from 'react';
import { Photo } from './companyTypes';
import { useUploadImageMutation, useDeleteImageMutation } from './companyApi';
import ImageUploader from '../../components/ImageUploader';
import styles from './PhotoSection.module.css';

interface PhotoSectionProps {
  companyId: string;
  photos: Photo[];
  onUpdate: () => void;
}

const PhotoSection: React.FC<PhotoSectionProps> = ({ companyId, photos, onUpdate }) => {
  const [uploadImage] = useUploadImageMutation();
  const [deleteImage] = useDeleteImageMutation();

  const handleUpload = async (file: File) => {
    try {
      await uploadImage({ id: companyId, file }).unwrap();
      onUpdate();
    } catch (error) {
      console.error('Failed to upload image:', error);
    }
  };

  const handleDelete = async (imageName: string) => {
    try {
      await deleteImage({ id: companyId, imageName }).unwrap();
      onUpdate();
    } catch (error) {
      console.error('Failed to delete image:', error);
    }
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.title}>Attached Photos</h3>
      <div className={styles.grid}>
        {photos.map((photo) => (
          <div key={photo.name} className={styles.photoWrapper}>
            <img
              src={photo.thumbpath}
              alt={`Attachment ${photo.name}`}
              className={styles.thumbnail}
            />
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(photo.name)}
              aria-label="Delete photo"
            >
              &times;
            </button>
          </div>
        ))}
        <ImageUploader onUpload={handleUpload} />
      </div>
    </div>
  );
};

export default PhotoSection;