'use client';
import React from 'react';
import Navbar from '@/components/navbar/navbar';
import { Statisfaction } from '@/components/containerSatisfaction/statisfaction';

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Statisfaction />
      </main>
    </>
  );
}
