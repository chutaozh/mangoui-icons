import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiArrowDownThinCircleOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-arrow-down-thin-circle', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 20.03c4.41 0 8.03-3.62 8.03-8.03c0-4.41-3.62-8.03-8.03-8.03c-4.41 0-8.03 3.62-8.03 8.03c0 4.41 3.62 8.03 8.03 8.03M12 22C6.46 22 2 17.54 2 12S6.46 2 12 2s10 4.46 10 10s-4.46 10-10 10m-1-8.46H8l4 3.96l4-3.96h-3V6.5h-2"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiArrowDownThinCircleOutlined;