import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCheckSquareOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-check-square', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5h14m-9 12l-4-4l1.41-1.42L10 14.17l6.59-6.59L18 9"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiCheckSquareOutlined;