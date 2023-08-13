import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiLeftOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-left', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M15.41 16.58L10.83 12l4.58-4.59L14 6l-6 6l6 6l1.41-1.42Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiLeftOutlined;