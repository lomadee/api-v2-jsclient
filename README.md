# Client JavaScript para Lomadee API v2
Este client foi desenvolvido para auxilar o desenvolvimento de sites utilizando a API v2 da Lomadee. Saiba mais sobre as API's em https://developer.lomadee.com/afiliados/

## Configuração
Adicione na tag <head> de seu site a seguinte configuração:
```html
<script type="text/javascript" charset="UTF-8" src="https://tagmanager.lomadee.com/client-api-v2.js"></script>
<script>
	var lomadee_api_setup = {
		enviromnent : '', //sandbox ou production
		appToken : '',
		sourceId : ''
	}
</script>
```

## Método para realização de buscas na API
```javascript
var query = '';

lomadeeAPIv2.search(query, function(response) {});
```

## Exemplos de querys
```javascript
lomadeeAPIv2.search('/offer/_bestsellers', function(response) {
	console.log(response);
});

lomadeeAPIv2.search('/offer/_search?keyword=tv', function(response) {
	console.log(response);
});
```

** Veja que as query's são o fragmento do path das API's. Veja todas as API's disponíveis aqui:
** https://developer.lomadee.com/afiliados/ofertas/
** https://developer.lomadee.com/afiliados/cupons/