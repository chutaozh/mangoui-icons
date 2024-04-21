import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiVerticalAlignCenterOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-vertical-align-center', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M8 19h3v4h2v-4h3l-4-4l-4 4m8-14h-3V1h-2v4H8l4 4l4-4M4 11v2h16v-2H4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiVerticalAlignCenterOutlined;