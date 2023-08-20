import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiWarningFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-warning', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M13 14h-2V9h2m0 9h-2v-2h2M1 21h22L12 2L1 21Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiWarningFilled;