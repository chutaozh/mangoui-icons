import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const UpOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-up', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default UpOutlined;