import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiMagnifyPlusFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-magnify-plus', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M9 2a7 7 0 0 1 7 7c0 1.57-.5 3-1.39 4.19l.8.81H16l6 6l-2 2l-6-6v-.59l-.81-.8A6.916 6.916 0 0 1 9 16a7 7 0 0 1-7-7a7 7 0 0 1 7-7M8 5v3H5v2h3v3h2v-3h3V8h-3V5H8Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiMagnifyPlusFilled;