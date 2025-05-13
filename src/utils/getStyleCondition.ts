export const getConditionStyles = (condition: string) => {

    switch (condition.toLowerCase()) {
        case "cloudy":
            return "bg-gradient-to-b from-gray-800 to-gray-600 text-white";
        case "sunny":
            return "bg-gradient-to-b from-blue-300 to-blue-400 text-white";
        case "rain":
            return "bg-gradient-to-b from-gray-800 to-blue-500 text-white";
        case "snowy":
            return "bg-gradient-to-b from-blue-100 to-blue-300 text-gray-800";
        default:
            return "bg-gradient-to-b from-gray-300 to-blue-400 text-white";
    }
};