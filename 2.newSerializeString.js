function newSerializeString(string) {
    let splited = string.join(``);
    let newArrLetters = [];
    for (let i = 0; i < splited.length; i++) {
        if (!newArrLetters.includes(splited[i])) {
            newArrLetters.push(splited[i]);
        }
    }
    for (let i = 0; i < newArrLetters.length; i++) {
        let indexes = [];
        let symbol = newArrLetters[i];
        for (let i = 0; i < splited.length; i++) {
            if (symbol === splited[i]) {
                indexes.push(i);
            }
        }
        console.log(`${symbol}: ${indexes.join(`/`)}`);
    }

}
newSerializeString(["MiroslavPetrov"]);
