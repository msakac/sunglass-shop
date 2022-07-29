import React from "react";

interface ITitleProps{
    title: string
}

export default function Title({title} : ITitleProps) {
  return <h2 className="text-4xl dark:text-white my-[3vw]">{title}</h2>;
}
