import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowUpOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-arrow-up', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M13 20h-2V8l-5.5 5.5l-1.42-1.42L12 4.16l7.92 7.92l-1.42 1.42L13 8v12Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowUpOutlined;