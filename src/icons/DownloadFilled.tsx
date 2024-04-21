import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiDownloadFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-download', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7l7-7Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiDownloadFilled;