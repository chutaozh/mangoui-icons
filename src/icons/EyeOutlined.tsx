import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiEyeOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-eye', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiEyeOutlined;