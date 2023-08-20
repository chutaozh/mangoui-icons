import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowUpThinOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-arrow-up-thin', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M7.03 9.97h4v8.92l2.01.03V9.97h3.99l-5-5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowUpThinOutlined;