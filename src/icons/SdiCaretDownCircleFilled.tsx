import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCaretDownCircleFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-caret-down-circle', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m-5 8l5 5l5-5H7Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiCaretDownCircleFilled;