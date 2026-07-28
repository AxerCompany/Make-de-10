import type React from 'react';

export const getCheckoutUrl = (): string => {
  const baseUrl = 'https://pay.wiapy.com/6a6926ade481de2caf3e1de7';
  const search = window.location.search;
  if (!search) return baseUrl;

  const cleanSearch = search.startsWith('?') ? search.slice(1) : search;
  const separator = baseUrl.includes('?') ? '&' : '?';
  return `${baseUrl}${separator}${cleanSearch}`;
};

export const redirectToCheckout = (e?: React.MouseEvent | React.FormEvent) => {
  if (e) {
    e.preventDefault();
  }
  const targetUrl = getCheckoutUrl();
  window.location.href = targetUrl;
};

