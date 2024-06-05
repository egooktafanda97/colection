import React, { use, useEffect } from 'react';

interface Props {
    children: (props: { state: any }) => React.ReactNode;
    onClick?: (props: { state: any; set: React.Dispatch<React.SetStateAction<any>> }) => void;
    useState: any;
    elemet?: 'button' | 'div';
    className?: string;
    id?: string;
    style?: React.CSSProperties;
    type?: 'button' | 'submit' | 'reset';
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


    return (
        <Element {...propsElement}>
            {props?.children({ state })}
        </Element>
    );
};

export default ElemetState;


// implenent
<ElemetState
  elemet='button'
  type='button'
  useState={{ nama: 'ego' }}
  onClick={({ state, set }) => {
    set({ nama: 'egi' });
  }}
  className='text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-1.5 text-center inline-flex items-center mr-0 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'>
  {({ state }) => (
      <b>{state?.nama}</b>
  )}
</ElemetState>;

