import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowRightCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-arrow-right-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M6 13v-2h8l-3.5-3.5l1.42-1.42L17.84 12l-5.92 5.92l-1.42-1.42L14 13H6m16-1a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-2 0a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowRightCircleOutlined;