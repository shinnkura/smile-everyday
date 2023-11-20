export const getColorClass = (color: string) => {
  switch (color) {
    case "red":
      return "bg-red-300";
    case "green":
      return "bg-green-300";
    case "blue":
      return "bg-blue-300";
    default:
      return "bg-gray-300";
  }
};
