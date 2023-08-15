import { AllRouteConstants } from "../router/RouteConstants";
import DashboardIcon from "../assets/icons/dashboardIconActive.svg";
import DashboardIconActive from "../assets/icons/dashboardIcon.svg";
import PaymentIcon from "../assets/icons/paymentsIcon.svg";
import PaymentIconActive from "../assets/icons/paymentsIconActive.svg";
import ProductIcon from "../assets/icons/productsIcon.svg";
import ProductIconActive from "../assets/icons/productsIconActive.svg";
import TransactionsIcon from "../assets/icons/transactionsIcon.svg";
import TransactionsIconActive from "../assets/icons/transactionsIconActive.svg";

export const sidebarData = [
  {
    route: AllRouteConstants.main.index,
    icon: DashboardIcon,
    iconActive: DashboardIconActive,
    sidebarName: "Dashboard"
  },
  {
    route: AllRouteConstants.products.index,
    icon: ProductIcon,
    iconActive: ProductIconActive,
    sidebarName: "Products"
  },
  {
    route: AllRouteConstants.payments.index,
    icon: PaymentIcon,
    iconActive:PaymentIconActive,
    sidebarName: "Payments"
  },
  {
    route: AllRouteConstants.transactions.index,
    icon: TransactionsIcon,
    iconActive: TransactionsIconActive,
    sidebarName: "Transactions"
  }
];
