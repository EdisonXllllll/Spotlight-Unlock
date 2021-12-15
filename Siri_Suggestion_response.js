let keyListMap = new Map();
keyListMap.set('knowledge',100);
keyListMap.set('suggestion',90);
keyListMap.set('web',80);

if ($response.status == 200) {
	let org = JSON.parse($response.body);
	let res = JSON.parse($response.body)[0];
	let result = res.results;

	result.sort(function(a,b){
		return keyListMap.get(b.section_key) - keyListMap.get(a.section_key);
	})

	res.results = result;

	org[0] = res

	console.log(JSON.stringify(org));

	$done({body:JSON.stringify(org)});
}
$done();