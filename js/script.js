var scales = {
    // 'aminor' : ['a', 'c', 'd', 'e', 'g'],
    // 'bminor' : ['b', 'd', 'e', 'fsharp', 'a']
    'aminor' : 5,
    'bminor' : 7,
    'cminor' : 8,
    'dminor' : 10,
    'eminor' : 12,
    'fminor' : 13,
    'gminor' : 15
}
var positionOne = [0, 3, 18, 21, 36, 38, 54, 56, 72, 74, 90, 93];
var positionTwo = [3, 5, 21, 23, 38, 40, 56, 59, 74, 77, 93, 95];
var positionThree = [5, 7, 23, 26, 40, 43, 59, 61, 77, 79, 95, 97];
var positionFour = [-5, -2, 7, 10, 14, 16, 26, 28, 31, 33, 43, 45, 49, 51, 61, 63, 67, 70, 79, 82, 85, 88, 97, 100];
var positionFive = [-2, 0, 10, 12, 16, 18, 28, 30, 33, 36, 45, 48, 51, 54, 63, 66, 70, 72, 82, 84, 88, 90, 100, 102];

$(() => {
    var allFrets = $('.fret');

    $('#scale-select').add('#position-select').add('#key-select').change(() => {
        var selectedScale = $('#scale-select').val();
        var selectedKey = $('#key-select').val();
        var selectedPosition = $('#position-select').val();
        var rootNote = scales[`${selectedScale}${selectedKey}`];
        var frets = [];
        // var rootFret = $(`#six-string > .${selectedScale}`);
        $('.fret').removeClass('selected');

        if (selectedPosition === 'one') {
            positionOne.forEach((fret) => {
             	frets.push(allFrets[fret + rootNote])
            })
        }

        if (selectedPosition === 'two') {
            positionTwo.forEach((fret) => {
             	frets.push(allFrets[fret + rootNote])
            })
        }

        if (selectedPosition === 'three') {
            positionThree.forEach((fret) => {
             	frets.push(allFrets[fret + rootNote])
            })
        }

        if (selectedPosition === 'four') {
            positionFour.forEach((fret) => {
             	frets.push(allFrets[fret + rootNote])
            })
        }

        if (selectedPosition === 'five') {
            positionFive.forEach((fret) => {
             	frets.push(allFrets[fret + rootNote])
            })
        }

        frets.forEach((fret) => {
            fret.className += ' selected';
        })
    })

})
