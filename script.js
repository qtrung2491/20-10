const _0x1f451e = _0x2261;
(function(_0x3e0d61, _0x440658) {
    const _0x19a323 = _0x2261
      , _0x363d75 = _0x3e0d61();
    while (!![]) {
        try {
            const _0x49ec50 = -parseInt(_0x19a323(0xcf)) / 0x1 * (parseInt(_0x19a323(0xfb)) / 0x2) + parseInt(_0x19a323(0xe6)) / 0x3 * (parseInt(_0x19a323(0xc4)) / 0x4) + parseInt(_0x19a323(0xcd)) / 0x5 * (-parseInt(_0x19a323(0xf6)) / 0x6) + parseInt(_0x19a323(0xd2)) / 0x7 + -parseInt(_0x19a323(0xf7)) / 0x8 + parseInt(_0x19a323(0xe4)) / 0x9 + parseInt(_0x19a323(0xf0)) / 0xa;
            if (_0x49ec50 === _0x440658)
                break;
            else
                _0x363d75['push'](_0x363d75['shift']());
        } catch (_0x3920fc) {
            _0x363d75['push'](_0x363d75['shift']());
        }
    }
}(_0x5976, 0xc2bfe));
function _0x5976() {
    const _0x332022 = ['3826697JAkkGE', 'shadowBlur', 'join', 'shift', 'remove', 'splice', 'style', 'createElement', 'location', 'width', 'userData', 'color', 'innerWidth', 'opacity', 'rgba(255,\x20255,\x20255,\x200.8)', 'rotation', 'touchmove', 'reverse', '1038384FpLSQO', 'BufferGeometry', '51ARgssx', 'setHex', 'clientX', 'CanvasTexture', 'position', 'aspect', './heart.png', 'min', 'sin', 'addEventListener', '19599620ExvhxI', 'mousemove', 'getElementById', 'bold\x20', 'className', 'random', '4584iscbxY', '3655480nKNUKJ', '#ff69b4', 'touchstart', 'floor', '2280314ottqFV', 'scale', 'innerHeight', 'threejs-canvas', 'canvas', 'strokeText', 'shadowColor', 'tail', 'click', 'moc.pedhnaoat', '0\x200\x20', 'font', 'touches', 'now', 'MeshBasicMaterial', 'resize', 'fillStyle', 'Vector3', 'domElement', 'forEach', 'wheel', 'PlaneGeometry', 'px\x20\x27Arial\x27', 'onload', 'preventDefault', 'SphereGeometry', 'lineCap', 'mouseup', 'star', 'Scene', 'fillText', 'src', 'add', 'LineBasicMaterial', 'material', 'appendChild', 'lineWidth', 'setSize', 'top', 'push', 'touchend', 'set', 'boxShadow', 'needsUpdate', 'keydown', 'updateProjectionMatrix', 'Mesh', 'then', '233620YStidU', 'deltaY', 'height', 'render', 'getContext', 'round', 'max', 'mousedown', 'length', '7985fuCrQp', 'measureText', '1dmAUqY', 'PerspectiveCamera', 'phase'];
    _0x5976 = function() {
        return _0x332022;
    }
    ;
    return _0x5976();
}
function _0x2261(_0x1b41d5, _0x1fe10f) {
    const _0x5976d3 = _0x5976();
    return _0x2261 = function(_0x22613d, _0x51c3ad) {
        _0x22613d = _0x22613d - 0x9c;
        let _0x16d101 = _0x5976d3[_0x22613d];
        return _0x16d101;
    }
    ,
    _0x2261(_0x1b41d5, _0x1fe10f);
}
    function loadHeartImage(_0x48496b=_0x1f451e(0xec)) {
        return new Promise( (_0x3b1e3e, _0x2d92af) => {
            const _0x21ba10 = _0x2261
              , _0x1299f9 = new Image();
            _0x1299f9[_0x21ba10(0xab)] = () => _0x3b1e3e(_0x1299f9),
            _0x1299f9['onerror'] = _0x2d92af,
            _0x1299f9[_0x21ba10(0xb3)] = _0x48496b;
        }
        );
    }
    const width = window[_0x1f451e(0xde)]
      , height = window['innerHeight']
      , scene = new THREE[(_0x1f451e(0xb1))]()
      , camera = new THREE[(_0x1f451e(0xd0))](0x4b,width / height,0.1,0x3e8)
      , renderer = new THREE['WebGLRenderer']({
        'alpha': !![]
    });
    renderer[_0x1f451e(0xb9)](width, height),
    document[_0x1f451e(0xf2)](_0x1f451e(0xfe))[_0x1f451e(0xb7)](renderer[_0x1f451e(0xa6)]),
    camera[_0x1f451e(0xea)]['z'] = 0x14,
    camera['rotation']['y'] = 0.5,
    renderer[_0x1f451e(0xa6)][_0x1f451e(0xef)](_0x1f451e(0xa8), _0x1f6767 => {
        const _0x5541a1 = _0x1f451e;
        _0x1f6767[_0x5541a1(0xac)](),
        camera[_0x5541a1(0xea)]['z'] += _0x1f6767[_0x5541a1(0xc5)] * 0.006,
        camera[_0x5541a1(0xea)]['z'] = Math[_0x5541a1(0xca)](0x3, Math[_0x5541a1(0xed)](camera['position']['z'], 0x32));
    }
    );
    function createTextTexture(_0x8a7755) {
        const _0x508fb3 = _0x1f451e
          , _0x1b21ad = document[_0x508fb3(0xd9)](_0x508fb3(0xff))
          , _0x31d6ac = _0x1b21ad[_0x508fb3(0xc8)]('2d')
          , _0x4014be = 0x4b0
          , _0x4c710a = 0x60;
        let _0x28dfd9 = _0x4c710a;
        const _0x5349b2 = 0x64;
        _0x31d6ac[_0x508fb3(0x9f)] = 'bold\x20' + _0x28dfd9 + _0x508fb3(0xaa);
        let _0x25d2e9 = _0x31d6ac[_0x508fb3(0xce)](_0x8a7755)[_0x508fb3(0xdb)];
        if (_0x25d2e9 + _0x5349b2 * 0x2 > _0x4014be) {
            const _0x288ee7 = _0x4014be - _0x5349b2 * 0x2;
            _0x28dfd9 = Math[_0x508fb3(0xfa)](_0x28dfd9 * _0x288ee7 / _0x25d2e9),
            _0x31d6ac[_0x508fb3(0x9f)] = _0x508fb3(0xf3) + _0x28dfd9 + _0x508fb3(0xaa),
            _0x25d2e9 = _0x31d6ac['measureText'](_0x8a7755)[_0x508fb3(0xdb)];
        }
        const _0x17d39f = Math['ceil'](_0x25d2e9 + _0x5349b2 * 0x2)
          , _0x219afe = 0x80 * 0x3
          , _0x3f5726 = document[_0x508fb3(0xd9)](_0x508fb3(0xff));
        _0x3f5726['width'] = _0x17d39f,
        _0x3f5726[_0x508fb3(0xc6)] = _0x219afe;
        const _0x134356 = _0x3f5726['getContext']('2d');
        return _0x134356[_0x508fb3(0x9f)] = _0x508fb3(0xf3) + _0x28dfd9 + _0x508fb3(0xaa),
        _0x134356['textAlign'] = 'center',
        _0x134356['textBaseline'] = 'middle',
        _0x134356[_0x508fb3(0x101)] = '#ff69b4',
        _0x134356[_0x508fb3(0xd3)] = 0x32,
        _0x134356[_0x508fb3(0xa4)] = _0x508fb3(0xe0),
        _0x134356[_0x508fb3(0xb2)](_0x8a7755, _0x3f5726['width'] / 0x2, _0x3f5726[_0x508fb3(0xc6)] / 0x2),
        _0x134356['strokeStyle'] = '#fff',
        _0x134356[_0x508fb3(0xae)] = _0x508fb3(0xc9),
        _0x134356[_0x508fb3(0xb8)] = 0x2,
        _0x134356[_0x508fb3(0x100)](_0x8a7755, _0x3f5726['width'] / 0x2, _0x3f5726['height'] / 0x2),
        {
            'texture': new THREE['CanvasTexture'](_0x3f5726),
            'aspect': _0x3f5726[_0x508fb3(0xdb)] / _0x3f5726[_0x508fb3(0xc6)]
        };
    }
    function createHeartTexture(_0x48db3f) {
        const _0x5aa517 = _0x1f451e
          , _0x1fb876 = document[_0x5aa517(0xd9)](_0x5aa517(0xff));
        _0x1fb876[_0x5aa517(0xdb)] = 0x80 * 0x2,
        _0x1fb876['height'] = 0x80 * 0x2;
        const _0x533fe5 = _0x1fb876[_0x5aa517(0xc8)]('2d');
        _0x533fe5['clearRect'](0x0, 0x0, _0x1fb876[_0x5aa517(0xdb)], _0x1fb876[_0x5aa517(0xc6)]),
        _0x533fe5['shadowColor'] = _0x5aa517(0xf8),
        _0x533fe5[_0x5aa517(0xd3)] = 0x1e;
        const _0x59fc14 = _0x1fb876[_0x5aa517(0xdb)] / 0x2
          , _0xbb8015 = _0x1fb876[_0x5aa517(0xc6)] / 0x2
          , _0x262653 = (_0x1fb876['width'] - _0x59fc14) / 0x2
          , _0x5e8b66 = (_0x1fb876[_0x5aa517(0xc6)] - _0xbb8015) / 0x2;
        return _0x533fe5['drawImage'](_0x48db3f, _0x262653, _0x5e8b66, _0x59fc14, _0xbb8015),
        new THREE[(_0x5aa517(0xe9))](_0x1fb876);
    }
    let starMeshes = [];
    function createStars() {
        const _0x23c481 = _0x1f451e
          , _0x50fe89 = new THREE[(_0x23c481(0xad))](0.07,0x6,0x6)
          , _0x5001f8 = new THREE['MeshBasicMaterial']({
            'color': 0xffffff
        });
        for (let _0x29c266 = 0x0; _0x29c266 < 0x320; _0x29c266++) {
            const _0x4b2101 = new THREE[(_0x23c481(0xc2))](_0x50fe89,_0x5001f8);
            _0x4b2101[_0x23c481(0xea)]['x'] = (Math[_0x23c481(0xf5)]() - 0.5) * 0x78,
            _0x4b2101['position']['y'] = Math[_0x23c481(0xf5)]() * 0x50 - 0x14,
            _0x4b2101[_0x23c481(0xea)]['z'] = (Math[_0x23c481(0xf5)]() - 0.5) * 0x78 - 0x14,
            scene[_0x23c481(0xb4)](_0x4b2101),
            starMeshes[_0x23c481(0xbb)](_0x4b2101);
        }
    }
    let textMeshes = [];
    function createFallingTexts() {
        const _0x32dc3e = _0x1f451e;
        textMeshes['forEach'](_0x1a7b31 => scene[_0x32dc3e(0xd6)](_0x1a7b31)),
        textMeshes = [];
        for (let _0x24b5af = 0x0; _0x24b5af < 0xc8; _0x24b5af++) {
            const _0xa664bf = texts[Math[_0x32dc3e(0xfa)](Math['random']() * texts[_0x32dc3e(0xcc)])]
              , {texture: _0x1869cf, aspect: _0x5acdbd} = createTextTexture(_0xa664bf);
            _0x1869cf[_0x32dc3e(0xbf)] = !![];
            const _0x534ac4 = 0x3
              , _0x49c73a = _0x534ac4 * _0x5acdbd
              , _0x54dee9 = new THREE[(_0x32dc3e(0xa9))](_0x49c73a,_0x534ac4)
              , _0x4e41dd = new THREE['MeshBasicMaterial']({
                'map': _0x1869cf,
                'transparent': !![],
                'depthWrite': ![],
                'depthTest': !![],
                'color': 0xffffff
            })
              , _0xe4de67 = new THREE[(_0x32dc3e(0xc2))](_0x54dee9,_0x4e41dd);
            _0xe4de67[_0x32dc3e(0xea)]['x'] = (Math[_0x32dc3e(0xf5)]() - 0.5) * 0x64,
            _0xe4de67[_0x32dc3e(0xea)]['y'] = Math[_0x32dc3e(0xf5)]() * 0x20 - 0xc,
            _0xe4de67[_0x32dc3e(0xea)]['z'] = (Math[_0x32dc3e(0xf5)]() - 0.5) * 0x28,
            _0xe4de67[_0x32dc3e(0xdc)][_0x32dc3e(0xd1)] = Math[_0x32dc3e(0xf5)]() * Math['PI'] * 0x2,
            scene['add'](_0xe4de67),
            textMeshes[_0x32dc3e(0xbb)](_0xe4de67);
        }
    }
    let heartMeshes = [];
    function createFallingHearts(_0x379ef8) {
        const _0x32a285 = _0x1f451e;
        heartMeshes['forEach'](_0x141d1e => scene[_0x32a285(0xd6)](_0x141d1e)),
        heartMeshes = [];
        for (let _0x96b054 = 0x0; _0x96b054 < 0xf; _0x96b054++) {
            const _0x36b57c = new THREE[(_0x32a285(0xa9))](1.5,1.5) // Tăng kích thước ảnh rơi
              , _0x5cee8f = new THREE[(_0x32a285(0xa2))]({
                'map': _0x379ef8[Math.floor(Math.random() * _0x379ef8.length)],
                'transparent': !![],
                'depthWrite': ![],
                'depthTest': !![]
            })
              , _0x3b9b90 = new THREE[(_0x32a285(0xc2))](_0x36b57c,_0x5cee8f);
            _0x3b9b90['position']['x'] = (Math[_0x32a285(0xf5)]() - 0.5) * 0x1e,
            _0x3b9b90['position']['y'] = Math[_0x32a285(0xf5)]() * 0x20 - 0xc,
            _0x3b9b90[_0x32a285(0xea)]['z'] = (Math[_0x32a285(0xf5)]() - 0.5) * 0x14;
            const _0x582ecb = 1 + Math[_0x32a285(0xf5)]() * 1.5;
            _0x3b9b90[_0x32a285(0xfc)][_0x32a285(0xbd)](_0x582ecb, _0x582ecb, 0x1),
            scene[_0x32a285(0xb4)](_0x3b9b90),
            heartMeshes[_0x32a285(0xbb)](_0x3b9b90);
        }
    }
    let shootingStars = [];
    function spawnShootingStar() {
        const _0x1980ca = _0x1f451e
          , _0x1bccac = new THREE['SphereGeometry'](0.15,0x8,0x8)
          , _0x5508fd = new THREE['MeshBasicMaterial']({
            'color': 0xffffff,
            'transparent': !![]
        })
          , _0xd3cfa5 = new THREE['Mesh'](_0x1bccac,_0x5508fd);
        _0xd3cfa5['position']['x'] = (Math[_0x1980ca(0xf5)]() - 0.5) * 0x64,
        _0xd3cfa5[_0x1980ca(0xea)]['y'] = Math[_0x1980ca(0xf5)]() * 0x50 - 0x14,
        _0xd3cfa5[_0x1980ca(0xea)]['z'] = -0x28 - Math[_0x1980ca(0xf5)]() * 0x28,
        _0xd3cfa5[_0x1980ca(0xdc)] = {
            'vx': 0.4 + Math[_0x1980ca(0xf5)]() * 0.3,
            'vy': -0.2 - Math[_0x1980ca(0xf5)]() * 0.2,
            'vz': 0.7 + Math[_0x1980ca(0xf5)]() * 0.5,
            'tail': []
        },
        _0xd3cfa5.name = 'shootingStar';
        scene[_0x1980ca(0xb4)](_0xd3cfa5),
        shootingStars[_0x1980ca(0xbb)](_0xd3cfa5);
    }
    let isDragging = ![]
      , lastX = 0x0
      , isTouching = ![]
      , lastTouchX = 0x0
      , targetRotationY = 0.5;
    renderer['domElement'][_0x1f451e(0xef)](_0x1f451e(0xcb), _0x15698c => {
        const _0x4b084c = _0x1f451e;
        isDragging = !![],
        lastX = _0x15698c[_0x4b084c(0xe8)];
    }
    ),
    window[_0x1f451e(0xef)](_0x1f451e(0xaf), () => {
        isDragging = ![];
    }
    ),
    window[_0x1f451e(0xef)](_0x1f451e(0xf1), _0x12bba7 => {
        const _0x41c202 = _0x1f451e;
        if (isDragging) {
            const _0x4ad287 = _0x12bba7[_0x41c202(0xe8)] - lastX;
            lastX = _0x12bba7[_0x41c202(0xe8)],
            targetRotationY += _0x4ad287 * 0.0015;
        }
    }
    ),
    renderer[_0x1f451e(0xa6)]['addEventListener'](_0x1f451e(0xf9), _0x407186 => {
        const _0xd1925e = _0x1f451e;
        _0x407186[_0xd1925e(0xa0)][_0xd1925e(0xcc)] === 0x1 && (isTouching = !![],
        lastTouchX = _0x407186['touches'][0x0][_0xd1925e(0xe8)]);
    }
    ),
    window[_0x1f451e(0xef)](_0x1f451e(0xbc), () => {
        isTouching = ![];
    }
    ),
    window[_0x1f451e(0xef)](_0x1f451e(0xe2), _0x54fba1 => {
        const _0x338d15 = _0x1f451e;
        if (isTouching && _0x54fba1[_0x338d15(0xa0)][_0x338d15(0xcc)] === 0x1) {
            const _0x1438b1 = _0x54fba1[_0x338d15(0xa0)][0x0][_0x338d15(0xe8)]
              , _0x365625 = _0x1438b1 - lastTouchX;
            lastTouchX = _0x1438b1,
            targetRotationY += _0x365625 * 0.0015;
        }
    }
    );
    function lerpColor(_0x207282, _0x1af37f, _0x3e7e1c) {
        const _0x257227 = _0x1f451e;
        return [Math[_0x257227(0xc9)](_0x207282[0x0] + (_0x1af37f[0x0] - _0x207282[0x0]) * _0x3e7e1c), Math['round'](_0x207282[0x1] + (_0x1af37f[0x1] - _0x207282[0x1]) * _0x3e7e1c), Math[_0x257227(0xc9)](_0x207282[0x2] + (_0x1af37f[0x2] - _0x207282[0x2]) * _0x3e7e1c)];
    }
    function animate() {
        const _0x2e656e = _0x1f451e;
        requestAnimationFrame(animate),
        camera['rotation']['y'] += (targetRotationY - camera[_0x2e656e(0xe1)]['y']) * 0.08;
        const _0x4b0f0b = Date[_0x2e656e(0xa1)]();
        textMeshes[_0x2e656e(0xa7)](_0x2318e2 => {
            const _0x582efc = _0x2e656e;
            _0x2318e2[_0x582efc(0xea)]['y'] -= 0.025 + Math['random']() * 0.005;
            _0x2318e2[_0x582efc(0xea)]['y'] < -0xc && (_0x2318e2['position']['y'] = Math[_0x582efc(0xf5)]() * 0x14 + 0xa,
            _0x2318e2[_0x582efc(0xea)]['x'] = (Math[_0x582efc(0xf5)]() - 0.5) * 0x1e,
            _0x2318e2[_0x582efc(0xea)]['z'] = (Math[_0x582efc(0xf5)]() - 0.5) * 0x28);
            if (_0x2318e2['position']['x'] > 0x10)
                _0x2318e2[_0x582efc(0xea)]['x'] = -0x10;
            if (_0x2318e2[_0x582efc(0xea)]['x'] < -0x10)
                _0x2318e2[_0x582efc(0xea)]['x'] = 0x10;
            const _0x2fe3b8 = (Math[_0x582efc(0xee)](_0x4b0f0b * 0.0005 + _0x2318e2[_0x582efc(0xdc)][_0x582efc(0xd1)]) + 0x1) / 0x2
              , _0x53cb76 = lerpColor([0xff, 0xff, 0xff], [0xff, 0x69, 0xb4], _0x2fe3b8)
              , _0x3a56ee = _0x53cb76[0x0] << 0x10 | _0x53cb76[0x1] << 0x8 | _0x53cb76[0x2];
            _0x2318e2[_0x582efc(0xb6)][_0x582efc(0xdd)][_0x582efc(0xe7)](_0x3a56ee);
        }
        ),
        heartMeshes[_0x2e656e(0xa7)](_0x54dfd5 => {
            const _0x32c8a9 = _0x2e656e;
            _0x54dfd5[_0x32c8a9(0xea)]['y'] -= 0.04 + Math['random']() * 0.02,
            _0x54dfd5[_0x32c8a9(0xea)]['x'] += (Math[_0x32c8a9(0xf5)]() - 0.5) * 0.05;
            _0x54dfd5[_0x32c8a9(0xea)]['y'] < -0xc && (_0x54dfd5[_0x32c8a9(0xea)]['y'] = Math['random']() * 0x14 + 0xa,
            _0x54dfd5[_0x32c8a9(0xea)]['x'] = (Math[_0x32c8a9(0xf5)]() - 0.5) * 0x1e,
            _0x54dfd5[_0x32c8a9(0xea)]['z'] = (Math[_0x32c8a9(0xf5)]() - 0.5) * 0x14);
            if (_0x54dfd5['position']['x'] > 0x10)
                _0x54dfd5['position']['x'] = -0x10;
            if (_0x54dfd5['position']['x'] < -0x10)
                _0x54dfd5[_0x32c8a9(0xea)]['x'] = 0x10;
        }
        ),
        shootingStars[_0x2e656e(0xa7)]( (_0x49e829, _0x135e8f) => {
            const _0x2f72e0 = _0x2e656e;
            if (_0x49e829[_0x2f72e0(0xdc)][_0x2f72e0(0x102)]['length'] > 0x14)
                _0x49e829[_0x2f72e0(0xdc)][_0x2f72e0(0x102)][_0x2f72e0(0xd5)]();
            _0x49e829[_0x2f72e0(0xdc)]['tail'][_0x2f72e0(0xbb)]({
                'x': _0x49e829['position']['x'],
                'y': _0x49e829[_0x2f72e0(0xea)]['y'],
                'z': _0x49e829[_0x2f72e0(0xea)]['z']
            }),
            _0x49e829['position']['x'] += _0x49e829[_0x2f72e0(0xdc)]['vx'],
            _0x49e829[_0x2f72e0(0xea)]['y'] += _0x49e829[_0x2f72e0(0xdc)]['vy'],
            _0x49e829[_0x2f72e0(0xea)]['z'] += _0x49e829[_0x2f72e0(0xdc)]['vz'];
            for (let _0x48cf49 = 0x0; _0x48cf49 < _0x49e829[_0x2f72e0(0xdc)]['tail']['length'] - 0x1; _0x48cf49++) {
                const _0x5561f6 = _0x49e829[_0x2f72e0(0xdc)][_0x2f72e0(0x102)][_0x48cf49]
                  , _0x3f58a1 = _0x49e829['userData']['tail'][_0x48cf49 + 0x1]
                  , _0x3b31b7 = new THREE[(_0x2f72e0(0xe5))]()['setFromPoints']([new THREE[(_0x2f72e0(0xa5))](_0x5561f6['x'],_0x5561f6['y'],_0x5561f6['z']), new THREE[(_0x2f72e0(0xa5))](_0x3f58a1['x'],_0x3f58a1['y'],_0x3f58a1['z'])])
                  , _0x2e431b = new THREE[(_0x2f72e0(0xb5))]({
                    'color': 0xffffff,
                    'transparent': !![],
                    'opacity': 0.15 + 0.25 * (_0x48cf49 / _0x49e829[_0x2f72e0(0xdc)][_0x2f72e0(0x102)][_0x2f72e0(0xcc)])
                })
                  , _0x14625f = new THREE['Line'](_0x3b31b7,_0x2e431b);
                scene[_0x2f72e0(0xb4)](_0x14625f),
                setTimeout( () => scene[_0x2f72e0(0xd6)](_0x14625f), 0x28);
            }
            _0x49e829[_0x2f72e0(0xb6)][_0x2f72e0(0xdf)] = 0.8,
            (_0x49e829['position']['z'] > 0x0 || _0x49e829[_0x2f72e0(0xea)]['y'] < -0x28) && (scene[_0x2f72e0(0xd6)](_0x49e829),
            shootingStars[_0x2f72e0(0xd7)](_0x135e8f, 0x1));
        }
        );
        if (Math[_0x2e656e(0xf5)]() < 0.024) // Tăng sao băng
            spawnShootingStar();
        renderer[_0x2e656e(0xc7)](scene, camera);
    }
    createStars(),
    createFallingTexts();
    const imagePaths = ['./heart.png', './h1.png', './h3.png'];
    Promise.all(imagePaths.map(path => loadHeartImage(path)))
      .then(images => {
          const textures = images.map(img => createHeartTexture(img));
          createFallingHearts(textures);
          animate();
    });

    window['addEventListener'](_0x1f451e(0xa3), () => {
        const _0x13db63 = _0x1f451e
          , _0x25bfeb = window['innerWidth']
          , _0x43bec5 = window[_0x13db63(0xfd)];
        camera[_0x13db63(0xeb)] = _0x25bfeb / _0x43bec5,
        camera[_0x13db63(0xc1)](),
        renderer['setSize'](_0x25bfeb, _0x43bec5);
    }
    );

    // ----- TÍNH NĂNG MỚI: BẮT SAO BĂNG VÀ VẬT PHẨM RƠI -----
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onMouseClick(event) {
        // Xử lý cho cả chuột và chạm màn hình
        const clientX = event.clientX || event.touches[0].clientX;
        const clientY = event.clientY || event.touches[0].clientY;

        mouse.x = (clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        // Kiểm tra va chạm với sao băng
        const starIntersects = raycaster.intersectObjects(shootingStars);
        if (starIntersects.length > 0) {
            const clickedStar = starIntersects[0].object;
            createHeartExplosion(clickedStar.position);
            scene.remove(clickedStar);
            const index = shootingStars.indexOf(clickedStar);
            if (index > -1) {
                shootingStars.splice(index, 1);
            }
            return; 
        }

        // Kiểm tra va chạm với các ảnh rơi
        const heartIntersects = raycaster.intersectObjects(heartMeshes);
        if (heartIntersects.length > 0) {
            const clickedHeart = heartIntersects[0].object;
            createHeartExplosion(clickedHeart.position);
            scene.remove(clickedHeart);
            const index = heartMeshes.indexOf(clickedHeart);
            if (index > -1) {
                heartMeshes.splice(index, 1);
            }
        }
    }

    let heartTextures; 
    
    loadHeartImage('./heart.png').then(img => {
        heartTextures = createHeartTexture(img);
    });

    function createHeartExplosion(position) {
        if (!heartTextures) return; 
        
        const heartsCount = 15;
        for (let i = 0; i < heartsCount; i++) {
            const geometry = new THREE.PlaneGeometry(0.5, 0.5);
            const material = new THREE.MeshBasicMaterial({
                map: heartTextures,
                transparent: true,
                depthWrite: false,
                depthTest: true
            });
            const heart = new THREE.Mesh(geometry, material);
            heart.position.copy(position);

            const velocity = new THREE.Vector3(
                (Math.random() - 0.5) * 0.3,
                (Math.random() - 0.5) * 0.3,
                (Math.random() - 0.5) * 0.3
            );

            scene.add(heart);

            let life = 0;
            const animateHeart = () => {
                if (life < 60) {
                    heart.position.add(velocity);
                    heart.material.opacity = 1 - (life / 60);
                    life++;
                    requestAnimationFrame(animateHeart);
                } else {
                    scene.remove(heart);
                }
            };
            animateHeart();
        }
    }
    
    window.addEventListener('click', onMouseClick, false);
    window.addEventListener('touchstart', onMouseClick, false); // Thêm sự kiện cho màn hình cảm ứng