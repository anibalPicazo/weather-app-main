export const getConditionStyles = (group: number) => {
    console.log(new String(group).substring(0, 1))
    switch (new String(group).substring(0, 1)) {
        case "8":
            return "bg-gradient-to-b from-gray-300 to-blue-400 text-white";
        case "sunny":
            return "bg-gradient-to-b from-blue-300 to-blue-400 text-white";
        case "5":
            // Lluvia
            return "bg-gradient-to-b from-gray-800 to-sky-500 text-white";
        case "2":
            // Tormenta
            return "bg-gradient-to-b from-gray-800 to-sky-500 text-white";
        case "6":
            // Nieve
            return "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800";
        default:
            return "bg-gradient-to-b from-gray-300 to-blue-400 text-white";
    }
};