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
