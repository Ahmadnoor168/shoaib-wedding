import React from 'react';

const SaveToCalendarButton = () => {
  const handleOpenCalendar = () => {
    // Define event details
    const event = {
      title: 'My Event',
      description: 'Description of the event',
      location: 'Event Location',
      start: '20241201T120100Z', // Format: YYYYMMDDTHHmmSSZ in UTC
      end: '20241201T130100Z',   // Format: YYYYMMDDTHHmmSSZ in UTC
    };

    // Generate the Google Calendar URL
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&dates=${event.start}/${event.end}`;

    // Open the Google Calendar URL in a new tab
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <button onClick={handleOpenCalendar} className='btn'>
      Save to Calendar
    </button>
  );
};

export default SaveToCalendarButton;
