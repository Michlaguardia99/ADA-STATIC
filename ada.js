let textSize = 1;
let isGrayscale = false;
let isHighContrast = false;
let isNegativeContrast = false;
let isLightBackground = false;
let isUnderlinedLinks = false;
let isReadableFont = false;

function changeTextSize(action) {
    const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'a', 'p', 'span'];
    if (action === 'increase') {
        textSize = Math.min(textSize + 0.1, 3); // Max size 3em
    } else if (action === 'decrease') {
        textSize = Math.max(1, textSize - 0.1);
    }
    elements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.fontSize = `${textSize}em`;
        });
    });
}

function toggleGrayscale() {
    const body = document.body;
    isGrayscale = !isGrayscale;
    body.style.filter = isGrayscale ? 'grayscale(100%)' : '';
}

function toggleHighContrast() {
    const body = document.body;
    isHighContrast = !isHighContrast;
    body.style.backgroundColor = isHighContrast ? '#000' : '';
    body.style.color = isHighContrast ? '#fff' : '';
}

function toggleNegativeContrast() {
    const body = document.body;
    isNegativeContrast = !isNegativeContrast;
    body.style.filter = isNegativeContrast ? 'invert(100%)' : '';
}

function toggleLightBackground() {
    const body = document.body;
    isLightBackground = !isLightBackground;
    body.style.backgroundColor = isLightBackground ? '#f0f0f0' : '';
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

    // Reset font size for specific elements
    const elements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'a', 'p', 'span'];
    elements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.fontSize = ''; // Reset font size
        });
    });

    // Reset other styles
    body.style.filter = '';
    body.style.backgroundColor = '';
    body.style.color = '';
    body.style.fontFamily = '';

    // Reset link styles
    document.querySelectorAll('a').forEach(link => {
        link.style.textDecoration = ''; // Reset text decoration
    });

    // Reset control states
    textSize = 1;
    isGrayscale = false;
    isHighContrast = false;
    isNegativeContrast = false;
    isLightBackground = false;
    isUnderlinedLinks = false;
    isReadableFont = false;

    // Remove the 'show' class from controls
    const controls = document.getElementById('controlsDiv');
    controls.classList.remove('show');

    // Reset the 'show' class on each button
    Array.from(controls.children).forEach(button => {
        button.classList.remove('show');
    });
}

function toggleControls() {
    const controls = document.getElementById('controlsDiv');
    const toggleButton = document.getElementById('toggleControlsButton');
    
    if (controls.classList.contains('show')) {
        controls.classList.remove('show');
        Array.from(controls.children).forEach(button => {
            button.classList.remove('show');
        });
    } else {
        controls.classList.add('show');
        Array.from(controls.children).forEach((button, index) => {
            setTimeout(() => {
                button.classList.add('show');
            }, index * 100);
        });
    }
}
