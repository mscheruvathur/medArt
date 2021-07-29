export default class APIService{
    static PortalRegistration(body) {
        return fetch('http://127.0.0.1:8000/api/hospital/', {
            
            'method' : 'POST',
            headers: {
                'Content-type':'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
}