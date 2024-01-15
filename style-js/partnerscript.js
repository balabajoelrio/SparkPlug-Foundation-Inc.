 // Partner
 const partners = [];
 function addPartner() {
 const partnerName = document.getElementById('partnerName').value;
 const partnerDetails = document.getElementById('partnerDetails').value;
 const partnerPhoto = document.getElementById('partnerPhoto').files[0];

 if (partnerName && partnerDetails && partnerPhoto) {
     const reader = new FileReader();

     reader.onload = function (e) {
         const newPartner = {
             name: partnerName,
             details: partnerDetails,
             photo: e.target.result
         };

         partners.push(newPartner);
         displayPartners();
         resetPartnerForm();
     };

     reader.readAsDataURL(partnerPhoto);
 } else {
     alert('Please enter partner name, details, and select a photo.');
 }
 }
 function displayPartners() {
 const partnersDisplay = document.getElementById('partnersDisplay');
 partnersDisplay.innerHTML = '';

 partners.forEach((partner, index) => {
     const partnerCard = document.createElement('div');
     partnerCard.classList.add('card', 'partner-card');

     const cardBody = document.createElement('div');
     cardBody.classList.add('card-body');

     const cardTitle = document.createElement('h5');
     cardTitle.classList.add('card-title');
     cardTitle.textContent = partner.name;

     const cardDetails = document.createElement('p');
     cardDetails.classList.add('card-text');
     cardDetails.textContent = partner.details;

     const cardPhoto = document.createElement('img');
     cardPhoto.classList.add('card-img-top', 'mt-2');
     cardPhoto.src = partner.photo;
     cardPhoto.alt = partner.name;

     const removeButton = document.createElement('button');
     removeButton.classList.add('btn', 'btn-danger', 'mt-2');
     removeButton.textContent = 'Remove';
     removeButton.onclick = () => removePartner(index);

     cardBody.appendChild(cardTitle);
     cardBody.appendChild(cardDetails);
     cardBody.appendChild(cardPhoto);
     cardBody.appendChild(removeButton);
     partnerCard.appendChild(cardBody);

     partnersDisplay.appendChild(partnerCard);
 });
 }
 function removePartner(index) {
 partners.splice(index, 1);
 displayPartners();
 }
 function resetPartnerForm() {
 document.getElementById('partnerName').value = '';
 document.getElementById('partnerDetails').value = '';
 document.getElementById('partnerPhoto').value = '';
 }