const URL = "https://jsonplaceholder.typicode.com/posts/";

// let i = 1;

let promises = [];

async function fetxh() {
    for (let i = 1; i <= 5; i++) {
        promises.push(fetch(URL + i));
    }

    console.log(promises)

    const resp = await Promise.all(promises);

    const post = [];

    for (response of resp){
        const pos = response.json();
        post.push(pos);
    }

    console.log(post)
}


fetxh();



