/*jslint
    browser: true,
    devel:true ,
    node:true,
    nomen: true,
    es5:true
*/

/**
 * @auth Gaurav Meena
 * @date 01/30/2014
 * service 
 */

/*global angular*/
'use strict';

angular.module('odeskApp')
    .factory('Workspace',  ['$resource', function ($resource) {
        return $resource('/api/workspace/:workspaceID', {}, {
            all: {method: 'GET', params: {workspaceID: 'all'}, isArray: true},
            query: {method: 'GET', params: {}, isArray: false}
        });
    }]);

angular.module('odeskApp')
    .factory('Profile',  ['$resource', function ($resource) {
        return $resource('/api/profile', {}, {
            query: {method: 'GET', params: {}, isArray: false},
            update: {method: 'POST', params: {}, isArray: false}
        });
    }]);

angular.module('odeskApp')
    .factory('Project',  ['$resource', function ($resource) {
        return $resource('/api/project/:workspaceID', {}, {
            query: {method: 'GET', params: {}, isArray: true}
        });
    }]);

angular.module('odeskApp')
    .factory('Password',  ['$resource', function ($resource) {
        return $resource('/api/user/password', {}, {
            update: {method: 'POST', params: {}, isArray: false, headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}}
        });
    }]);