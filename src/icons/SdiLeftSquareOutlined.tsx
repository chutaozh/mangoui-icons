import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiLeftSquareOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-left-square', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5a2 2 0 0 0-2-2m0 16H5V5h14v14M15.71 7.41L11.12 12l4.59 4.59L14.29 18l-6-6l6-6l1.42 1.41Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiLeftSquareOutlined;