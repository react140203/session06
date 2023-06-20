import React from "react";
import { Helmet } from "react-helmet-async";
interface HeaderProps {
  title: string;
  desc?: string;
}
export const Header = ({ title, desc }: HeaderProps) => {
  return (
    <Helmet>
      <title>SITE MAN - {title}</title>
      {desc && <meta name="descriptions" content={desc}></meta>}
    </Helmet>
  );
};
