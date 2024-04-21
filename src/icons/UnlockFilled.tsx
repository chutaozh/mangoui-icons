import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const UnlockFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-unlock', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M18 8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h9V6a3 3 0 0 0-3-3a3 3 0 0 0-3 3H7a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6 9a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default UnlockFilled;