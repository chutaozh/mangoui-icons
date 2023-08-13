import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCaretRightCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-caret-right-circle', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12m2 0a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8m6 5l5-5l-5-5v10Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiCaretRightCircleOutlined;