import React, { useState } from "react";
import htmlandcss from "../Image/html &css.png";
import Sql from "../Image/sql.png";
import hostinger from "../Image/hostinger.png";
import reactjs from "../Image/reactjs.png";
import Pythons from "../Image/python.png";
import lightroom from "../Image/light room.png";
import softwaretesting from "../Image/software testing.png";
import javascript from "../Image/java script.png";
import python2 from "../Image/python.png";
import bootstrap from "../Image/bootstrap.png";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import {
  AccountCircle,
  Contacts,
  FileCopy,
  FormatItalicOutlined,
  Home,
  KeyboardArrowRight,
  People,
} from "@mui/icons-material";
import AddCourse from "../AddCourse";

const Eduvilla = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([
    {
      id: 1,
      img: htmlandcss,
      title: "Front-end",
      name: "HTML & CSS",
    },
    {
      id: 2,
      img: Sql,
      title: "database",
      name: "SQL Lite",
    },
    {
      id: 3,
      img: hostinger,
      title: "hosting",
      name: "Hostinger Tutorial",
    },
    {
      id: 4,
      img: reactjs,
      title: "Front-end",
      name: "ReactJs Tutorial",
    },
    {
      id: 5,
      img: Pythons,
      title: "back-end",
      name: "Python Beginner's Guide",
    },
    {
      id: 6,
      img: lightroom,
      title: "others",
      name: "Lightroom Tutorial",
    },
    {
      id: 7,
      img: softwaretesting,
      title: "Front-end",
      name: "Testing",
    },
    {
      id: 8,
      img: javascript,
      title: "Back-end",
      name: "Core Java",
    },
    {
      id: 9,
      img: python2,
      title: "back-end",
      name: "Python Basics",
    },
    {
      id: 10,
      img: bootstrap,
      title: "Front-end",
      name: "Bootstrap",
    },
  ]);

  return (
    <>
      <div>
        <div className="flex justify-between p-2">
          <p className="text-2xl font-semibold">
            Edu-Villa<sup>TM</sup>
          </p>
          <div className="border rounded-2xl p-1 w-44 text-center border-gray-400">
            <p>sign Up / sign in</p>
          </div>
        </div>
        <div className="flex border">
          <div className="flex flex-col border h-auto w-10">
            <IconButton>
              <Home />
            </IconButton>
            <IconButton>
              <AccountCircle />
            </IconButton>
            <IconButton>
              <FileCopy />
            </IconButton>
            <IconButton>
              <People />
            </IconButton>
            <IconButton>
              <Contacts />
            </IconButton>
            <IconButton>
              <FormatItalicOutlined />
            </IconButton>
            <IconButton>
              <KeyboardArrowRight />
            </IconButton>
          </div>
          <div>
            <div className="grid grid-cols-5 gap-2 ">
              {data.map((hello) => (
                <div
                  key={hello.id}
                  onClick={() =>
                    navigate(`/eduvilla/${hello.id}`, { state: hello })
                  }
                >
                  <div>
                    <img src={`${hello.img}/${hello.id}`} alt="" />
                    <div className="flex flex-col p-2 rounded border bg-slate-50">
                      <img src={hello.img} alt="" />
                      <p className="uppercase  text-slate-400">{hello.title}</p>
                      <p className="text-lg font-semibold">{hello.name}</p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="p-2 rounded border bg-slate-50">
                <AddCourse data={data} setData={setData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eduvilla;
