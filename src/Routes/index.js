import AddCourse from "../AddCourse";
import Eduvilla from "../Eduvilla";
import EduDetails from "../Eduvilla/EduDetails";
import Hostinger from "../Hostinger";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Eduvilla />,
  },
  {
    id: 1,
    path: "/eduvilla",
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
  {
    id: 1,
    path: "/edudetails",
    element: <EduDetails />,
  },
  {
    id: 1,
    path: "/eduvilla/:edu_blog",
    element: <EduDetails />,
  },
];
