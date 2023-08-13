import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiFolderOpenOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-folder-open', { [props.className || '']: !!props.className });

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M6.1 10L4 18V8h17a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h15c.9 0 1.7-.6 1.9-1.5l2.3-8.5H6.1M19 18H6l1.6-6h13L19 18Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiFolderOpenOutlined;