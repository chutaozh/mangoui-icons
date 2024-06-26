import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const LockOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-lock', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 17a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m6 3V10H6v10h12m0-12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V10c0-1.11.89-2 2-2h1V6a5 5 0 0 1 5-5a5 5 0 0 1 5 5v2h1m-6-5a3 3 0 0 0-3 3v2h6V6a3 3 0 0 0-3-3Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default LockOutlined;