
document.addEventListener('DOMContentLoaded', () => {
    const images = [
        { src: 'images/fullsize1.jpg', thumb: 'images/thumb1.jpg', caption: 'Image 1: A beautiful scene' },
        { src: 'images/fullsize2.jpg', thumb: 'images/thumb2.jpg', caption: 'Image 2: A majestic mountain' },
        { src: 'images/fullsize3.jpg', thumb: 'images/thumb3.jpg', caption: 'Image 3: Sunset over the lake' },
        { src: 'images/fullsize4.jpg', thumb: 'images/thumb4.jpg', caption: 'Image 4: A forest path' },
        { src: 'images/fullsize5.jpg', thumb: 'images/thumb5.jpg', caption: 'Image 5: City lights at night' }
    ];

    const featuredImage = document.getElementById('featured');
    const caption = document.getElementById('caption');
    const thumbnailsContainer = document.getElementById('thumbnails');

    // Build the thumbnail list dynamically
    images.forEach((image, index) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = image.thumb;
        img.alt = `Thumbnail ${index + 1}`;
        img.classList.add('thumbnail');
        if (index === 0) img.classList.add('active');
        img.addEventListener('click', () => {
            // Update the featured image and caption
            document.querySelectorAll('.thumbnail').forEach(thumb => thumb.classList.remove('active'));
            img.classList.add('active');
            featuredImage.src = image.src;
            caption.textContent = image.caption;
        });
        li.appendChild(img);
        thumbnailsContainer.appendChild(li);
    });
});
