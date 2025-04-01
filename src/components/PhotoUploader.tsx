import React from 'react';
import { useUploadImageMutation } from '../features/company/companyApi';
import styles from './PhotoUploader.module.css';

interface PhotoUploaderProps {
  companyId: string;
  onUpload: () => void;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ companyId, onUpload }) => {
  const [uploadImage] = useUploadImageMutation();

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      try {
        await uploadImage({ id: companyId, formData }).unwrap();
        onUpload();
      } catch (error) {
        console.error('Upload failed:', error);
      }
    }
  };

  return (
    <label className={styles.uploadLabel}>
      <input type="file" onChange={handleFileUpload} hidden />
      <div className={styles.uploadArea}>
        <span>+ Upload New Photo</span>
      </div>
    </label>
  );
};

export default PhotoUploader;