//This is the same exact code that we would use in playwright automation
// while trying flaky test case atleast obce
// to be usied while finding a locator


let retry = 0;
do {
    console.log("Execute a code!");
    console.log("Retrying.....", retry);
    retry++;
} while (retry < 3);