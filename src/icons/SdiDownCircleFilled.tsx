import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiDownCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-down-circle', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M6 10l6 6l6-6l-1.4-1.4l-4.6 4.6l-4.6-4.6L6 10Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiDownCircleFilled;