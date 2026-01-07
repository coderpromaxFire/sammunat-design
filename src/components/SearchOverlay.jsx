import { searchIndex } from "../search/searchIndex";

export default function SearchOverlay({ query, onClose }) {
  if (!query) return null;

  const results = searchIndex.filter(item =>
    item.keywords.some(keyword =>
      keyword.toLowerCase().includes(query.toLowerCase())
    ) ||
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-start justify-center pt-24">
      <div className="bg-white w-[90%] max-w-xl rounded-2xl p-5 shadow-xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-[#534D56]">
            Search results for “{query}”
          </h3>
          <button
            onClick={onClose}
            className="text-sm text-[#1B998B]"
          >
            Close
          </button>
        </div>

        {results.length === 0 ? (
          <p className="text-sm text-[#656176]">
            No results found.
          </p>
        ) : (
          <ul className="space-y-3">
            {results.map((item, i) => (
              <li
                key={i}
                onClick={() => {
                  document
                    .getElementById(item.sectionId)
                    ?.scrollIntoView({ behavior: "smooth" });
                  onClose();
                }}
                className="
                  cursor-pointer
                  p-3 rounded-lg
                  hover:bg-[#F8F1FF]
                "
              >
                <p className="font-medium text-[#534D56]">
                  {item.title}
                </p>
                <p className="text-xs text-[#656176]">
                  Keywords: {item.keywords.join(", ")}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
