import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiDownloadSquareOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-download-square', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M8 17v-2h8v2H8m8-7l-4 4l-4-4h2.5V7h3v3H16M5 3h14a2 2 0 0 1 2 2v14c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2m0 2v14h14V5H5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiDownloadSquareOutlined;