import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const DotsHorizontalCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-dots-horizontal-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 8.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m-5.5 0A1.5 1.5 0 0 0 5 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 8 12a1.5 1.5 0 0 0-1.5-1.5m11 0A1.5 1.5 0 0 0 16 12a1.5 1.5 0 0 0 1.5 1.5A1.5 1.5 0 0 0 19 12a1.5 1.5 0 0 0-1.5-1.5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default DotsHorizontalCircleFilled;