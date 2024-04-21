import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const RightOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-right', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.42Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default RightOutlined;