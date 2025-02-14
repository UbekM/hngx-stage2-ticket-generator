/** @format */

export default function Box({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  return <div className={`p-3 rounded-2xl ${text} border `}>{children}</div>;
}
