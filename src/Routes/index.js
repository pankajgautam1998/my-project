import AddCourse from "../AddCourse";
import Eduvilla from "../Eduvilla";
import Hostinger from "../Hostinger";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Eduvilla />,
  },
  {
    id: 1,
    path: "/hostinger",
    element: <Hostinger />,
  },
  {
    id: 1,
    path: "/addcourse",
    element: <AddCourse />,
  },
];
