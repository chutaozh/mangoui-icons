import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const CaretUpCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-caret-up-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 22a10 10 0 0 0 10-10A10 10 0 0 0 12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10m0-2a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m5-6l-5-5l-5 5h10Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default CaretUpCircleOutlined;