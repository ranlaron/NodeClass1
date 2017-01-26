

setTimeout(function () {
    try {
        throw new Error("DANGER ZONE! ran");
    } catch (e) {
        console.log("I caught the error PHEW!");
    }
}
, 2000);
