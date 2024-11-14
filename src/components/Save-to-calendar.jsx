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
  const downloadImages = () => {
    const imageUrls = [
      '/mehandiAndBarat.jpeg',
      '/walima.jpeg'  
    ];

    imageUrls.forEach((url, index) => {
      const link = document.createElement('a');
      link.href = url;
      link.download = `Invitation${index + 1}.jpeg`; // Set the download name for each image
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  return (
    <div style={{display:"flex"}}>
    <button onClick={handleOpenCalendar} className='btn'>
      Save to Calendar
    </button>
    <button  className='btn2' onClick={downloadImages}>
    Download Invetation
  </button>
  </div>
  );
};

export default SaveToCalendarButton;
