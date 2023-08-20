import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowLeftOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-arrow-left', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11h12Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowLeftOutlined;