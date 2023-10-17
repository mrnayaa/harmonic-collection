<script>
    const imageContainer = document.querySelector('.image-container');
    const hiddenText = document.querySelector('.hidden-text');

    imageContainer.addEventListener('click', () => {
        hiddenText.style.display = 'block';
    });
</script>