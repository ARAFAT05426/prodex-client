import { FaDollarSign, FaRegHeart, FaTasks } from "react-icons/fa";
import StatCard from "../../../componets/cards/StatCard/StatCard";
import WelcomeCard from "../../../sections/statistics/welcomeCard/welcomeCard";
import useRefetch from "../../../hooks/server/useRefetch";
import useAuth from "../../../hooks/providers/useAuth";
import { TbCheckupList } from "react-icons/tb";
import { HiOutlineShoppingBag } from "react-icons/hi";
import ManageProducts from "./products/manageProducts";

const Statistics = () => {
  const { user } = useAuth();
  const { data, loading, refetch } = useRefetch(
    `/products/?author=${user?.email}`
  );
  console.log(data);
  return (
    <>
      <WelcomeCard />
      <div className="flex flex-wrap gap-3">
        <StatCard
          icon={TbCheckupList}
          title="Products"
          value="85"
          description="Products Added"
        />
        <StatCard
          icon={HiOutlineShoppingBag}
          title="Orders"
          value="12"
          description="Placed Order"
        />
        <StatCard
          icon={FaRegHeart}
          title="Wishlist"
          value="2"
          description="Saved to wishlist"
        />
      </div>
      <ManageProducts />
    </>
  );
};

export default Statistics;
