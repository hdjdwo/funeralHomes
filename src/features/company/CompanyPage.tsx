import React from 'react';
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

  if (companyLoading || contactLoading) return <div>Loading...</div>;
  if (companyError || contactError || !company || !contact) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="container">
      <CompanyCard 
        company={company} 
        contact={contact} 
        refetch={refetchCompany} 
      />
    </div>
  );
};

export default CompanyPage;