import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiCommentProcessingFilled: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-comment-processing', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m8-11V9h-2v2h2m-4 0V9h-2v2h2m-4 0V9H7v2h2Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiCommentProcessingFilled;