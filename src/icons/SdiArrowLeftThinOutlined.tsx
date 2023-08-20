import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowLeftThinOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-arrow-left-thin', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M10.05 16.94v-4h8.92l.03-2.01h-8.95V6.94l-5 5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowLeftThinOutlined;