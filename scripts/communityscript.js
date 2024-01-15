// // community

// const community = [];
//         function addCommunity() {
//             const communityName = document.getElementById('communityName').value;
//             const communityDetails = document.getElementById('communityDetails').value;
//             const communityDate = document.getElementById('communityDate').value;
//             const communityPhoto = document.getElementById('communityPhoto').files[0];
//             const communityPlace = document.getElementById('communityPlace').value;

//             if (communityName && communityDetails && communityDate && communityPhoto && communityPlace) {
//                 const reader = new FileReader();

//                 reader.onload = function (c) {
//                     const newCommunity = {
//                         name: communityName,
//                         details: communityDetails,
//                         date: communityDate,
//                         photo: c.target.result,
//                         place: communityPlace
//                     };

//                     community.push(newCommunity);
//                     displayCommunity();
//                     displayMap();
//                     resetForm();
//                 };

//                 reader.readAsDataURL(communityPhoto);
//             } else {
//                 alert('Please enter Community name, details, date, select a photo, and place/address.');
//             }
//         }
//         function displayCommunity() {
//             const communityDisplay = document.getElementById('communityDisplay');
//             communityDisplay.innerHTML = '';

//             community.forEach((community, index) => {
//                 const communityCard = document.createElement('div');
//                 communityCard.classList.add('card', 'community-card');

//                 const cardBody = document.createElement('div');
//                 cardBody.classList.add('card-body');

//                 const cardTitle = document.createElement('h5');
//                 cardTitle.classList.add('card-title');
//                 cardTitle.textContent = community.name;

//                 const cardDetails = document.createElement('p');
//                 cardDetails.classList.add('card-text');
//                 cardDetails.textContent = community.details;

//                 const cardDate = document.createElement('p');
//                 cardDate.classList.add('card-text');
//                 cardDate.textContent = `Date: ${community.date}`;

//                 const cardPlace = document.createElement('p');
//                 cardPlace.classList.add('card-text');
//                 cardPlace.textContent = `Place: ${community.place}`;

//                 const cardPhoto = document.createElement('img');
//                 cardPhoto.classList.add('card-img-top', 'mt-2');
//                 cardPhoto.src = community.photo;
//                 cardPhoto.alt = community.name;

//                 const removeButton = document.createElement('button');
//                 removeButton.classList.add('btn', 'btn-danger', 'mt-2');
//                 removeButton.textContent = 'Remove';
//                 removeButton.onclick = () => removeCommunity(index);

//                 cardBody.appendChild(cardTitle);
//                 cardBody.appendChild(cardDetails);
//                 cardBody.appendChild(cardDate);
//                 cardBody.appendChild(cardPlace);
//                 cardBody.appendChild(cardPhoto);
//                 cardBody.appendChild(removeButton);
//                 communityCard.appendChild(cardBody);

//                 communityDisplay.appendChild(communityCard);
//             });
//         }
//         function removeCommunity(index) {
//             community.splice(index, 1);
//             displayCommunity();
//             displayMap();
//         }
//         function resetForm() {
//             document.getElementById('communityName').value = '';
//             document.getElementById('communityDetails').value = '';
//             document.getElementById('communityDate').value = '';
//             document.getElementById('communityPhoto').value = '';
//             document.getElementById('communityPlace').value = '';
//         }

 // Sample event data
 // Sample event data
 const events = [];

 // Function to add a new event
 function addEvent() {
     const eventName = document.getElementById('eventName').value;
     const eventDetails = document.getElementById('eventDetails').value;
     const eventDate = document.getElementById('eventDate').value;
     const eventPhoto = document.getElementById('eventPhoto').files[0];
     const eventPlace = document.getElementById('eventPlace').value;

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

             events.push(newEvent);
             displayEvents();
             displayMap();
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
 }

 // Function to reset the form
 function resetForm() {
     document.getElementById('eventName').value = '';
     document.getElementById('eventDetails').value = '';
     document.getElementById('eventDate').value = '';
     document.getElementById('eventPhoto').value = '';
     document.getElementById('eventPlace').value = '';
 // }

 // // Function to display Google Map
 // function displayMap() {
 //     const mapDiv = document.getElementById('map');

 //     const map = new google.maps.Map(mapDiv, {
 //         center: { lat: 0, lng: 0 },
 //         zoom: 2
 //     });

 //     events.forEach(event => {
 //         const geocoder = new google.maps.Geocoder();

 //         geocoder.geocode({ address: event.place }, (results, status) => {
 //             if (status === 'OK' && results[0].geometry) {
 //                 const marker = new google.maps.Marker({
 //                     map: map,
 //                     position: results[0].geometry.location,
 //                     title: event.name
 //                 });
 //             } else {
 //                 console.error('Geocode was not successful for the following reason:', status);
 //             }
 //         });
 //     });
 }