// src/features/company/CompanyPage.tsx
import React, { useEffect } from 'react';
import { useGetCompanyQuery, useGetContactQuery } from './companyApi';
import CompanyCard from './CompanyCard';
import LoadingSpinner from '../../components/LoadingSpinner';
import ErrorMessage from '../../components/ErrorMessage';

const CompanyPage = () => {
  const { 
    data: company, 
    isLoading: companyLoading,
    isError: companyError,
    refetch: refetchCompany
  } = useGetCompanyQuery('12');
  
  const { 
    data: contact,
    isLoading: contactLoading,
    isError: contactError
  } = useGetContactQuery(company?.contactId || '16');

  useEffect(() => {
    if (companyError || contactError) {
      console.error('Error loading data:', { companyError, contactError });
    }
  }, [companyError, contactError]);

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