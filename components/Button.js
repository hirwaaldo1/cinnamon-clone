export default function Button({title}) {
  return (
    <button className="border-primary-900  cursor-pointer  m-0 pt-2 px-8 pb-2 border-2 text-white bg-primary-900 text-base">
      {/* <span className=" border-t border-r border-l border-white pt-2 px-8 pb-2 w-full h-full"> */}
        {title}
      {/* </span> */}
    </button>
  );
}
