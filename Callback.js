function start(callback1, callback2) {
    setTimeout(() => {
        console.log("Starting");
        callback1(callback2);
    }, 2000);
}

function doing(callback1) {
    setTimeout(() => {
        console.log("Doing");
        callback1();
    }, 1500);
}

function done() {
    setTimeout(() => {
        setTimeout(() => {
            console.log("Done");
        });
    }, 500);
}

start(doing, done);