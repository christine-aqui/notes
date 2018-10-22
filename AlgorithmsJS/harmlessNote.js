// harmless ransom note algorithm

const harmlessNote = (noteText, magtext) => {
    let noteArr = noteText.split(' ');
    let magArr = magtext.split(' ');
    // using a hashtable
    let magObj = {}
    magArr.forEach( word => {
        if(!magObj[word]){
            magObj[word] = 0
        }
        magObj[word]++;
    })
    console.log(magObj);
}



// for testing 
// harmlessNote('', 'hello world people');