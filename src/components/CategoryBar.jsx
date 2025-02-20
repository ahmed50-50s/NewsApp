
export default function Category({ SelectedCategory, setSelectedCategory }) {
  const categories = [
    "Politics",
    "World",
    "Science",
    "Tech",
    "Business",
    "Travel",
    "Climate",
    "Life cycle",
    "Food",
    "Sports",
  ];

  const handleClick = (categ) => {
    setSelectedCategory(categ);
  };

  return (
    <div className="flex justify-center">
      <div className="w-[90%] bg-gray-800 text-white rounded-lg overflow-x-auto">
        <ul className="flex space-x-10 p-3 whitespace-nowrap">
          {categories.map((cat, index) => (
            <li
              key={index}
              className={`cursor-pointer px-4 py-2 rounded-lg text-sm sm:text-base transition-all
                ${
                  SelectedCategory === cat
                    ? "bg-green-700 text-white"
                    : "hover:bg-green-900"
                }`}
              onClick={() => handleClick(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
