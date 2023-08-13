import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiLeftCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-left-circle', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-6.6 4.6L10.8 12l4.6-4.6L14 6l-6 6l6 6l1.4-1.4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiLeftCircleFilled;