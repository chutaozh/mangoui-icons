import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiMicrophoneOffFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-microphone-off', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 11c0 1.19-.34 2.3-.9 3.28l-1.23-1.23c.27-.62.43-1.31.43-2.05H19m-4 .16L9 5.18V5a3 3 0 0 1 3-3a3 3 0 0 1 3 3v6.16M4.27 3L21 19.73L19.73 21l-4.19-4.19c-.77.46-1.63.77-2.54.91V21h-2v-3.28c-3.28-.49-6-3.31-6-6.72h1.7c0 3 2.54 5.1 5.3 5.1c.81 0 1.6-.19 2.31-.52l-1.66-1.66L12 14a3 3 0 0 1-3-3v-.72L3 4.27L4.27 3Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiMicrophoneOffFilled;