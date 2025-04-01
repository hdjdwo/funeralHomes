import React, { useState, useEffect } from 'react';
import { Contact } from './companyTypes';
import { useUpdateContactMutation } from './companyApi';
import EditableField from '../../components/EditableField';
import styles from './ContactInfo.module.css';

interface ContactInfoProps {
  contact: Contact;
  onUpdate: () => void;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ contact, onUpdate }) => {
  const [localData, setLocalData] = useState(contact);
  const [updateContact] = useUpdateContactMutation();

  useEffect(() => {
    setLocalData(contact);
  }, [contact]);

  const handleSave = async () => {
    try {
      await updateContact(localData).unwrap();
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
          onChange={(e) => setLocalData({ ...localData, firstname: e.target.value })}
        />
        <EditableField
          label="Last Name"
          value={localData.lastname}
          onChange={(e) => setLocalData({ ...localData, lastname: e.target.value })}
        />
        <EditableField
          label="Phone"
          value={localData.phone}
          onChange={(e) => setLocalData({ ...localData, phone: e.target.value })}
        />
        <EditableField
          label="Email"
          value={localData.email}
          onChange={(e) => setLocalData({ ...localData, email: e.target.value })}
        />
      </div>
      <button className={styles.saveButton} onClick={handleSave}>
        Save Changes
      </button>
    </div>
  );
};

export default ContactInfo;