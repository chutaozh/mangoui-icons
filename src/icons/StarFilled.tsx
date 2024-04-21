import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const StarFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-star', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2L9.19 8.62L2 9.24l5.45 4.73L5.82 21L12 17.27Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default StarFilled;