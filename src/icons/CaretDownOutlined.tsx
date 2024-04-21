import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const CaretDownOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-caret-down', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="m7 10l5 5l5-5H7z" />
            </svg>
        </IconWrapper>
    );
};

export default CaretDownOutlined;