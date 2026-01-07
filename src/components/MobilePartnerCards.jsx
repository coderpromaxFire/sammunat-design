export default function MobilePartnerCards({ items }) {
  return (
    <div className="grid grid-cols-2 gap-4 px-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="
            bg-[#F8F1FF]
            rounded-xl
            p-3
            shadow
            flex flex-col items-center text-center
          "
        >
          <img
            src={item.image}
            alt={item.text}
            className="w-full h-24 object-cover rounded-lg"
          />

          <p className="mt-2 text-xs font-medium text-[#534D56]">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
