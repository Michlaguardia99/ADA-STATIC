<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<!-- either footer or header -->
<script src="/ada.js"></script>

<body>
    <!-- INSERT TO HEADER OR BANNER -->
    <div class="controls-container">
        <button id="toggleControlsButton" onclick="toggleControls()"><img src="public/ada-icon/ada.png" alt=""></button>
        <div class="controls" id="controlsDiv">
            <button onclick="changeTextSize('increase')"><img src="public/ada-icon/increase.png" alt=""></button>
            <button onclick="changeTextSize('decrease')"><img src="public/ada-icon/decrease.png" alt=""></button>
            <button onclick="toggleGrayscale()"><img src="public/ada-icon/grayscale.png" alt=""></button>
            <button onclick="toggleHighContrast()"><img src="public/ada-icon/Hcontrast.png" alt=""></button>
            <button onclick="toggleNegativeContrast()"><img src="public/ada-icon/Ncontrast.png" alt=""></button>
            <button onclick="toggleLightBackground()"><img src="public/ada-icon/Lbackground.png" alt=""></button>
            <button onclick="toggleLinksUnderline()"><img src="public/ada-icon/underlined.png" alt=""></button>
            <button onclick="toggleReadableFont()"><img src="public/ada-icon/readable.png" alt=""></button>
            <button onclick="resetSettings()" class="reset"><img src="public/ada-icon/reset.png" alt=""></button>
        </div>
    </div>
</body>

</html>