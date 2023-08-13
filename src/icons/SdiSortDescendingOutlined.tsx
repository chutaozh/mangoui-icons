import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiSortDescendingOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-sort-descending', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M11 9h9v2h-9zm0 4h7v2h-7zm0-8h11v2H11zm0 12h5v2h-5zm-6 3h2V8h3L6 4L2 8h3z" />
            </svg>
        </IconWrapper>
    );
};

export default SdiSortDescendingOutlined;