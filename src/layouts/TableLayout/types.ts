import { ReactElement } from "react";

interface BaseLayoutProps {
  className?: string;
}

export interface ITableLayoutProps extends BaseLayoutProps {
  children: JSX.Element[];
  className?: string;
}

export interface ITableHeadContainerProps extends BaseLayoutProps {
  children: ReactElement;
  checkbox?: boolean;
}

export interface ITableHeadProps extends BaseLayoutProps {
  label: string | ReactElement;
}

export interface ITableBodyContainerProps extends BaseLayoutProps {
  children: ReactElement;
}

export interface ITableBodyRowProps extends BaseLayoutProps {
  children: ReactElement[];
  checkbox?: boolean;
}

export interface ITableBodyRowChildProps extends BaseLayoutProps {
  children: any;
  nonCapitalize?: boolean;
}
