export const Button = ({ text, classes }) => {
  return (
    <button
      className={` ${classes} rounded-md bg-primary py-2 px-12 font-medium text-white`}
    >
      {text}
    </button>
  );
};
