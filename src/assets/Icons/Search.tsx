import React from 'react';
import { IconProps } from './type';

const Search= ({width = 26, height = 26}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6636 20.346C16.036 20.346 19.5806 16.5778 19.5806 11.9295C19.5806 7.28115 16.036 3.51294 11.6636 3.51294C7.29114 3.51294 3.74658 7.28115 3.74658 11.9295C3.74658 16.5778 7.29114 20.346 11.6636 20.346Z" stroke="url(#paint0_linear_9_2498)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17.2617 17.8809L21.8423 22.7505" stroke="url(#paint1_linear_9_2498)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_9_2498" x1="3.74658" y1="3.51294" x2="20.5482" y2="19.3173" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_9_2498" x1="17.2617" y1="17.8809" x2="22.1222" y2="22.4528" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>

  );
}

export default Search