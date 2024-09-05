import React from 'react';
import Header from '../components/hearder';
import Toolbar from '../components/toolbar';
import SearchInput from '../components/search-input';
import AddCompanyButton from '../components/add-company-button';
import CompanyTable from '../components/company-table';
import CompanyRow from '../components/company-row';
import { Status } from '../components/status-label';

export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Companies</Header>
      <main>
        <Toolbar action={<AddCompanyButton />}>
          <SearchInput />
        </Toolbar>
        <CompanyTable>
          <CompanyRow
            id={1}
            category={'Products'}
            company={'Colos'}
            status={Status.Pending}
            promotion={false}
            country="UK"
            joinedDate="03.04.2023"
          />
        </CompanyTable>
      </main>
    </>
  );
}
