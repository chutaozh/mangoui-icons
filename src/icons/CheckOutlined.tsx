import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const CheckOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-check', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59L21 7Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default CheckOutlined;