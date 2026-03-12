import React from 'react';

type Props = {
  title: string;
};

export const Header = ({ title }: Props) => {
  return <div>{title}</div>
};