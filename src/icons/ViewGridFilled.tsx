import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiViewGridFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-view-grid', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M3 11h8V3H3m0 18h8v-8H3m10 8h8v-8h-8m0-10v8h8V3"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiViewGridFilled;