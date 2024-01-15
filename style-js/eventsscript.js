// Events
  // Sample event data
  const events = [];

  // Function to add a new event
  function addEvent() {
      const eventName = document.getElementById('eventName').value;
      const eventDetails = document.getElementById('eventDetails').value;
      const eventDate = document.getElementById('eventDate').value;
      const eventPhoto = document.getElementById('eventPhoto').files[0];
      const eventPlace = document.getElementById('eventPlace').value;
      const eventContainer = document.getElementById('eventContainer');
      const newHeight = eventContainer.clientHeight + 20; // Increase by 20 pixels
      eventContainer.style.height = `${newHeight}px`;
      
      if (eventName && eventDetails && eventDate && eventPhoto && eventPlace) {
          const reader = new FileReader();

          reader.onload = function (e) {
              const newEvent = {
                  name: eventName,
                  details: eventDetails,
                  date: eventDate,
                  photo: e.target.result,
                  place: eventPlace
              };

              events.unshift(newEvent); // Add to the beginning of the array
              displayEvents();
              displayMap();
              updateEventHistory();
              resetForm();
          };

          reader.readAsDataURL(eventPhoto);
      } else {
          alert('Please enter event name, details, date, select a photo, and place/address.');
      }
  }

  // Function to display events
  function displayEvents() {
      const eventDisplay = document.getElementById('eventDisplay');
      eventDisplay.innerHTML = '';

      events.forEach((event, index) => {
          const eventCard = document.createElement('div');
          eventCard.classList.add('card', 'event-card');

          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');

          const cardTitle = document.createElement('h5');
          cardTitle.classList.add('card-title');
          cardTitle.textContent = event.name;

          const cardDetails = document.createElement('p');
          cardDetails.classList.add('card-text');
          cardDetails.textContent = event.details;

          const cardDate = document.createElement('p');
          cardDate.classList.add('card-text');
          cardDate.textContent = `Date: ${event.date}`;

          const cardPlace = document.createElement('p');
          cardPlace.classList.add('card-text');
          cardPlace.textContent = `Place: ${event.place}`;

          const cardPhoto = document.createElement('img');
          cardPhoto.classList.add('card-img-top', 'mt-2');
          cardPhoto.src = event.photo;
          cardPhoto.alt = event.name;

          const removeButton = document.createElement('button');
          removeButton.classList.add('btn', 'btn-danger', 'mt-2');
          removeButton.textContent = 'Remove';
          removeButton.onclick = () => removeEvent(index);

          cardBody.appendChild(cardTitle);
          cardBody.appendChild(cardDetails);
          cardBody.appendChild(cardDate);
          cardBody.appendChild(cardPlace);
          cardBody.appendChild(cardPhoto);
          cardBody.appendChild(removeButton);
          eventCard.appendChild(cardBody);

          eventDisplay.appendChild(eventCard);
      });
  }

  // Function to remove an event
  function removeEvent(index) {
      events.splice(index, 1);
      displayEvents();
      displayMap();
      updateEventHistory();
  }

  // Function to reset the form
  function resetForm() {
      document.getElementById('eventName').value = '';
      document.getElementById('eventDetails').value = '';
      document.getElementById('eventDate').value = '';
      document.getElementById('eventPhoto').value = '';
      document.getElementById('eventPlace').value = '';
  }

  // Function to display Google Map
  function displayMap() {
      const mapDiv = document.getElementById('map');

      const map = new google.maps.Map(mapDiv, {
          center: { lat: 0, lng: 0 },
          zoom: 2
      });

      events.forEach(event => {
          const geocoder = new google.maps.Geocoder();

          geocoder.geocode({ address: event.place }, (results, status) => {
              if (status === 'OK' && results[0].geometry) {
                  const marker = new google.maps.Marker({
                      map: map,
                      position: results[0].geometry.location,
                      title: event.name
                  });
              } else {
                  console.error('Geocode was not successful for the following reason:', status);
              }
          });
      });
  }

  // Function to update the event history iframe
  function updateEventHistory() {
      const eventHistoryFrame = document.getElementById('eventHistory');
      const eventHistoryContent = events.map(event => `${event.date} - ${event.name} - ${event.details} - ${event.place} `).join('<br>');
      eventHistoryFrame.contentDocument.body.innerHTML = eventHistoryContent;
  }
