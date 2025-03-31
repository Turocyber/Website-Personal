document.addEventListener('DOMContentLoaded', function() {
    const apologyBtn = document.getElementById('apologyBtn');
    const apologyText = document.getElementById('apologyText');
    
    apologyBtn.addEventListener('click', function() {
        if (apologyText.style.display === 'block') {
            apologyText.style.display = 'none';
            this.textContent = 'Klik untuk Permohonan Maaf';
        } else {
            apologyText.style.display = 'block';
            this.textContent = 'Tutup';
            
            // Trigger reflow untuk memastikan animasi berjalan setiap kali diklik
            void apologyText.offsetWidth;
        }
    });
});
