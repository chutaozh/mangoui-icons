import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiMinusOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-minus', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 13H5v-2h14v2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiMinusOutlined;