'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Button from './button';
import CompanyFormModal from './company-form-modal';

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button onClick={() => setShow(true)}>Add Company</Button>
      <CompanyFormModal
        onSubmit={console.log}
        show={show}
        onClose={() => setShow(false)}
      />
    </>
  );
}
