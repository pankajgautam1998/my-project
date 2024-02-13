import React from "react";
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
import { Link } from "react-router-dom";
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
          <div className="p-2">
            <div className="grid grid-cols-5 gap-2 ">
              <div className="flex flex-col p-2 rounded border bg-slate-50">
                <img src={htmlandcss} alt="" />
                <p className="uppercase  text-slate-400">Front-end</p>
                <p className="text-lg font-semibold">HTML & CSS</p>
              </div>

              <div className="flex flex-col p-2 rounded border bg-slate-50">
                <img src={Sql} alt="" />
                <p className="uppercase  text-slate-400">database</p>
                <p className="text-lg font-semibold">SQL Lite</p>
              </div>

              <Link to="/hostinger">
                <div className="flex flex-col p-2 rounded border bg-slate-50">
                  <img src={hostinger} alt="" />
                  <p className="uppercase  text-slate-400">hosting</p>
                  <p className="text-lg font-semibold">Hostinger Tutorial</p>
                </div>
              </Link>

              <div className="flex flex-col p-2 rounded border bg-slate-50">
                <img src={reactjs} alt="" />
                <p className="uppercase  text-slate-400">Front-end</p>
                <p className="text-lg font-semibold">ReactJs Tutorial</p>
              </div>
              <div className="flex flex-col p-2 rounded border bg-slate-50">
                <img src={Pythons} alt="" />
                <p className="uppercase  text-slate-400">back-end</p>
                <p className="text-lg font-semibold">Python Beginner's Guide</p>
              </div>
              <div className="flex flex-col p-2 rounded border bg-slate-50">
                <img src={lightroom} alt="" />
                <p className="uppercase  text-slate-400">others</p>
                <p className="text-lg font-semibold">Lightroom Tutorial</p>
              </div>
              <div className="flex flex-col p-2 rounded border bg-slate-50">
                <img src={softwaretesting} alt="" />
                <p className="uppercase  text-slate-400">Front-end</p>
                <p className="text-lg font-semibold">Testing</p>
              </div>
              <div className="flex flex-col p-2 rounded border bg-slate-50">
                <img src={javascript} alt="" />
                <p className="uppercase  text-slate-400">Back-end</p>
                <p className="text-lg font-semibold">Core Java</p>
              </div>
              <div className="flex flex-col p-2 rounded border bg-slate-50">
                <img src={python2} alt="" />
                <p className="uppercase  text-slate-400">back-end</p>
                <p className="text-lg font-semibold">Python Basics</p>
              </div>
              <div className="flex flex-col p-2 rounded border bg-slate-50">
                <img src={bootstrap} alt="" />
                <p className="uppercase  text-slate-400">Front-end</p>
                <p className="text-lg font-semibold">Bootstrap</p>
              </div>
              <Link>
                <div className="p-2 rounded border bg-slate-50">
                  <AddCourse />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eduvilla;
