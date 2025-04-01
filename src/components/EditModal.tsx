import React from 'react';
import styled from 'styled-components';

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 32px;
  border-radius: 16px;
  width: 600px;
`;

const EditModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <ModalBackdrop>
      <ModalContent>
        <h2>Edit Company Details</h2>
        {/* Форма редактирования */}
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalBackdrop>
  );
};

export default EditModal;