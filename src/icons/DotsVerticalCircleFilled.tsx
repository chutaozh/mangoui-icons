import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiDotsVerticalCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-dots-vertical-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12m8.5 0a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0-1.5 1.5m0 5.5A1.5 1.5 0 0 0 12 19a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 12 16a1.5 1.5 0 0 0-1.5 1.5m0-11A1.5 1.5 0 0 0 12 8a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 12 5a1.5 1.5 0 0 0-1.5 1.5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiDotsVerticalCircleFilled;