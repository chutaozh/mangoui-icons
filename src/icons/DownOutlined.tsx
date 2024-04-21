import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const DownOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-down', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6l1.41-1.42Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default DownOutlined;