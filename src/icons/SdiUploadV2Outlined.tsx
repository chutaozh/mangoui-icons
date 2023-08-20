import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiUploadV2Outlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-upload-v2', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M11 16V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16h-2Zm-7 4v-5h2v3h12v-3h2v5H4Z" />
            </svg>
        </IconWrapper>
    );
};

export default SdiUploadV2Outlined;