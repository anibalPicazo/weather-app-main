export const getConditionStyles = (group: number) => {
    if (group === 800) {
        return "bg-blue-400 text-white"
    }
    switch (new String(group).substring(0, 1)) {
        case "8":
            return "bg-gradient-to-b from-gray-300 to-blue-400 text-white";
        case "3":
            return "bg-gradient-to-b from-gray-600 to-sky-500 text-white";
        case "5":
            // Lluvia
            return "bg-gradient-to-b from-gray-900 to-sky-500 text-white";
        case "2":
            // Tormenta
            return "bg-gradient-to-b from-gray-700 to-gray-900 text-white";
        case "6":
            // Nieve
            return "bg-gradient-to-b from-gray-100 to-gray-300 text-gray-800";
        case "7":
            // Atmosfera
            return "bg-gradient-to-b from-stone-700 to-gray-400 text-white";
        default:
            return "bg-gradient-to-b from-gray-300 to-blue-400 text-white";
    }
};