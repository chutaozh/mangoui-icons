import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const ArrowUpCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-arrow-up-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M13 18h-2v-8l-3.5 3.5l-1.42-1.42L12 6.16l5.92 5.92l-1.42 1.42L13 10v8M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default ArrowUpCircleOutlined;