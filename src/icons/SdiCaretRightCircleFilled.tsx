import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCaretRightCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-caret-right-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12m8 5l5-5l-5-5v10Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiCaretRightCircleFilled;