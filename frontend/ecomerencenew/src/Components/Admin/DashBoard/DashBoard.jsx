import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import {
  FiTrendingUp,
  FiTrendingDown,
  FiShoppingBag,
  FiPieChart,
  FiDollarSign,
  FiPlus,
} from "react-icons/fi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import OrderTable from "./OrderTable";

// Sample data for the cards
const cardData = [
  {
    title: "New Orders",
    value: "1,390",
    trend: {
      value: "+32.40%",
      isPositive: true,
      period: "Increased last month",
    },
    icon: FiShoppingBag,
    chartColor: "blue",
    chartBars: [20, 35, 25, 40, 30, 45, 35, 50],
  },
  {
    title: "Sales",
    value: "$57,890",
    trend: {
      value: "-4.40%",
      isPositive: false,
      period: "Decreased last month",
    },
    icon: FiPieChart,
    chartColor: "green",
    chartBars: [30, 25, 35, 40, 20, 45, 30, 35],
  },
  {
    title: "Revenue",
    value: "$12,390",
    trend: {
      value: "+32.40%",
      isPositive: true,
      period: "Increased last month",
    },
    icon: FiDollarSign,
    chartColor: "purple",
    chartBars: [15, 25, 20, 35, 30, 40, 25, 45],
  },
  {
    title: "Customers",
    value: "2,847",
    trend: {
      value: "+18.20%",
      isPositive: true,
      period: "Increased last month",
    },
    icon: FiShoppingBag,
    chartColor: "orange",
    chartBars: [25, 30, 20, 40, 35, 25, 45, 30],
  },
  {
    title: "Products",
    value: "486",
    trend: {
      value: "+5.60%",
      isPositive: true,
      period: "Increased last month",
    },
    icon: FiShoppingBag,
    chartColor: "red",
    chartBars: [35, 20, 30, 25, 40, 35, 20, 45],
  },
  {
    title: "Conversion",
    value: "3.2%",
    trend: {
      value: "-2.10%",
      isPositive: false,
      period: "Decreased last month",
    },
    icon: FiPieChart,
    chartColor: "teal",
    chartBars: [40, 30, 35, 20, 45, 25, 35, 30],
  },
];

// Mini chart component
const MiniChart = ({ bars, color }) => {
  const maxHeight = Math.max(...bars);

  const getColorClass = (color) => {
    switch (color) {
      case "blue":
        return "bg-blue-500";
      case "green":
        return "bg-green-500";
      case "purple":
        return "bg-purple-500";
      case "orange":
        return "bg-orange-500";
      case "red":
        return "bg-red-500";
      case "teal":
        return "bg-teal-500";
      default:
        return "bg-blue-500";
    }
  };

  return (
    <div className="flex h-12 items-end space-x-1">
      {bars.map((height, index) => (
        <div
          key={index}
          className={`w-2 rounded-t ${getColorClass(color)}`}
          style={{ height: `${(height / maxHeight) * 100}%` }}
        />
      ))}
    </div>
  );
};

// Individual card component
const StatCard = ({
  title,
  value,
  trend,
  icon: Icon,
  chartColor,
  chartBars,
}) => {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="rounded-lg bg-gray-100 p-2">
            <Icon size={20} className="text-gray-600" />
          </div>
          <div>
            <h3 className="mb-1 text-sm font-medium text-gray-500">{title}</h3>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
        <div className="flex-shrink-0">
          <MiniChart bars={chartBars} color={chartColor} />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {trend.isPositive ? (
          <FiTrendingUp size={16} className="text-green-500" />
        ) : (
          <FiTrendingDown size={16} className="text-red-500" />
        )}
        <span
          className={`text-sm font-medium ${
            trend.isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend.value}
        </span>
        <span className="text-sm text-gray-500">{trend.period}</span>
      </div>
    </div>
  );
};

// Welcome header component
const WelcomeHeader = () => {
  return (
    <div className="mb-8 rounded-xl border border-gray-100 bg-white p-8 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h1 className="mb-2 text-3xl font-bold text-gray-900 md:w-3/4 lg:w-1/2 xl:w-1/3">
            {`Good ${new Date().getHours() < 12 ? "Morning" : new Date().getHours() < 17 ? "Afternoon" : "Evening"}, Cameron`}{" "}
            👋
          </h1>
          <p className="mb-6 text-gray-600">
            Here's what happening on your store today. See the statistics at
            once.
          </p>
          <button className="flex items-center space-x-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700">
            <FiPlus size={18} />
            <span>Add Product</span>
          </button>
        </div>
        <div className="ml-8 flex-shrink-0">
          <div className="relative h-32 w-48 overflow-hidden rounded-full bg-gradient-to-br from-blue-100 to-purple-100">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl">🛍️</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function DashBoard() {
  return (
    <div className="py-8">
      <div className="mx-auto max-w-7xl px-4">
        <WelcomeHeader />

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {cardData.map((card, index) => (
            <SwiperSlide key={index} className="py-2">
              <StatCard
                title={card.title}
                value={card.value}
                trend={card.trend}
                icon={card.icon}
                chartColor={card.chartColor}
                chartBars={card.chartBars}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default DashBoard;
