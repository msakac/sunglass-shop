import React from "react";


interface ISvgInputProps {
  id: string;
  type: string;
  value: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  classes?: string;
  containerClasses?: string;
  children: React.ReactNode;
  inputProps: {
    [x: string]: any;
  };
}
/** 
 * Creates Input element with SVG image
 * @params id: input id
 * @params type: input type(text,email,password..)
 * @params classes: tailwind classes for input style
 * @params containerClasses: tailwind classes for input wrapper style
 * @params children: SVG image component. Can be found in Vector component folder
 * @params inputProps: Object that holds all props for input element
 */
export default function SvgInput({id, type, classes, containerClasses, children, inputProps, value, onChange} : ISvgInputProps) {
  return (
    <div className={`flex gap-3 group ${containerClasses}`}>
      {children}
      <input id={id} type={type} value={value} onChange={onChange} {...inputProps} className={classes} />
    </div>
  );
}
