document.addEventListener('DOMContentLoaded', function () {
    // Event listener for the "Add Partner" button
    document.getElementById('addPartnerButton').addEventListener('click', function () {
        // Reset previous error/success messages
        document.getElementById('errorMessage').innerText = '';
        document.getElementById('successMessage').innerText = '';

        // Open the modal
        var modalInstance = new bootstrap.Modal(document.getElementById('modalPartners'));
        modalInstance.show();
    });

    // Event listener for the form submission
    document.getElementById('modalForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Call the addPartner function when the form is submitted
        addPartner();
    });
});

function addPartner() {
    // Get form inputs
    var partnerName = document.getElementById('partnerName').value;
    var partnerDetails = document.getElementById('partnerDetails').value;
    // You can handle the file input as needed
    var partnerPhoto = document.getElementById('partnerPhoto').value;

    // Validate form inputs
    if (!partnerName || !partnerDetails || !partnerPhoto) {
        document.getElementById('errorMessage').innerText = 'Please fill in all fields.';
        return;
    }

    // Create a new partner card
    var newPartnerCard = document.createElement('div');
    newPartnerCard.className = 'card mt-3';
    newPartnerCard.style = 'width: 18rem;';

    // Assuming you want to display the partner name and details as card text
    newPartnerCard.innerHTML = `
        <img src="${partnerPhoto}" class="card-img-top" alt="${partnerName}.png">
        <div class="card-body">
            <h5 class="card-title">${partnerName}</h5>
            <p class="card-text">${partnerDetails}</p>
        </div>
    `;

    // Append the new partner card to the display area
    document.getElementById('partnersDisplay').appendChild(newPartnerCard);

    // Display success message
    document.getElementById('successMessage').innerText = 'Partner added successfully.';

    // Close the modal after adding a partner
    var modalInstance = new bootstrap.Modal(document.getElementById('modalPartners'));
    modalInstance.hide();

    // Optionally, you can reset the form fields after adding a partner
    document.getElementById('modalForm').reset();
}