import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiMinusSquareOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-minus-square', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 19V5H5v14h14m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-2 8v2H7v-2h10Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiMinusSquareOutlined;