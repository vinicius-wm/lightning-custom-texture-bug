import App from './App'

window.onload = function() {
    var options = {stage: {w: 1920, h: 1080, clearColor: 0xFFFFFFFF}}
    var app = new App(options);
    document.body.appendChild(app.stage.getCanvas());
}