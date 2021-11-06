function landscape(w, h) {
    return (w > h ? true : false);
}

let checkLandscape1 = landscape(400, 200);
console.log('Landscape:', checkLandscape1);

let checkLandscape2 = landscape(100, 200);
console.log('Landscape:', checkLandscape2);