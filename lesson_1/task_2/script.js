function rowsAndСolumns(firstEnter, secondEnter) {
    if(firstEnter.length <= 3 && secondEnter > 0 && secondEnter <= 10 ) {
        let newStr = "";
        let columns = "";
        let i = 0;
        let j = 0;
        while(i++ < secondEnter) {
            newStr += `${firstEnter} `;
        }
        while(j++ < secondEnter) {
            columns += `${newStr}\n`;
        }
        console.log(columns);
    } else {
        console.log("Incorrect input!");
    }
}

rowsAndСolumns(prompt('Enter'), Number(prompt('Enter the number')));
