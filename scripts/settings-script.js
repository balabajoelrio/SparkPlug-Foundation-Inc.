// Settings
    
        function saveSettings() {
            // Get form inputs
            var foundationName = document.getElementById('foundationName').value;
            var foundationAddress = document.getElementById('foundationAddress').value;
            var phoneNumber = document.getElementById('phoneNumber').value;
            var website = document.getElementById('website').value;

            // Validate form inputs
            if (foundationName === '' || foundationAddress === '' || phoneNumber === '' || website === '') {
                displayMessage('Please fill in all fields.', 'error');
                return;
            }

            // Simulate saving settings (replace this with your actual save logic)
            // For demonstration purposes, just display a success message
            displayMessage('Settings saved successfully!', 'success');
        }

        function displayMessage(message, type) {
            // Create a Toast element
            var toastElement = document.createElement('div');
            toastElement.className = `toast text-center ${type === 'success' ? 'bg-success' : 'bg-danger'} text-white`;
            toastElement.style.fontSize = '16px';
            toastElement.style.position = 'fixed';
            toastElement.style.top = '0';
            toastElement.style.left = '50%';
            toastElement.style.transform = 'translateX(-50%)';
            toastElement.style.width = '300px';

            // Set the message and type
            toastElement.innerHTML = `
                <div class="toast-header">
                    <strong class="me-auto">${type === 'success' ? 'Success' : 'Error'}</strong>
                    <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                </div>
                <div class="toast-body">${message}</div>
            `;

            // Append Toast to the body
            document.body.appendChild(toastElement);

            // Initialize Bootstrap Toast with a longer delay (e.g., 1 hour)
            var toast = new bootstrap.Toast(toastElement, { delay: 3600000 });
            toast.show();
        }