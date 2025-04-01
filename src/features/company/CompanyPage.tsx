import React from 'react';
import { useGetCompanyQuery, useGetContactQuery } from './companyApi';
import CompanyCard from './CompanyCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const CompanyPage = () => {
  const { 
    data: company, 
    isLoading: companyLoading,
    isError: companyError
  } = useGetCompanyQuery('12');
  
  const { 
    data: contact,
    isLoading: contactLoading,
    isError: contactError
  } = useGetContactQuery(company?.contactId || '16');

  if (companyLoading || contactLoading) return <LoadingSpinner />;
  if (companyError || contactError || !company || !contact) {
    return <ErrorMessage message="Failed to load company data" />;
  }

  return (
    <div className="container">
      <CompanyCard company={company} contact={contact} />
    </div>
  );
};

export default CompanyPage;