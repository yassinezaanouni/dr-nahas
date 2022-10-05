export const Button = ({ text, tw, handleClick, disabled = false }) => {
  return (
    <button
      onClick={handleClick}
      className={` ${tw} rounded-md border-[1.5px] border-primary bg-primary py-3 px-12 font-medium text-white transition duration-300 hover:bg-white hover:text-primary active:scale-[1.05]`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
