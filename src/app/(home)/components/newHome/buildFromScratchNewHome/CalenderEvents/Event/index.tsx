import {
  CalenderEventTypes
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/CalenderEvents/calenderEventTypes";
import { Box } from "@mui/material";
import { AgoraBox, AgoraTransitionBox, HomeButton } from "@/app/(home)/components/newHome/utils";
import React from "react";
import { AccessTime, PlaceOutlined } from "@mui/icons-material";

export const Event = ({event}: {event: CalenderEventTypes}) => {
  const TicketPurchaseOption = ({event}: {event: CalenderEventTypes}) => {
    if(event.ticketType === 'free' && event.ticketCount > 0){
      return <Box className={'lg:w-[100%] lg:max-w-[100%]'}>
        <AgoraTransitionBox><h5 className={'text-[#FE9E11] text-[24px] font-semibold'}>Free Event</h5></AgoraTransitionBox>
      </Box>
    }
    if(event.ticketCount > 0 && event.ticketType === 'purchase'){
      return <HomeButton href={"/ticket"} className={"border-primary bg-primary text-textColor"}>
        <span className={"inline-block w-max align-middle whitespace-normal"}>Buy Tickets</span>
      </HomeButton>
    }
    return <Box className={'lg:w-[120px] lg:max-w-[120px]'}>
      <AgoraTransitionBox><h5 className={'text-lightSecondary text-[24px] font-semibold'}>Sold Out</h5></AgoraTransitionBox>
    </Box>
  }
  return <AgoraBox className={'w-full'}>
    <AgoraTransitionBox className={'flex lg:flex-nowrap flex-wrap mx-auto relative'}>
      <Box className={'w-full lg:w-[34%]'}>
        <Box className={'items-center content-center py-0 flex w-full flex-wrap relative'}>
          <AgoraTransitionBox className={'lg:w-[97px] lg:max-w-[97px] mt-[-4px] mb-2'}>
            <h4 className={'text-[40px] md:text-[76px] tracking-[-0.03em] p-0 m-0 leading-[1] font-extrabold text-primary'}>{event.day}</h4>
          </AgoraTransitionBox>
          <Box className={'lg:w-[140px] lg:max-w-[140px]'}>
            <AgoraTransitionBox>
              <h5 className={'text-lightSecondary leading-[1.2em] text-[14px] md:text-[24px] font-semibold'}>{event.month}, {event.year}</h5>
            </AgoraTransitionBox>
          </Box>
        </Box>
      </Box>
      <Box className={'w-full md:w-[72%] lg:w-[43.5%]'}>
        <Box className={'items-center content-center py-0 relative flex-wrap'}>
          <AgoraTransitionBox className={'w-full mb-0'}>
            <Box className={'relative'}>
              <h3 className={'leading-[1.086em] m-0 text-primary text-[23px] md:text-[2.059em] font-extrabold'}>{event.title}</h3>
            </Box>
          </AgoraTransitionBox>
          <Box className={'h-[5px] w-full'} />
          <Box className={'w-auto mb-0 max-w-full inline-flex'}>
            <AgoraTransitionBox className={'mr-6'}>
              <Box className={'flex flex-row text-start items-center'}>
                <PlaceOutlined className={'text-primary'} />
                <Box className={'flex-grow text-primary text-[15px] box-border'}>
                  <span>
                  {event.location}
                  </span>
                </Box>
              </Box>
            </AgoraTransitionBox>
          </Box>
          <Box className={'w-auto inline-flex'}>
            <AgoraTransitionBox>
              <Box className={'flex flex-row text-start items-center'}>
                <AccessTime className={'text-lightSecondary mr-2'} />
                <Box className={'flex-grow inline-flex text-lightSecondary text-[15px] box-border'}>
                  <span>
                  {event.startsAt} - {event.endsAt}
                  </span>
                </Box>
              </Box>
            </AgoraTransitionBox>
          </Box>
        </Box>
      </Box>
      <Box className={'w-full md:w-[28%] lg:w-[21.832%] text-left md:mt-0 mt-[15px] md:text-right'}>
        <Box className={'items-center content-center py-0 h-full'}>
          <Box className={'relative w-full'}>
            <AgoraTransitionBox className={'mr-[-8px]'}>
              <Box className={'button inline-block align-top mb-[-10px] leading-[0]'}>
                <TicketPurchaseOption event={event} />
              </Box>
            </AgoraTransitionBox>
          </Box>
        </Box>
      </Box>
    </AgoraTransitionBox>
    <AgoraTransitionBox className={'w-full mb-0'}>
      <Box className={'py-[35px] flex h-1'}>
        <span className={'w-full border-[1px] border-solid border-[#FCD9CE]'} />
      </Box>
    </AgoraTransitionBox>
  </AgoraBox>
}