const LocalStorageService = (function () {
    var _service;

    function getService() {
        if (!_service) {
            _service = this;
            return _service
        }
        return _service
    }
    function setUserName(name) {
        localStorage.setItem('userName', name);
    }

    function getUserName() {
        return localStorage.getItem('userName');
    }

    function clearUserName() {
        localStorage.removeItem('userName');
    }

    function setUserRole(role) {
        localStorage.setItem('userRole', role);
    }

    function getUserRole() {
        return localStorage.getItem('userRole');
    }

    function clearUserRole() {
        localStorage.removeItem('userRole');
    }

    function setToken(token) {
        localStorage.setItem('token', token);
    }

    function getToken() {
        return localStorage.getItem('token');
    }

    function clearToken() {
        localStorage.removeItem('token');
    }
    function setId(id) {
        localStorage.setItem('id', id);
    }

    function getId() {
        return localStorage.getItem('id');
    }

    function clearId() {
        localStorage.removeItem('id');
    }

    return {
        getService: getService,
        setUserName: setUserName,
        getUserName: getUserName,
        clearUserName: clearUserName,
        setUserRole: setUserRole,
        getUserRole: getUserRole,
        clearUserRole: clearUserRole,
        setToken: setToken,
        getToken: getToken,
        clearToken: clearToken,
        setId: setId,
        getId: getId,
        clearId: clearId,

    }
})();
export default LocalStorageService;