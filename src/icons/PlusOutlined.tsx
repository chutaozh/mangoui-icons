import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const PlusOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-plus', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default PlusOutlined;