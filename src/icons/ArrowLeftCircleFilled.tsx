import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const ArrowLeftCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-arrow-left-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12m16-1h-8l3.5-3.5l-1.42-1.42L6.16 12l5.92 5.92l1.42-1.42L10 13h8v-2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default ArrowLeftCircleFilled;