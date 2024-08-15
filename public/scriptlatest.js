// Sample machinery data (replace with actual data)
const machineryData = [
    {
        title: 'BALER WRAPPER',
        videoUrl: "videos/WhatsApp Video 2023-09-29 at 6.31.32 PM.mp4",
        availability: 'Available in GUNTUR, ANDHRA PRADESH',
    },
    {
        title: 'CARROT HARVESTOR',
        videoUrl: "videos/WhatsApp Video 2023-09-29 at 6.31.34 PM.mp4",
        availability: 'Available in North America and South America',
    },
    {
        title: 'CROP HARVESTOR',
        videoUrl: "videos/WhatsApp Video 2023-09-29 at 6.34.29 PM.mp4",
        availability: 'Available in VIJAYAWADA, ANDHRA PRADESH ',
    },
    {
        title: 'FIELD PLOUGHING',
        videoUrl: "videos/WhatsApp Video 2023-09-29 at 6.36.43 PM.mp4",
        availability: 'Available in Europe and Asia',
    },
    {
        title: 'WRAPPING MACHINE',
        videoUrl: "videos/WhatsApp Video 2023-09-29 at 10.48.27 AM (1).mp4",
        availability: 'Available in Europe and Asia',
    },
    {
        title: 'SEED PLANTING',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        availability: 'Available in Europe and Asia',
    },
    {
        title: 'RICE HARVESTOR',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        availability: 'Available in Europe and Asia',
    },
    {
        title: 'MANURE HANDLING',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        availability: 'Available in Europe and Asia',
    },
    {
        title: 'SUGARCANE HARVESTOR',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        availability: 'Available in Europe and Asia',
    },
    {
        title: 'BALER WRAPPER',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        availability: 'Available in Europe and Asia',
    },
    {
        title: 'SEED PLANTING',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        availability: 'Available in Europe and Asia',
    },
    {
        title: 'FORGE HARVESTOR',
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        availability: 'Available in Europe and Asia',
    },
    // Add more machinery data here
];

const videosContainer = document.getElementById('videos');

// Function to add video embeds with availability information to the page
function displayMachinery() {
    machineryData.forEach(machinery => {
        const videoContainer = document.createElement('div');
        videoContainer.classList.add('video-container');

        const iframe = document.createElement('iframe');
        iframe.src = machinery.videoUrl;
        iframe.frameborder = '0';
        iframe.allowFullscreen = true;

        const titleElement = document.createElement('div');
        titleElement.classList.add('video-title');
        titleElement.textContent = machinery.title;

        const availabilityElement = document.createElement('div');
        availabilityElement.classList.add('video-availability');
        availabilityElement.textContent = 'Available in: ' + machinery.availability;

        videoContainer.appendChild(iframe);
        videoContainer.appendChild(titleElement);
        videoContainer.appendChild(availabilityElement);
        videosContainer.appendChild(videoContainer);
    });
}

// Call the function to display machinery videos with availability
displayMachinery();