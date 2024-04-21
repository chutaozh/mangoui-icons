import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const ArrowDownThinOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-arrow-down-thin', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M7.03 13.92h4V5l2.01-.03v8.95h3.99l-5 5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default ArrowDownThinOutlined;