import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowRightCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-arrow-right-circle', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M6 13h8l-3.5 3.5l1.42 1.42L17.84 12l-5.92-5.92L10.5 7.5L14 11H6v2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowRightCircleFilled;