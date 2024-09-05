import React from 'react';
import Header from '../../components/hearder';

export interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Companies{params.id}</Header>
    </>
  );
}
