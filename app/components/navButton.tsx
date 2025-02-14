/** @format */

export default function NavButton({ text }: { text: string }) {
  return (
    <div className="bg-white text-[#0A0C11] uppercase px-[1.3rem] py-[0.5rem] text-center flex justify-center items-center rounded-[0.5rem] border border-[#d5ea0019]">
      {text}
    </div>
  );
}
