import { IDialog } from "../types/IDialog";

export function Dialog({ children }: IDialog) {
  return (
    <dialog open className="modal">
      <div className="cart">{children}</div>
    </dialog>
  );
}
