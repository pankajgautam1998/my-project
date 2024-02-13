import { Add } from "@mui/icons-material";
import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";

const AddCourse = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        startIcon={<Add />}
        className="!border-dashed !w-52 font-serif"
      >
        Add Course
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ className: "!max-w-[50%] min-h-[400px] !w-1/2" }}
      >
        <div className="w-full h-fit flex justify-between p-5 pl-[45%] text-2xl font-bold">
          Add Course
        </div>
        <div className="flex flex-col gap-5 p-4  w-center items-center">
          <input
            type="text"
            placeholder="Upload Image"
            className="border-dashed border-2 p-2 text-center w-80"
          />
          <input
            type="text"
            placeholder="Course Name"
            className="rounded border-2 p-2 w-80"
          />
          <input
            type="text"
            placeholder="Description"
            className="rounded border-2 p-2 w-80"
          />
          <input
            type="text"
            placeholder="Select Category"
            className="rounded border-2 p-2 w-80"
          />
          <button className="text-center border p-1 bg-black text-white text-lg rounded-lg w-80 h-[32px]">
            Add Course
          </button>
        </div>
      </Dialog>
    </>
  );
};

export default AddCourse;
