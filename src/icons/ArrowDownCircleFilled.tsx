import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const ArrowDownCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-arrow-down-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M11 6v8l-3.5-3.5l-1.42 1.42L12 17.84l5.92-5.92l-1.42-1.42L13 14V6h-2m1 16A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default ArrowDownCircleFilled;