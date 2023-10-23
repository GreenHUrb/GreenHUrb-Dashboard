import "./styles.scss";
export const ModalHeader = (props: { heading: string }) => {
  return <h2 className="modal_header">{props.heading}</h2>;
};

export const ModalParagraph = (props: { message: string }) => {
  return <p className="modal_paragraph">{props.message}</p>;
};
