import React, { useState } from 'react';
import { Contact } from './companyTypes';
import { useUpdateContactMutation } from './companyApi';
import EditableField from '../../components/EditableField';
import styles from './ContactInfo.module.css';

interface ContactInfoProps {
  contact: Contact;
  isEditing: boolean;
  onUpdate: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contact, isEditing, onUpdate }) => {
  const [updateContact] = useUpdateContactMutation();
  const [localData, setLocalData] = useState(contact);

  const handleSave = async () => {
    try {
      await updateContact({
        id: contact.id,
        lastname: localData.lastname,
        firstname: localData.firstname,
        phone: localData.phone,
        email: localData.email
      }).unwrap();
      onUpdate();
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>Contact Information</h3>
      <div className={styles.grid}>
        <EditableField
          label="First Name"
          value={localData.firstname}
          editing={isEditing}
          onChange={(e ) => setLocalData({ ...localData, firstname: e.target.value })}
        />
        <EditableField
          label="Last Name"
          value={localData.lastname}
          editing={isEditing}
          onChange={(e) => setLocalData({ ...localData, lastname: e.target.value })}
        />
        <EditableField
          label="Phone"
          value={localData.phone}
          editing={isEditing}
          onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
        />
        <EditableField
          label="Email"
          value={localData.email}
          editing={isEditing}
          onChange={(e) => setLocalData({ ...localData, email: e.target.value })}
        />
      </div>
      {isEditing && (
        <button 
          className={styles.saveButton}
          onClick={handleSave}
        >
          Save Changes
        </button>
      )}
    </div>
  );
};

export default ContactInfo;