import React from 'react';
import { IconProps } from './type';

const User= ({width = 26, height = 26}: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.2267 22.7508C17.2238 22.7508 21.2747 18.4443 21.2747 13.1319C21.2747 7.81948 17.2238 3.51294 12.2267 3.51294C7.22964 3.51294 3.17871 7.81948 3.17871 13.1319C3.17871 18.4443 7.22964 22.7508 12.2267 22.7508Z" stroke="url(#paint0_linear_9_2506)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12.227 16.3383C14.3091 16.3383 15.997 14.5439 15.997 12.3304C15.997 10.1169 14.3091 8.32251 12.227 8.32251C10.1449 8.32251 8.45703 10.1169 8.45703 12.3304C8.45703 14.5439 10.1449 16.3383 12.227 16.3383Z" stroke="url(#paint1_linear_9_2506)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6.1748 20.2856C6.7421 19.0977 7.60774 18.0999 8.67577 17.403C9.74379 16.7061 10.9725 16.3372 12.2257 16.3372C13.4788 16.3372 14.7075 16.7061 15.7755 17.403C16.8436 18.0999 17.7092 19.0977 18.2765 20.2856" stroke="url(#paint2_linear_9_2506)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      <defs>
        <linearGradient id="paint0_linear_9_2506" x1="3.17871" y1="3.51294" x2="22.3806" y2="21.5751" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient id="paint1_linear_9_2506" x1="8.45703" y1="8.32251" x2="16.4578" y2="15.8484" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
        <linearGradient id="paint2_linear_9_2506" x1="6.1748" y1="16.3372" x2="8.50343" y2="23.4742" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" />
          <stop offset="1" stop-color="white" />
        </linearGradient>
      </defs>
    </svg>

  )
}

export default User