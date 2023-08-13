import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowRightThinOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-arrow-right-thin', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M14 16.94v-4H5.08l-.03-2.01H14V6.94l5 5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowRightThinOutlined;