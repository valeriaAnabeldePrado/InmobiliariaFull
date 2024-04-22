import "./styles.scss";

export default function Button2({ children, href }) {
  return (
    <button
      className="button2 "
      href={href}
      target="_blank"
      aria-label="para comunicarse directamente por Whatsapp"
    >
      {children}
    </button>
  );
}
