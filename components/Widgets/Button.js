export const Button = ({ text, tw }) => {
  return (
    <button
      className={` ${tw} rounded-md bg-primary py-2 px-12 font-medium text-white`}
    >
      {text}
    </button>
  );
};
