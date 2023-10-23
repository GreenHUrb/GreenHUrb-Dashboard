import { AllRouteConstants } from "@router";
import DashboardIcon from "@icons/dashboardIconActive.svg";
import DashboardIconActive from "@icons/dashboardIcon.svg";
import PaymentIcon from "@icons/paymentsIcon.svg";
import PaymentIconActive from "@icons/paymentsIconActive.svg";
import ProductIcon from "@icons/productsIcon.svg";
import ProductIconActive from "@icons/productsIconActive.svg";
import TransactionsIcon from "@icons/transactionsIcon.svg";
import TransactionsIconActive from "@icons/transactionsIconActive.svg";

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
    iconActive: PaymentIconActive,
    sidebarName: "Payments"
  },
  {
    route: AllRouteConstants.transactions.index,
    icon: TransactionsIcon,
    iconActive: TransactionsIconActive,
    sidebarName: "Transactions"
  }
];
