import 'core-js/modules/es.typed-array.slice';
import 'core-js/modules/es.array.from';
import Lightning from 'wpe-lightning'
import activity from './assets/activity.svg';
import airplay from './assets/airplay.svg';
import alertCircle from './assets/alert-circle.svg';
import alignCenter from './assets/align-center.svg';

class IconTexture extends lng.Texture {
    constructor(stage) {
        super(stage);

        this._w = 24;
        this._h = 24;
        this._src = '';
    }

    get w() {
        return this._w;
    }

    set w(l) {
        this._w = l;
        this._changed();
    }

    get h() {
        return this._h;
    }

    set h(l) {
        this._h = l;
        this._changed();
    }

    get src() {
        return this._src;

    }

    set src(l) {
        this._src = l;
        this._changed();
    }

    _getLookupId() {
        return '__icon__w' + this._w + 'h' + this._h + '_' + this._src;
    }

    _getSourceLoader() {
        // We need to scope these to protect them from modifications while loading (which may be async).
        const w = this._w;
        const h = this._h;
        const src = this._src;

        return function(cb) {
            const img = new Image();
            img.width = w;
            img.height = h;
            img.onload = () => {
                cb(null, {source: img, w: w, h: h});
            };
            img.onerror = function (err) {
                console.log('texture src', { src });
                cb(err);
            };
            img.src = src;
        }
    }
}

export default class MyApp extends Lightning.Application {
    static _template() {
        return {
            Icons: {
                children: [
                    {
                        x: 0,
                        y: 10,
                        texture: {type: IconTexture, w: 24, h: 24, src: activity}
                    },
                    {
                        x: 0,
                        y: 54,
                        texture: Lightning.Tools.getSvgTexture(activity, 24, 24)
                    },
                    {
                        x: 48,
                        y: 10,
                        texture: {type: IconTexture, w: 24, h: 24, src: alignCenter}
                    },
                    {
                        x: 48,
                        y: 54,
                        texture: Lightning.Tools.getSvgTexture(alignCenter, 24, 24)
                    },
                    {
                        x: 96,
                        y: 10,
                        texture: {type: IconTexture, w: 24, h: 24, src: alertCircle}
                    },
                    {
                        x: 96,
                        y: 54,
                        texture: Lightning.Tools.getSvgTexture(alertCircle, 24, 24)
                    },
                    {
                        x: 144,
                        y: 10,
                        texture: {type: IconTexture, w: 24, h: 24, src: airplay}
                    },
                    {
                        x: 144,
                        y: 54,
                        texture: Lightning.Tools.getSvgTexture(airplay, 24, 24)
                    },
                ]
            }
        }
    }
}