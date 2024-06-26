import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const PlusSquareOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-plus-square', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M19 19V5H5v14h14m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-8 4h2v4h4v2h-4v4h-2v-4H7v-2h4V7Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default PlusSquareOutlined;