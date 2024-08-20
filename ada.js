// ADJUST IF NEEDED

let textSize = 1; // 1 is the default size
let isGrayscale = false;
let isHighContrast = false;
let isNegativeContrast = false;
let isLightBackground = false;
let isUnderlinedLinks = false;
let isReadableFont = false;

function changeTextSize(action) {
    const body = document.body;
    if (action === 'increase') {
        textSize += 0.1;
    } else if (action === 'decrease') {
        textSize = Math.max(1, textSize - 0.1); // Ensure text size doesn't go below 1
    }
    body.style.fontSize = `${textSize}em`;
}

function toggleGrayscale() {
    const body = document.body;
    isGrayscale = !isGrayscale;
    body.style.filter = isGrayscale ? 'grayscale(100%)' : '';
}

function toggleHighContrast() {
    const body = document.body;
    isHighContrast = !isHighContrast;
    body.style.backgroundColor = isHighContrast ? '#000' : '#fff';
    body.style.color = isHighContrast ? '#fff' : '#000';
}

function toggleNegativeContrast() {
    const body = document.body;
    isNegativeContrast = !isNegativeContrast;
    body.style.filter = isNegativeContrast ? 'invert(100%)' : '';
}

function toggleLightBackground() {
    const body = document.body;
    isLightBackground = !isLightBackground;
    body.style.backgroundColor = isLightBackground ? '#f0f0f0' : '#ffffff';
}

function toggleLinksUnderline() {
    const links = document.querySelectorAll('a');
    isUnderlinedLinks = !isUnderlinedLinks;
    links.forEach(link => {
        link.style.textDecoration = isUnderlinedLinks ? 'underline' : 'none';
    });
}

function toggleReadableFont() {
    const body = document.body;
    isReadableFont = !isReadableFont;
    body.style.fontFamily = isReadableFont ? 'Georgia, serif' : 'Arial, sans-serif';
}

function resetSettings() {
    const body = document.body;
    body.style.fontSize = '';
    body.style.filter = '';
    body.style.backgroundColor = '';
    body.style.color = '';
    body.style.fontFamily = '';
    document.querySelectorAll('a').forEach(link => {
        link.style.textDecoration = '';
    });
    textSize = 1;
    isGrayscale = false;
    isHighContrast = false;
    isNegativeContrast = false;
    isLightBackground = false;
    isUnderlinedLinks = false;
    isReadableFont = false;
}

function toggleControls() {
    const controls = document.getElementById('controlsDiv');
    const toggleButton = document.getElementById('toggleControlsButton');
    
    if (controls.classList.contains('show')) {
        controls.classList.remove('show');
        // toggleButton.textContent = 'Show Controls';
        // Remove 'show' class from all buttons
        Array.from(controls.children).forEach(button => {
            button.classList.remove('show');
        });
    } else {
        controls.classList.add('show');
        // toggleButton.textContent = 'Hide Controls';
        // Add 'show' class to all buttons with a slight delay
        Array.from(controls.children).forEach((button, index) => {
            setTimeout(() => {
                button.classList.add('show');
            }, index * 100); // Stagger the animations by 100ms for each button
        });
    }
}
