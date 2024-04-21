import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowDownOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-arrow-down', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M11 4h2v12l5.5-5.5l1.42 1.42L12 19.84l-7.92-7.92L5.5 10.5L11 16V4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowDownOutlined;