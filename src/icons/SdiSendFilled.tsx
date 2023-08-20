import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiSendFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-send', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="m2 21l21-9L2 3v7l15 2l-15 2v7Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiSendFilled;