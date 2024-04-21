import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiViewListFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-view-list', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M9 5v4h12V5M9 19h12v-4H9m0-1h12v-4H9M4 9h4V5H4m0 14h4v-4H4m0-1h4v-4H4v4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiViewListFilled;