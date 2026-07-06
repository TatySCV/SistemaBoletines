import {
  FaCog,
  FaFileAlt,
  FaHistory,
  FaHome,
  FaUsers,
} from "react-icons/fa";

import ROUTES from "./routes";

const NAVIGATION = [
  {
    label: "Dashboard",
    path: ROUTES.DASHBOARD,
    icon: FaHome,
    roles: ["admin", "operator", "supervisor"],
  },
  {
    label: "Nuevo Boletín",
    path: ROUTES.NEW_BULLETIN,
    icon: FaFileAlt,
    roles: ["admin", "operator"],
  },
  {
    label: "Historial",
    path: ROUTES.HISTORY,
    icon: FaHistory,
    roles: ["admin", "operator", "supervisor"],
  },
  {
    label: "Usuarios",
    path: ROUTES.USERS,
    icon: FaUsers,
    roles: ["admin"],
  },
  {
    label: "Configuración",
    path: ROUTES.SETTINGS,
    icon: FaCog,
    roles: ["admin"],
  },
];

export default NAVIGATION;