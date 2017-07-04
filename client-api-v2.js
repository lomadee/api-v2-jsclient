var lomadeeAPIv2 = (function() {
	var that = {};

	that.search = function(query, callback) {
		lomadeeAPIv2.rest(getEnviromnent(lomadee_api_setup.enviromnent) + '/v2/' + lomadee_api_setup.appToken + query + getSourceId(lomadee_api_setup.sourceId, query), callback);
	}

	that.rest = function(url, callback) {
		loadJSON(url, callback, function(url){
	        console.log('[API Lomadee v2] Timeout -> '+url);
	    });
	}

	return that;
})();

function getSourceId(sourceId, query) {
	if (query.indexOf('?')!=-1) {
		return '&sourceId='+sourceId;
	} else {
		return '?sourceId='+sourceId;
	}
}

function getEnviromnent(enviromnent) {
	if (enviromnent=='production') {
		return 'https://api.lomadee.com';
	} else {
		return 'https://sandbox-api.lomadee.com';
	}
}

function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function()
    {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}