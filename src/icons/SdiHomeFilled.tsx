import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiHomeFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-home', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiHomeFilled;