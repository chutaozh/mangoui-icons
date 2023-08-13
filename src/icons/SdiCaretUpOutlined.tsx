import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCaretUpOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-caret-up', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="m7 14l5-5l5 5H7z" />
            </svg>
        </IconWrapper>
    );
};

export default SdiCaretUpOutlined;