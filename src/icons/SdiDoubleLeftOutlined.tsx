import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiDoubleLeftOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-double-left', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M18.41 7.41L17 6l-6 6l6 6l1.41-1.41L13.83 12l4.58-4.59m-6 0L11 6l-6 6l6 6l1.41-1.41L7.83 12l4.58-4.59Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiDoubleLeftOutlined;