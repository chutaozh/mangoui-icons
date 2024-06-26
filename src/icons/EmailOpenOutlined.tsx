import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const EmailOpenOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-email-open', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M21.03 6.29L12 .64L2.97 6.29C2.39 6.64 2 7.27 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-.73-.39-1.36-.97-1.71M20 18H4v-8l8 5l8-5v8m-8-5L4 8l8-5l8 5l-8 5Z"></path>
            </svg>
        </IconWrapper>
    );
};

export default EmailOpenOutlined;