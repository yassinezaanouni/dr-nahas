const Rating = ({ tw, value = 5 }) => {
  let fill = "#FDDB25";
  const arr = ["#DBDBDB", "#DBDBDB", "#DBDBDB", "#DBDBDB", "#DBDBDB"];
  for (let i = 0; i < value; i++) {
    arr[i] = fill;
  }
  return (
    <div className={`f-ai-c gap-2 ${tw}`}>
      {arr.map((bg, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="27.252"
          height="26.083"
          viewBox="0 0 27.252 26.083"
        >
          <path
            id="star-solid_1_"
            data-name="star-solid (1)"
            d="M32.664.895,29.337,7.639,21.9,8.724a1.631,1.631,0,0,0-.9,2.781l5.384,5.247L25.1,24.163a1.629,1.629,0,0,0,2.364,1.717l6.658-3.5,6.658,3.5a1.63,1.63,0,0,0,2.364-1.717l-1.273-7.411,5.384-5.247a1.631,1.631,0,0,0-.9-2.781L38.914,7.639,35.587.895A1.631,1.631,0,0,0,32.664.895Z"
            transform="translate(-20.5 0.013)"
            fill={`${bg}`}
          />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
