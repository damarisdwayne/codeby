import React from 'react';
import { IconProps } from './type';

const YoutubeIcon = ({ width = 15, height = 12 }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5713 2.46554C12.5207 2.26687 12.3767 2.11687 12.212 2.07087C11.9207 1.98887 10.5007 1.80221 7.50065 1.80221C4.50065 1.80221 3.08199 1.98887 2.78799 2.07087C2.62532 2.11621 2.48132 2.26621 2.42998 2.46554C2.35732 2.74821 2.16732 3.93287 2.16732 5.80221C2.16732 7.67154 2.35732 8.85554 2.42998 9.13954C2.48065 9.33754 2.62465 9.48754 2.78865 9.53287C3.08199 9.61554 4.50065 9.80221 7.50065 9.80221C10.5007 9.80221 11.92 9.61554 12.2133 9.53354C12.376 9.4882 12.52 9.3382 12.5713 9.13887C12.644 8.8562 12.834 7.66887 12.834 5.80221C12.834 3.93554 12.644 2.74887 12.5713 2.46554ZM13.8627 2.13421C14.1673 3.32221 14.1673 5.80221 14.1673 5.80221C14.1673 5.80221 14.1673 8.28221 13.8627 9.47021C13.6933 10.1269 13.198 10.6435 12.5707 10.8182C11.4313 11.1355 7.50065 11.1355 7.50065 11.1355C7.50065 11.1355 3.57199 11.1355 2.43065 10.8182C1.80065 10.6409 1.30598 10.1249 1.13865 9.47021C0.833984 8.28221 0.833984 5.80221 0.833984 5.80221C0.833984 5.80221 0.833984 3.32221 1.13865 2.13421C1.30798 1.47754 1.80332 0.960872 2.43065 0.786205C3.57199 0.468872 7.50065 0.468872 7.50065 0.468872C7.50065 0.468872 11.4313 0.468872 12.5707 0.786205C13.2007 0.963539 13.6953 1.47954 13.8627 2.13421ZM6.16732 8.13554V3.46887L10.1673 5.80221L6.16732 8.13554Z" fill="#B7B7B7" />
    </svg>
  )
}

export default YoutubeIcon

