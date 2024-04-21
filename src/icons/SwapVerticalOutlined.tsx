import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiSwapVerticalOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-swap-vertical', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M9 3L5 7h3v7h2V7h3m3 10v-7h-2v7h-3l4 4l4-4h-3Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiSwapVerticalOutlined;