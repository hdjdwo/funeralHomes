import React from 'react';
import styled from 'styled-components';
import { Photo } from '../features/company/companyTypes';

const Uploader = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 24px;
`;

const PhotoItem = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.2s;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddButton = styled.div`
  border: 2px dashed #EFEFEF;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  cursor: pointer;
  font-weight: 500;
  color: #6F767E;
  transition: border-color 0.2s;

  &:hover {
    border-color: #2D81E0;
  }
`;

const PhotoUploader = ({ photos }: { photos: Photo[] }) => {
  return (
    <Uploader>
      {photos.map((photo) => (
        <PhotoItem key={photo.name}>
          <Thumbnail 
            src={photo.thumbpath} 
            alt={`Attachment ${photo.name}`}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/placeholder.jpg';
            }}
          />
          <DeleteButton>×</DeleteButton>
        </PhotoItem>
      ))}
      <AddButton>+ Add Photo</AddButton>
    </Uploader>
  );
};

export default PhotoUploader;