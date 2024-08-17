import { CiDiscount1 } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { TbRotateClockwise2 } from "react-icons/tb";
import { HiOutlineRocketLaunch } from "react-icons/hi2";

const ServicesContainer = () => {
  const services = [
    {
      icon: HiOutlineRocketLaunch,
      title: "Fast Shipping",
    },
    {
      icon: TfiHeadphoneAlt,
      title: "24/7 Customer Support",
    },
    {
      icon: TbRotateClockwise2,
      title: "Refund Guarantee",
    },
    {
      icon: CiDiscount1,
      title: "Member Discount",
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-between gap-3 md:gap-5 max-w-full lg:max-w-7xl mx-auto min-h-40 py-3">
      {services.map((service, i) => {
        const Icon = service?.icon;
        return (
          <div key={i} className="flex items-center gap-2">
            <Icon className="text-5xl text-blue-700 icon-thin" />
            <h1 className="text-xl font-montserrat font-medium">{service?.title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default ServicesContainer;
