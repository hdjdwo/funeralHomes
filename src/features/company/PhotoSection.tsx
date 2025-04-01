import React from 'react';
import { Photo } from './companyTypes';
import { useUploadImageMutation, useDeleteImageMutation } from './companyApi';
import ImageUploader from '../../components/ImageUploader';
import styles from './PhotoSection.module.css';

const PhotoSection = ({ company }: { company: Company }) => {
  const [uploadImage] = useUploadImageMutation();
  const [deleteImage] = useDeleteImageMutation();

  const handleUpload = async (file: File) => {
    try {
      await uploadImage({ id: company.id, file }).unwrap();
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  };

  const handleDelete = async (imageName: string) => {
    try {
      await deleteImage({ id: company.id, imageName }).unwrap();
    } catch (error) {
      console.error('Image delete failed:', error);
    }
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Photos</h3>
      <div className={styles.photosGrid}>
        {company.photos.map((photo) => (
          <div key={photo.name} className={styles.photoItem}>
            <img src={photo.thumbpath} alt={photo.name} className={styles.thumbnail} />
            <button 
              className={styles.deleteButton}
              onClick={() => handleDelete(photo.name)}
            >
              ×
            </button>
          </div>
        ))}
        <ImageUploader onUpload={handleUpload} />
      </div>
    </div>
  );
};

export default PhotoSection;