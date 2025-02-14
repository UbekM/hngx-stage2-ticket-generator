/** @format */

export default function NavButton({ text }: { text: string }) {
  return (
    <div className="bg-white text-[#0A0C11] uppercase px-[1.3rem] py-[0.5rem] text-center flex justify-center items-center rounded-[0.5rem] border border-[#d5ea0019] hover:bg-[#24A0B5] hover:text-white transition-all duration-300 group">
      {text}
      <span className="ml-2 inline-block transition-transform duration-300 ease-in-out transform group-hover:rotate-[-40deg]">
        ⟶
      </span>
    </div>
  );
}
