import { ReactElement, ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  id?: string;
  selector?: string;
  element?: ReactElement;
  children?: ReactNode;
  target?: Element;
}

export const Portal = ({ id, element, children, selector, target }: Props) => {
  const el =
    target || document.getElementById(id) || document.querySelector(selector);

  if (!el) return null;

  return createPortal(element || children, el);
};
