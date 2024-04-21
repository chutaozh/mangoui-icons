import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SortAscendingOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-sort-ascending', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="m6 20l4-4H7V4H5v12H2zm5-12h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5z" />
            </svg>
        </IconWrapper>
    );
};

export default SortAscendingOutlined;