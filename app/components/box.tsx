/** @format */

export default function Box({
  text,
  children,
  onClick,
}: {
  text: string;
  children?: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <div className={`p-3 rounded-2xl ${text} border `} onClick={onClick}>
      {children}
    </div>
  );
}
