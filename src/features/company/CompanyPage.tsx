import React, { useEffect } from 'react';
import { useGetCompanyQuery, useGetContactQuery } from './companyApi';
import CompanyCard from './CompanyCard';
import LoadingSpinner from '../../components/LoadingSpinner';

const CompanyPage = () => {
  const { data: company, isLoading, isError } = useGetCompanyQuery('12');
  const { data: contact } = useGetContactQuery(company?.contactId || '16');

  if (isLoading) return <LoadingSpinner />;
  if (isError) return <div>Error loading company data</div>;

  return (
    <div className="container">
      {company && contact && (
        <CompanyCard company={company} contact={contact} />
      )}
    </div>
  );
};

export default CompanyPage;