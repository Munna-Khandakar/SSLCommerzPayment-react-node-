
import { useEffect } from 'react';


export const groupBy = function (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const useOutsideHandler = (ref: any, toggle: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref && ref.current && !ref.current.contains(event.target)) {
        toggle();
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, toggle]);
};

export function addToCart(product) {
  const date = new Date();
  date.setTime(date.getTime() + 900 * 1000);
  setCookie('checkout_product', true, date.toUTCString());
  localStorage.setItem('checkout_product', JSON.stringify(product));
}

function setCookie(name, value, expires) {
  if (typeof window !== 'undefined') {
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
  }
}