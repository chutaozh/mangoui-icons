import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiIndentDecreaseOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-indent-decrease', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M11 13h10v-2H11m0-2h10V7H11M3 3v2h18V3M3 21h18v-2H3m0-7l4 4V8m4 9h10v-2H11v2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiIndentDecreaseOutlined;