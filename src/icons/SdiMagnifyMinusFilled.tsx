import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiMagnifyMinusFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-magnify-minus', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M9 2a7 7 0 0 1 7 7c0 1.57-.5 3-1.39 4.19l.8.81H16l6 6l-2 2l-6-6v-.59l-.81-.8A6.916 6.916 0 0 1 9 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7M5 8v2h8V8H5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiMagnifyMinusFilled;