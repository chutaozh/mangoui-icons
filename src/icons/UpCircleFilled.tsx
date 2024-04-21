import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const UpCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-up-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10M7.4 15.4l4.6-4.6l4.6 4.6L18 14l-6-6l-6 6l1.4 1.4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default UpCircleFilled;