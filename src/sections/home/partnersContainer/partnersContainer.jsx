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
    <div className="border-t">
      <div className="bg-white container mx-auto flex flex-wrap items-center justify-between min-h-44">
        {partners?.map((partner, i) => (
          <img key={i} src={partner} alt={i} />
        ))}
      </div>
    </div>
  );
};
export default PartnersContainer;
