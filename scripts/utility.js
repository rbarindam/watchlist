const failIf = ({t, condition, message}) => {
    if( !condition || condition(t) ) {
        throw message || "fail condition matched for " + t;
    }
};

const failIfNull = ({t, message}) => failIf({t, message, condition: it => !it});