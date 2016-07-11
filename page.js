const {remote}      = require('electron');
const path          = require('path');
const currentWindow = remote.getCurrentWindow();

function setThumbnailToolbar() {
    currentWindow.setThumbarButtons([{
        tooltip: 'rewind',
        icon: path.join(__dirname, 'rewind.png')
    }, {
        tooltip: this.state === 'play' ? 'pause' : 'play',
        icon: path.join(__dirname, 'play.png')
    }, {
        tooltip: 'forward',
        icon: path.join(__dirname, 'forward.png')
    }]);
    alert('Please check task bar');
}

function clearThumbnailToolbar() {
    currentWindow.setThumbarButtons([]);
}

function goFullScreen() {
    currentWindow.setFullScreen(true);
}

function exitFullScreen() {
    currentWindow.setFullScreen(false);
}

function hideAndShow() {
    currentWindow.hide();
    setTimeout(() => currentWindow.show(), 2000);
}

function skipTaskbar() {
    currentWindow.setSkipTaskbar(true);
}

function showInTaskbar() {
    currentWindow.setSkipTaskbar(false);
}

function autoTest(type) {
    switch(type) {
        case 'fullscreen':
            setThumbnailToolbar();
            goFullScreen();
            setTimeout(exitFullScreen, 1000);
            setTimeout(setThumbnailToolbar, 2000);
            break;
        case 'visible':
            setThumbnailToolbar();
            hideAndShow();
            setTimeout(setThumbnailToolbar, 3000);
            break;
        case 'taskbar':
            setThumbnailToolbar();
            skipTaskbar();
            setTimeout(showInTaskbar, 1000);
            setTimeout(setThumbnailToolbar, 2000);
    }
}
