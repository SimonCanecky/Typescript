console.log("(11, 5, 2)");
console.log(equalSlices(11,5,2));

function equalSlices(totalSlices : number, noRecipients : number , slicesEach : number) : boolean {
return noRecipients * slicesEach <= totalSlices;
}