import {Timeslot} from "../model/Timeslot";

const TIMESLOTS = [
  {
    hour: 9,
    minute: 45
  },
  {
    hour: 11,
    minute: 0
  }
  ];

class TimeslotApiService {

  getAvailableTimeslots(providerId: string, date: Date, duration: number): Promise<Array<Timeslot>> {
    return new Promise((resolveInner) => {
      setTimeout(() => resolveInner(TIMESLOTS), 200);
    });
  }
}

export default TimeslotApiService;