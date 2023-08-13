import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCaretUpCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-caret-up-circle', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 22A10 10 0 0 1 2 12A10 10 0 0 1 12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10m5-8l-5-5l-5 5h10Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiCaretUpCircleFilled;