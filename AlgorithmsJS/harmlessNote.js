// harmless ransom note algorithm

const harmlessNote = (noteText, magtext) => {
  let noteArr = noteText.split(" ");
  let magArr = magtext.split(" ");
  // using a hashtable
  let magObj = {};
  magArr.forEach(word => {
    if (!magObj[word]) {
      magObj[word] = 0;
    }
    magObj[word]++;
  });
  //
  let noteStatus = true;
  noteArr.forEach(word => {
    if (magObj[word]) {
      magObj[word]--;
      if (magObj[word] < 0) {
        noteStatus = false;
      }
    } else {
      noteStatus = false;
    }
  });

  console.log(magObj);
  console.log("Note status ", noteStatus);
};

// for testing
// harmlessNote("hello people", "hello world people");
