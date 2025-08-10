'use client';

import React, { Suspense } from 'react';
import ClientApplication from './ClientApplication';

export default function ApplicationPage() {
  return (
    <Suspense fallback={<div>加载中...</div>}>
      <ClientApplication />
    </Suspense>
  );
}
