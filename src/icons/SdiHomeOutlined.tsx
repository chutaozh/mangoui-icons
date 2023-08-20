import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiHomeOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('sdi-home', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiHomeOutlined;