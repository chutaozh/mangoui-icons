import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const IndentIncreaseOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-indent-increase', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M11 17h10v-2H11M3 8v8l4-4m-4 9h18v-2H3v2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default IndentIncreaseOutlined;