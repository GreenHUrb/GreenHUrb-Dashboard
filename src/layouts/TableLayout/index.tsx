import "./styles.scss";
import {Checkbox} from "../../components/form/Checkbox";
import {
  ITableHeadContainerProps,
  ITableLayoutProps,
  ITableBodyRowChildProps,
  ITableBodyContainerProps,
  ITableBodyRowProps,
  ITableHeadProps
} from "./types";

export const TableLayout = (props: ITableLayoutProps) => {
  const { children, className } = props;
  return (
    <div className="table_layout_container">
      <table className={className}>{children}</table>
    </div>
  );
};

export const TableHeadContainer = (props: ITableHeadContainerProps) => {
  const { children, checkbox, className } = props;
  return (
    <thead>
      <tr className={className}>
        {checkbox && <TableHead className="table_head_checkbox_container" label={<Checkbox />} />}
        {children}
      </tr>
    </thead>
  );
};

export const TableBodyContainer = (props: ITableBodyContainerProps) => {
  const { children, className } = props;
  return <tbody className={className}>{children}</tbody>;
};

export const TableHead = (props: ITableHeadProps) => {
  const { label, className } = props;
  return <th className={className}>{label}</th>;
};

export const TableBodyRow = (props: ITableBodyRowProps) => {
  const { children, checkbox, className } = props;
  return (
    <tr className={className}>
      {checkbox && (
        <TableBodyRowChild>
          <Checkbox />
        </TableBodyRowChild>
      )}
      {children}
    </tr>
  );
};

export const TableBodyRowChild = (props: ITableBodyRowChildProps) => {
  const { children, className, nonCapitalize } = props;
  return <td className={`${className} ${!nonCapitalize && "capitalize"}`}>{children}</td>;
};
