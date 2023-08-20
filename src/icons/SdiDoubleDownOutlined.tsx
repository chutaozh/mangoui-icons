import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiDoubleDownOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-double-down', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M16.59 5.59L18 7l-6 6l-6-6l1.41-1.41L12 10.17l4.59-4.58m0 6L18 13l-6 6l-6-6l1.41-1.41L12 16.17l4.59-4.58Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiDoubleDownOutlined;