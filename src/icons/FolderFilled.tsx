import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiFolderFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-folder', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M10 4H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiFolderFilled;