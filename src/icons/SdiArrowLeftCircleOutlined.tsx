import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowLeftCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-arrow-left-circle', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M18 11v2h-8l3.5 3.5l-1.42 1.42L6.16 12l5.92-5.92L13.5 7.5L10 11h8M2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12m2 0a8 8 0 0 0 8 8a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowLeftCircleOutlined;