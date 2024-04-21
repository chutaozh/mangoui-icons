import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiLeftSquareFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-left-square', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m-3.29 13.59L14.29 18l-6-6l6-6l1.42 1.41L11.12 12l4.59 4.59Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiLeftSquareFilled;