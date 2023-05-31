import "./calendar.scss";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import { useState } from "react";
import Modal from "react-modal";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";
const localizer = momentLocalizer(moment);

const Calendars = () => {
  const [events, setEvents] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const handleSelect = ({ start, end }) => {
    setSelectedSlot({ start, end });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const type = event.target.elements.type.value;
    const startTime = event.target.elements.startTime.value;
    const endTime = event.target.elements.endTime.value;

    const startDate = moment(selectedSlot.start)
      .set({
        hour: moment(startTime, "HH:mm").get("hour"),
        minute: moment(startTime, "HH:mm").get("minute"),
      })
      .toDate();

    const endDate = moment(selectedSlot.end)
      .set({
        hour: moment(endTime, "HH:mm").get("hour"),
        minute: moment(endTime, "HH:mm").get("minute"),
      })
      .toDate();

    setEvents([
      ...events,
      {
        title,
        type,
        start: startDate,
        end: endDate,
      },
    ]);

    setSelectedSlot(null);
  };

  return (
    <div className="calendar">
      <Sidebar />
      <div className="calendarContainer">
        <Navbar />
        <Modal
          isOpen={!!selectedSlot}
          onRequestClose={() => setSelectedSlot(null)}
        >
          <form onSubmit={handleSubmit}>
            <label>
              Title:
              <input name="title" required />
            </label>
            <label>
              Type:
              <select name="type" required>
                <option value="meeting">Meeting</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Start Time:
              <input type="time" name="startTime" required />
            </label>
            <label>
              End Time:
              <input type="time" name="endTime" required />
            </label>
            <button type="submit">Add event</button>
          </form>
        </Modal>

        <Calendar
          selectable
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectSlot={handleSelect}
          eventPropGetter={(event) => ({
            style: {
              backgroundColor: event.type === "meeting" ? "blue" : "green",
            },
          })}
        />
      </div>
    </div>
  );
};

export default Calendars;
