import React, { useState } from 'react';
import styles from '../components/ImageUploader.module.css';

const ImageUploader = ({ onUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
        onUpload(file);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label className={styles.uploader}>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className={styles.fileInput}
      />
      {preview ? (
        <img src={preview} alt="Preview" className={styles.preview} />
      ) : (
        <div className={styles.placeholder}>+ Upload Photo</div>
      )}
    </label>
  );
};

export default ImageUploader;