import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClosed: () => void;
}

const Alert = ({ children, onClosed }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      <strong>{children}</strong>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClosed}
      ></button>
    </div>
  );
};

export default Alert;
