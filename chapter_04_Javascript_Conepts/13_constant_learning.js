const BASE_URL = "https://google.com";
// const BASE_URL = "https://google.com";
//BASE_URL = "https:/ / staging.google.com";
// if we redeclare tha we will gte error -  TypeError: Assignment to constant variable.


let name = "pending";
name = "done";
{
    let name = "Dutta";
}

function say() {
    let name = "Dutta";
}
say();
say();