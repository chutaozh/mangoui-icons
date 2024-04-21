import * as React from 'react';
import cn from 'classnames';
import './IconWrapper.css';

interface IconWrapperProps extends React.HTMLAttributes<HTMLElement> { };

export interface BaseIconProps extends Omit<IconWrapperProps, 'children'> { };

export const SVGProps: React.SVGAttributes<SVGSVGElement> = {
    width: "1em",
    height: "1em",
    focusable: "false",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
};

const IconWrapperProps: React.FC<IconWrapperProps> = (props) => {
    const classes = cn('micon', props.className);

    return (
        <span role="img" {...props} className={classes} />
    );
};

export default IconWrapperProps;

