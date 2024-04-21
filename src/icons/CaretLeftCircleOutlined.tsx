import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCaretLeftCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-caret-left-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M22 12A10 10 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10m-2 0a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8m-6-5l-5 5l5 5V7Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiCaretLeftCircleOutlined;