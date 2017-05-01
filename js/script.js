var positionOne = {
        'frets': [0, 3, 18, 21, 36, 38, 54, 56, 72, 74, 90, 93],
        'aminor' : [5],
        'bminor' : [7],
        'cminor' : [8],
        'dminor' : [10],
        'eminor' : [0, 12],
        'fminor' : [1, 13],
        'gminor' : [3]
}

var positionTwo = {
        'frets': [0, 2, 18, 20, 35, 37, 53, 56, 71, 74, 90, 92],
        'aminor' : [8],
        'bminor' : [10],
        'cminor' : [11],
        'dminor' : [1, 13],
        'eminor' : [3, 15],
        'fminor' : [4],
        'gminor' : [6]
}

var positionThree = {
        'frets': [0, 2, 18, 21, 35, 38, 54, 56, 72, 74, 90, 92],
        'aminor' : [10],
        'bminor' : [12],
        'cminor' : [1, 13],
        'dminor' : [3],
        'eminor' : [5],
        'fminor' : [6],
        'gminor' : [8]
}

var positionFour = {
        'frets': [0, 3, 19, 21, 36, 38, 54, 56, 72, 75, 90, 93],
        'aminor' : [0, 12],
        'bminor' : [2, 14],
        'cminor' : [3],
        'dminor' : [5],
        'eminor' : [7],
        'fminor' : [8],
        'gminor' : [10]
}

var positionFive = {
        'frets': [0, 2, 18, 20, 35, 38, 53, 56, 72, 74, 90, 92],
        'aminor' : [3, 15],
        'bminor' : [5],
        'cminor' : [6],
        'dminor' : [8],
        'eminor' : [10],
        'fminor' : [11],
        'gminor' : [1, 13]
}

$(() => {
    var allFrets = $('.fret');

    $('#scale-select').add('#position-select').add('#key-select').change(() => {
        var selectedScale = $('#scale-select').val();
        var selectedKey = $('#key-select').val();
        var key = `${selectedScale}${selectedKey}`
        var selectedPosition = $('#position-select').val();

        var removeHighlights = () => {
            allFrets.removeClass('selected');
        }

        var highlightFrets = (position) => {
            var rootNotes = position[key]
            rootNotes.forEach((rootNote) => {
                position['frets'].forEach((fret) => {
                    allFrets[rootNote+fret].className += (' selected');
                })
            })
        }

        removeHighlights();

        switch (selectedPosition) {
            case 'one':
                highlightFrets(positionOne);
                break;
            case 'two':
                highlightFrets(positionTwo);
                break;
            case 'three':
                highlightFrets(positionThree);
                break;
            case 'four':
                highlightFrets(positionFour);
                break;
            case 'five':
                highlightFrets(positionFive);
                break;
        }
    })

})
