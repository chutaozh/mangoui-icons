import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowRightOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-arrow-right', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11H4Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowRightOutlined;