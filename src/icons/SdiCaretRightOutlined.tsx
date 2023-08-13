import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCaretRightOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-caret-right', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="m10 17l5-5l-5-5v10z" />
            </svg>
        </IconWrapper>
    );
};

export default SdiCaretRightOutlined;