import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const HorizontalAlignCenterOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-horizontal-align-center', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 16v-3h4v-2h-4V8l-4 4l4 4M5 8v3H1v2h4v3l4-4l-4-4m6 12h2V4h-2v16Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default HorizontalAlignCenterOutlined;