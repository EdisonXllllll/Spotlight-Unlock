let keyListMap = new Map();
keyListMap.set('knowledge',100);
keyListMap.set('suggestion',90);
keyListMap.set('web',80);

if ($response.status == 200) {
	let org = JSON.parse($response.body);
	let res = JSON.parse($response.body)[0];
	let result = res.results;

	for (var i=0;i<result.length;i++)
	{ 
	    if(result[i].section_key == 'suggestion'){
	    	result[i].replacement = 'tophit'
	    }
	}


	res.results = result;

	org[0] = res

	console.log(org);

	$done({body:JSON.stringify(org)});
}
$done();
