/*!
 * WellnessLiving JavaScript SDK ({{VERSION}})
 * Spec version: {{SPEC_VERSION}}
 * Build date:   {{BUILD_DATE}}
 * Endpoints:    {{METHOD_COUNT}}
 *
 * Auto-generated from:
 * https://github.com/wellnessliving/openapi/blob/main/{{VERSION}}/openapi.yaml
 *
 * Usage (browser via script tag):
 *   <script src="wl-sdk.js"></script>
 *   <script>
 *     var client = new WlSdk({ token: 'YOUR_JWT_TOKEN' });
 *     client.coreRequestExample().then(function(data) { console.log(data); });
 *   </script>
 *
 * Usage (CommonJS / Node.js):
 *   var WlSdk = require('./wl-sdk.js');
 *   var client = new WlSdk({ token: 'YOUR_JWT_TOKEN' });
 *
 * Usage (AMD / RequireJS):
 *   define(['wl-sdk'], function(WlSdk) { ... });
 */
(function(global, factory)
{
  if (typeof exports === 'object' && typeof module !== 'undefined')
  {
    module.exports = factory();
  }
  else if (typeof define === 'function' && define.amd)
  {
    define(factory);
  }
  else
  {
    (typeof globalThis !== 'undefined' ? globalThis : global || self).WlSdk = factory();
  }
})(this, function()
{
  'use strict';

  /**
   * WellnessLiving API client.
   *
   * @param {Object} options Configuration options.
   * @param {string} [options.token] JWT Bearer token for authentication.
   * @param {string} [options.baseUrl] API server base URL.
   *  Default: 'https://staging.wellnessliving.com' (US data center).
   *  Use 'https://demo.wellnessliving.com' for the Australia data center.
   * @param {number} [options.timeout] Request timeout in milliseconds. Default: 30000.
   * @constructor
   */
  function WlClient(options)
  {
    if (!options || typeof options !== 'object')
    {
      throw new TypeError('WlSdk: options must be a plain object');
    }

    /** @type {string|null} JWT Bearer token for authentication. */
    this.token = options.token || null;

    /** @type {string} API server base URL (no trailing slash). */
    this.baseUrl = options.baseUrl || 'https://staging.wellnessliving.com';
    if (this.baseUrl.charAt(this.baseUrl.length - 1) === '/')
    {
      this.baseUrl = this.baseUrl.slice(0, -1);
    }

    /** @type {number} Request timeout in milliseconds. */
    this.timeout = (options.timeout > 0) ? Number(options.timeout) : 30000;
  }

  /**
   * Sends an HTTP request to the API.
   *
   * GET and HEAD requests encode params as a query string.
   * All other methods encode params as application/x-www-form-urlencoded body.
   *
   * @param {string} path Endpoint path (e.g., '/Core/Request/Example.json').
   * @param {Object} params Query parameters (GET) or form fields (POST/PUT/etc.).
   * @param {string} method HTTP method: 'GET', 'POST', 'PUT', 'DELETE', etc.
   * @returns {Promise<Object>} Parsed JSON response data.
   */
  WlClient.prototype.request = function(path, params, method)
  {
    var self = this;
    var httpMethod = (method || 'GET').toUpperCase();
    var url = self.baseUrl + path;
    var headers = {};

    if (self.token)
    {
      headers['Authorization'] = 'Bearer ' + self.token;
    }

    var fetchOptions = {
      method: httpMethod,
      headers: headers,
    };

    if (httpMethod === 'GET' || httpMethod === 'HEAD')
    {
      var parts = [];
      if (params && typeof params === 'object')
      {
        Object.keys(params).forEach(function(key)
        {
          var val = params[key];
          if (Array.isArray(val))
          {
            val.forEach(function(item)
            {
              if (item !== null && item !== undefined)
              {
                parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(item)));
              }
            });
          }
          else if (val !== null && val !== undefined)
          {
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(String(val)));
          }
        });
      }
      if (parts.length > 0)
      {
        url = url + '?' + parts.join('&');
      }
    }
    else
    {
      var formData = new URLSearchParams();
      if (params && typeof params === 'object')
      {
        Object.keys(params).forEach(function(key)
        {
          var val = params[key];
          if (Array.isArray(val))
          {
            val.forEach(function(item)
            {
              if (item !== null && item !== undefined)
              {
                formData.append(key, String(item));
              }
            });
          }
          else if (val !== null && val !== undefined)
          {
            formData.append(key, String(val));
          }
        });
      }
      fetchOptions.body = formData;
    }

    var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
    var timerId = null;

    if (controller)
    {
      fetchOptions.signal = controller.signal;
      timerId = setTimeout(function()
      {
        controller.abort();
      }, self.timeout);
    }

    function cleanup()
    {
      if (timerId !== null)
      {
        clearTimeout(timerId);
        timerId = null;
      }
    }

    return fetch(url, fetchOptions).then(
      function(response)
      {
        cleanup();
        return response.json().then(function(data)
        {
          if (!response.ok)
          {
            var err = new Error('WlSdk: ' + httpMethod + ' ' + path + ' returned HTTP ' + response.status);
            err.status = response.status;
            err.response = data;
            throw err;
          }
          return data;
        });
      },
      function(err)
      {
        cleanup();
        throw err;
      }
    );
  };

  /**
   * SDK channel: 'stable' or 'dev'.
   * @type {string}
   */
  WlClient.CHANNEL = '{{VERSION}}';

  /**
   * OpenAPI spec version this SDK was generated from.
   * @type {string}
   */
  WlClient.SPEC_VERSION = '{{SPEC_VERSION}}';

  // ---------------------------------------------------------------------------
  // Generated API methods ({{METHOD_COUNT}} total)
  // ---------------------------------------------------------------------------

// {{GENERATED_METHODS}}

  return WlClient;
});
