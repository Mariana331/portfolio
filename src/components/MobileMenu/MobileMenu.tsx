import css from "./MobileMenu.module.css";

interface MobileMenuProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function MobileMenu({ onClose, isOpen }: MobileMenuProps) {
  return <div className={css.mobile}></div>;
}
