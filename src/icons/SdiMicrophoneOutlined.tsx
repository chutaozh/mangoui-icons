import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiMicrophoneOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-microphone', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M17.3 11c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72m-8.2-6.1c0-.66.54-1.2 1.2-1.2c.66 0 1.2.54 1.2 1.2l-.01 6.2c0 .66-.53 1.2-1.19 1.2c-.66 0-1.2-.54-1.2-1.2M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiMicrophoneOutlined;