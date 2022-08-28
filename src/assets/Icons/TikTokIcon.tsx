import React from 'react';
import { IconProps } from './type';

const TikTokIcon = ({ width = 13, height = 13 }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.88555 0.69397C8.08715 2.42776 9.05485 3.46144 10.7373 3.5714V5.52146C9.76229 5.61677 8.90823 5.29786 7.91487 4.69672V8.34391C7.91487 12.9771 2.86378 14.425 0.833084 11.1041C-0.471841 8.96705 0.327243 5.21722 4.51327 5.06694V7.12329C4.19437 7.17461 3.85347 7.25525 3.5419 7.36155C2.61086 7.67679 2.08303 8.26694 2.22965 9.30795C2.51189 11.302 6.17008 11.8921 5.86584 7.99569V0.697635H7.88555V0.69397Z" fill="#B7B7B7" />
    </svg>

  )
}

export default TikTokIcon
