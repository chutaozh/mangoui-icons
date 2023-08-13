import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCaretLeftCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-caret-left-circle', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-8-5l-5 5l5 5V7Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiCaretLeftCircleFilled;