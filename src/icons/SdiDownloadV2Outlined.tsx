import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiDownloadV2Outlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-download-v2', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11l-5 5Zm-8 4v-5h2v3h12v-3h2v5H4Z" />
            </svg>
        </IconWrapper>
    );
};

export default SdiDownloadV2Outlined;