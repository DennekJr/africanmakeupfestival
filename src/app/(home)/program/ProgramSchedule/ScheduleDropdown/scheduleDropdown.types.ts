export type ScheduleDropdownTypes = {
  id: string
  time: string;
  panelSession?: string
  title: string;
  content?: ScheduleContent;
}

type ScheduleContent = {
  summary?: string;
  participants: participants[];
}

type participants = {
  id: string;
  src: string;
  name: string;
  company?: string;
  position: string;
}