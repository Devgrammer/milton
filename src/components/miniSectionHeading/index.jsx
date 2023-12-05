const MiniSecHeading = ({ heading, color, position , icon}) => {
  const colorGenerator = (color) => {
    if (color === "red") {
      return "bg-milton-red";
    } else if (color === "green") {
      return "bg-milton-green";
    } else if (color === "peach") {
      return "bg-milton-peach";
    } else if (color === "bluex") {
      return "bg-milton-bluex";
    }else if (color === "voilet-lite") {
      return "bg-milton-voilet-lite";
    }
  };

  return (
    <div
      className={`mini-heading box-border py-2 px-4  flex text-xs smx:text-md  gap-x-2 rounded-full text-milton-black font-bold ${
        color ? colorGenerator(color) : "bg-milton-blue"
      } w-fit ${position ? "" : "mx-auto"}`}
    >
      {heading} {icon}
    
    </div>
  );
};

export default MiniSecHeading;
