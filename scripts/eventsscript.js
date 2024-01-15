// function addEvent() {
//     var eventName = document.getElementById('eventName').value;
//     var eventPlace = document.getElementById('eventPlace').value;
//     var eventDetails = document.getElementById('eventDetails').value;
//     var eventDate = document.getElementById('eventDate').value;
//     var eventPhotoInput = document.getElementById('eventPhoto');
    
//     if (!eventName || !eventPlace || !eventDetails || !eventDate || !eventPhotoInput.files[0]) {
//         showErrorModal('Please fill in all fields including event photo.');
//         return;
//     }

//     var eventPhoto = eventPhotoInput.files[0];

//     var reader = new FileReader();
//     reader.onload = function (e) {
//         var eventPhotoBase64 = e.target.result;
//         appendEventToIframes(eventName, eventPlace, eventDetails, eventDate, eventPhotoBase64);
//     };
//     reader.readAsDataURL(eventPhoto);
// }

// function appendEventToIframes(eventName, eventPlace, eventDetails, eventDate, eventPhotoBase64) {
//     var eventEntry = '<div class="event-entry">' +
//         '<strong>Title: </strong>' + eventName + '<br>' +
//         '<strong>Place: </strong>' + eventPlace + '<br>' +
//         '<strong>Details: </strong>' + eventDetails + '<br>' +
//         '<strong>Date: </strong>' + eventDate + '<br>' +
//         '</div>';

//     // Append the event entry to the event iframe
//     var eventIframe = document.getElementById('eventIframe');
//     var eventIframeDocument = eventIframe.contentDocument || eventIframe.contentWindow.document;
//     eventIframeDocument.body.innerHTML += eventEntry;

//     // Append the event entry with the photo to the event display iframe
//     var eventDisplay = document.getElementById('eventDisplay');
//     var eventDisplayDocument = eventDisplay.contentDocument || eventDisplay.contentWindow.document;
//     eventDisplayDocument.body.innerHTML += '<div class="event-entry">' +
//         '<img src="' + eventPhotoBase64 + '" alt="Event Photo">' + eventEntry +
//         '</div>';

//     showSuccessModal('Event added successfully!');
// }

// function showErrorModal(message) {
//     showModal(message, 'bg-danger', 'text-light');
// }

// function showSuccessModal(message) {
//     showModal(message, 'bg-success', 'text-light');
// }

// function showModal(message, bgColor, textColor) {
//     var modalContainer = document.createElement('div');
//     modalContainer.className = 'modal-container';

//     var modal = document.createElement('div');
//     modal.className = 'modal';

//     var modalContent = document.createElement('div');
//     modalContent.className = 'modal-content ' + bgColor + ' ' + textColor;

//     var modalBody = document.createElement('div');
//     modalBody.className = 'modal-body';
//     modalBody.innerText = message;

//     modalContent.appendChild(modalBody);
//     modal.appendChild(modalContent);

//     modalContainer.appendChild(modal);

//     document.body.appendChild(modalContainer);

//     $('#modalDonation').modal('hide');

//     setTimeout(function () {
//         document.body.removeChild(modalContainer);
//     }, 300000000);
// }

// function initMap() {
//     var geocoder = new google.maps.Geocoder();
//     var mapOptions = {
//         zoom: 2, // Adjust the initial zoom level as needed
//         center: { lat: 0, lng: 0 },
//     };
//     var map = new google.maps.Map(document.getElementById('map'), mapOptions);

//     function addEventToMap(eventPlace) {
//         geocoder.geocode({ 'address': eventPlace }, function (results, status) {
//             if (status == 'OK') {
//                 var marker = new google.maps.Marker({
//                     map: map,
//                     position: results[0].geometry.location,
//                 });
//             } else {
//                 console.error('Geocode was not successful for the following reason: ' + status);
//             }
//         });
//     }

//     // Example: Automatically adding an event to the map
//     // You can call this function with the eventPlace whenever you add an event
//     addEventToMap('Example Event Location');
// }

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