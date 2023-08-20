import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiUploadFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-upload', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M5 20h14v-2H5v2zm0-10h4v6h6v-6h4l-7-7l-7 7z" />
            </svg>
        </IconWrapper>
    );
};

export default SdiUploadFilled;