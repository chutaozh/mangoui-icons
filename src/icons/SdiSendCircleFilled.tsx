import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiSendCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-send-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2M8 7.71v3.34l7.14.95l-7.14.95v3.34L18 12L8 7.71Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiSendCircleFilled;