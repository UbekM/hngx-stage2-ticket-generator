/** @format */

export default function Button({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <div
      className={` ${className}  px-[1.3rem] py-[0.75rem] text-center flex justify-center items-center rounded-[0.5rem] border border-[#24A0B5] font-[JejuMyeongjo] text-sm w-full cursor-pointer`}
    >
      {text}
    </div>
  );
}
