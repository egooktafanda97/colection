import React, { useEffect } from 'react';

interface Props {
    children: (props: { state: any; set?: React.Dispatch<React.SetStateAction<any>> }) => React.ReactNode;
    onClick?: (props: { state: any; set: React.Dispatch<React.SetStateAction<any>> }) => void;
    useState: any;
    elemet?: 'button' | 'div';
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    type?: 'button' | 'submit' | 'reset';
    init?: (props: { state: any; set: React.Dispatch<React.SetStateAction<any>> }) => void;
}

const ElemetState: React.FC<Props> = (props: Props) => {
    const Element = props?.elemet ?? 'div';
    const set = (data: any) => {
        setState({ ...state, ...data })
    }
    const propsElement = {
        className: props?.className,
        id: props?.id,
        style: props?.style,
        type: props?.type,
        onClick: () => props?.onClick && props.onClick({ state, set })
    };
    const [state, setState] = React.useState(props?.useState ?? null);

    useEffect(() => {
        setState(props?.useState ?? null);
    }, [props?.useState]);
    useEffect(() => {
        if (props.init)
            props.init({ state, set })
    }, [])


    return (
        <Element {...propsElement}>
            {props?.children({ state, set })}
        </Element>
    );
};

export default ElemetState;
