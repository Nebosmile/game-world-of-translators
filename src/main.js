console.log('main');
import * as PIXI from 'pixi.js'


let app = new PIXI.Application({
 	width: 1920,
	height : 1080,
	antialias: true,
	transparent: false,
	resolution: 1
});
document.getElementById('canvContainer').appendChild(app.view)

let type ='WebGL'
let images = [
    '/src/assets/img/11.png',
    '/src/assets/img/chibi.png',
    '/src/assets/img/circus.png'
]
if(!PIXI.utils.isWebGLSupported()){
	type ='canvas'
}
function loadProgressHandler(loader) {
    console.log('loading');
    console.log(loader.progress);
}

PIXI.utils.sayHello(type)
PIXI.loader.add(images)
    .on('progress',loadProgressHandler)
    .load(setup);
function setup() {
	let sprite = new PIXI.Sprite(
	  	PIXI.loader.resources['/src/assets/img/11.png'].texture



	);
    // sprite.x=0;
    // sprite.y=0;

    // sprite.scale.set(0.5, 0.5);
    sprite.pivot.set(32, 32);
    sprite.rotation = 0.5;
	console.log(sprite.x);
    console.log(sprite.y);
	app.stage.addChild(sprite);
}
