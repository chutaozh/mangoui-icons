import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiDoubleUpOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-double-up', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M7.41 18.41L6 17l6-6l6 6l-1.41 1.41L12 13.83l-4.59 4.58m0-6L6 11l6-6l6 6l-1.41 1.41L12 7.83l-4.59 4.58Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiDoubleUpOutlined;