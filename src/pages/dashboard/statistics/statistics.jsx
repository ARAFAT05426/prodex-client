import { FaChartBar, FaUsers, FaDollarSign, FaTasks } from "react-icons/fa";
import StatCard from "../../../componets/cards/StatCard/StatCard";
import WelcomeCard from "../../../sections/statistics/welcomeCard/welcomeCard";

const Statistics = () => {
  return (
    <div className="">
      <WelcomeCard />
      <div className="flex flex-wrap gap-3">
        <StatCard
          icon={FaChartBar}
          title="Monthly Increase"
          value="85%"
          description="Statistics"
        />
        <StatCard
          icon={FaUsers}
          title="Total Users"
          value="12,345"
          description="Active Users"
        />
        <StatCard
          icon={FaDollarSign}
          title="Revenue"
          value="$34,567"
          description="Monthly Revenue"
        />
        <StatCard
          icon={FaTasks}
          title="Tasks Completed"
          value="1,234"
          description="Tasks"
        />
      </div>
    </div>
  );
};

export default Statistics;
