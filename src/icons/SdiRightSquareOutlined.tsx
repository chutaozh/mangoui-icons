import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiRightSquareOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-right-square', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14M8.29 16.59L12.88 12L8.29 7.41L9.71 6l6 6l-6 6l-1.42-1.41Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiRightSquareOutlined;