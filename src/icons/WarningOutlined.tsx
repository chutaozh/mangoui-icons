import * as React from 'react';
import cn from 'classnames';
import IconWrapper, { BaseIconProps, SVGProps } from './IconWrapper';

const SdiWarningOutlined: React.FC<BaseIconProps> = (props) => {
    const classes = cn('micon-warning', props.className);

    return (
        <IconWrapper {...props} className={classes}>
            <svg {...SVGProps}>
                <path fill="currentColor" d="M12 2L1 21h22M12 6l7.53 13H4.47M11 10v4h2v-4m-2 6v2h2v-2"></path>
            </svg>
        </IconWrapper>
    );
};

export default SdiWarningOutlined;