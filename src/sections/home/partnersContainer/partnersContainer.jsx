const PartnersContainer = () => {
  const partners = [
    "/partners/cannon.png",
    "/partners/huawei.png",
    "/partners/nokia.png",
    "/partners/renesas.png",
    "/partners/samsung.png",
    "/partners/sharp.png",
  ];
  
  return (
    <div className="border-t border-gray-200 py-5">
      <div className="bg-white container mx-auto flex flex-wrap items-center justify-center gap-6">
        {partners.map((partner, i) => (
          <img
            key={i}
            src={partner}
            alt={`Partner ${i + 1}`}
            className=" w-auto max-w-xs"
          />
        ))}
      </div>
    </div>
  );
};

export default PartnersContainer;
