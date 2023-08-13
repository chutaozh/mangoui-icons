import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiDoubleRightOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-double-right', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M5.59 7.41L7 6l6 6l-6 6l-1.41-1.41L10.17 12L5.59 7.41m6 0L13 6l6 6l-6 6l-1.41-1.41L16.17 12l-4.58-4.59Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiDoubleRightOutlined;