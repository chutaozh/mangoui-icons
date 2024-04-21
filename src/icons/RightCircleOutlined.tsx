import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiRightCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-right-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10m-2 0a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8a8 8 0 0 0 8-8M8.6 16.6l4.6-4.6l-4.6-4.6L10 6l6 6l-6 6l-1.4-1.4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiRightCircleOutlined;