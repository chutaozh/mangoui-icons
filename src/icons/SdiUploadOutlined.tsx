import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiUploadOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-upload', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M9 16h6v-6h4l-7-7l-7 7h4v6zm3-10.17L14.17 8H13v6h-2V8H9.83L12 5.83zM5 18h14v2H5z" />
            </svg>
        </IconWrapper>
    );
};

export default SdiUploadOutlined;