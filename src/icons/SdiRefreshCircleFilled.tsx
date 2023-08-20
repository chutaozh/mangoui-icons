import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiRefreshCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-refresh-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m6 9h-5l1.81-1.81A3.94 3.94 0 0 0 12 8a4 4 0 1 0 3.86 5h2.05A6 6 0 1 1 12 6a5.91 5.91 0 0 1 4.22 1.78L18 6Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiRefreshCircleFilled;