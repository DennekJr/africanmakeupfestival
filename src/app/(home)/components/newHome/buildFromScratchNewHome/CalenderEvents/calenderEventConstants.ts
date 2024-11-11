import {
  CalenderEventTypes
} from "@/app/(home)/components/newHome/buildFromScratchNewHome/CalenderEvents/calenderEventTypes";


export const CALENDEREVENTCONSTANTS:Record<string, CalenderEventTypes> = {
  one: {
    id: 'delightsFestival',
    day: '18',
    month: 'September',
    year: '2024',
    title: 'African Skincare Festival',
    location: 'Upper West Side, Brooklyn',
    startsAt: '09:15am',
    endsAt: '13:30pm',
    ticketCount: 20,
    ticketType: 'purchase'
  },
two: {
    id: 'delightsFestival',
    day: '18',
    month: 'November',
    year: '2024',
    title: 'African Skincare Festival 2',
    location: 'Upper West Side, Brooklyn',
    startsAt: '09:15am',
    endsAt: '13:30pm',
    ticketCount: 0,
    ticketType: 'purchase'
  },
three: {
    id: 'delightsFestival',
    day: '26',
    month: 'December',
    year: '2024',
    title: 'African Skincare Festival 3',
    location: '52 Cameron road, Lagos',
    startsAt: '09:15am',
    endsAt: '13:30pm',
    ticketCount: 20,
    ticketType: 'free'
  }
}