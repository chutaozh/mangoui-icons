import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiSwapHorizontalOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-swap-horizontal', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="m21 9l-4-4v3h-7v2h7v3M7 11l-4 4l4 4v-3h7v-2H7v-3Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiSwapHorizontalOutlined;