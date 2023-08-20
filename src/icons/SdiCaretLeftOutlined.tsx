import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCaretLeftOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-caret-left', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="m14 7l-5 5l5 5V7z" />
            </svg>
        </IconWrapper>
    );
};

export default SdiCaretLeftOutlined;