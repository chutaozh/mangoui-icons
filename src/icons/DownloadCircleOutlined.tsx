import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const DownloadCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-download-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M8 17v-2h8v2H8m8-7l-4 4l-4-4h2.5V6h3v4H16m-4-8c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8s8-3.58 8-8s-3.58-8-8-8Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default DownloadCircleOutlined;