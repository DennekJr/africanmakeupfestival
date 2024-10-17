"use client"
import React, { useMemo, useState } from "react";
import { Collapse } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Image from "next/image";
import { SCHEDULEDROPDOWNMENU } from "../ScheduleDropdown/scheduleDropdown.constants";

export const ScheduleDropdown = () => {
  const initialState = [
    { slide: "one", isOpen: false },
    { slide: "two", isOpen: false },
    { slide: "three", isOpen: false },
    { slide: "four", isOpen: false },
    { slide: "five", isOpen: false },
    { slide: "six", isOpen: false },
    { slide: "seven", isOpen: false },
    { slide: "eight", isOpen: false },
    { slide: "nine", isOpen: false },
    { slide: "ten", isOpen: false },
  ];
  const [openSlide, setOpenSlide] = useState(initialState);
  const schedules = useMemo(() => Object.values(SCHEDULEDROPDOWNMENU), []);
  const handleClick = (id: string) => {
    const newState = openSlide.map((item) => {
      if (item.slide !== id) {
        return item;
      } else {
        return {
          ...item,
          isOpen: !item.isOpen,
        };
      }
    });
    setOpenSlide(newState);
  };
  return (
    <>
      {schedules.map((schedule, index) => {
        const open = openSlide.find((item) => {
          if (item.slide === schedule.id) {
            return item.isOpen;
          }
          return false;
        });
        return (
          <div
            key={index}
            data-state={open?.isOpen}
            onClick={() => handleClick(schedule.id)}
            className="space-y-2 bg-white text-black px-4 py-2"
          >
            <button
              type="button"
              className="flex items-center gap-2 w-full text-left justify-between"
            >
              <span>
                <p>
                  <span className="font-medium">{schedule.time}</span> <br />
                </p>
                <p className="font-bold text-xl">{schedule.title}</p>
              </span>
              {open?.isOpen ? <ExpandLess /> : <ExpandMore />}
            </button>
            <div>
              {schedule.content !== undefined && (
                <Collapse in={open?.isOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton className={"px-0"} sx={{ paddingX: 0 }}>
                      <ListItemText>
                        <pre
                          id="undefined-0"
                          className="font-sans w-full break-words whitespace-pre-wrap min-h-6 font-normal text-base"
                        >
                          <span className="relative max-w-full break-words">
                            {schedule.content?.summary}
                          </span>
                        </pre>
                        <Box
                          className={"flex flex-wrap gap-5"}
                          sx={{ marginTop: "calc(1.5rem * calc(1))" }}
                        >
                          {schedule.content.participants.map(
                            (participant, index) => {
                              return (
                                <div className="flex gap-2" key={index}>
                                  <div className="overflow-clip rounded-md">
                                    <Image
                                      alt={participant.name}
                                      loading="lazy"
                                      width="60"
                                      height="60"
                                      decoding="async"
                                      className="size-24 object-cover"
                                      src={participant.src}
                                      style={{ color: "transparent" }}
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <p className="text-lg font-medium">
                                      {participant.name}
                                    </p>
                                    <div className="text-sm opacity-80">
                                      <p>{participant.company}</p>
                                      <p>{participant.position}</p>
                                    </div>
                                  </div>
                                </div>
                              );
                            },
                          )}
                        </Box>
                      </ListItemText>
                    </ListItemButton>
                  </List>
                </Collapse>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
