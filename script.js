function stringChop(str, size) {
	if(str==null || typeof str!='string')return [];

	size=parseInt(size,10);
	if(isNAN(size) || size<=0)return [];

	const result=[];
	for (let i = 0; i < str.length; i+=size) {
		result.push(str.slice(i,i+size));
	}
	return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
