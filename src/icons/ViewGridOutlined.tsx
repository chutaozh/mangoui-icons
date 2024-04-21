import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiViewGridOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-view-grid', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M3 11h8V3H3m2 2h4v4H5m8 12h8v-8h-8m2 2h4v4h-4M3 21h8v-8H3m2 2h4v4H5m8-16v8h8V3m-2 6h-4V5h4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiViewGridOutlined;