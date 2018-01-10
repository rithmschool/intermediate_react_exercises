const SAD_FACE = 'SAD_FACE';
const HAPPY_FACE = 'HAPPY_FACE';
const CONFUSED_FACE = 'CONFUSED_FACE';
const ANGRY_FACE = 'ANGRY_FACE';

function sadFace(){
    return {
        type: SAD_FACE,
        payload: '(ಥ﹏ಥ)'
    }
};

function happyFace(){
    return {
        type: HAPPY_FACE,
        payload: '٩(◕‿◕｡)۶'
    }
};

function confusedFace(){
    return {
        type: CONFUSED_FACE,
        payload:  'ლ(ಠ_ಠ ლ)'
    }
};

function angryFace(){
    return {
        type: ANGRY_FACE,
        payload: '٩(ఠ益ఠ)۶'
    }
};