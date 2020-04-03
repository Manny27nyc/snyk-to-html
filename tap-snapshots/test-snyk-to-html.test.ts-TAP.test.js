/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/snyk-to-html.test.ts TAP template output displays vulns in descending order of severity > should be expected snapshot 1`] = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta http-equiv="Content-type" content="text/html; charset=utf-8">
  <meta http-equiv="Content-Language" content="en-us">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Snyk test report</title>
  <meta name="description" content="81 known vulnerabilities found in 139 vulnerable dependency paths.">
  <link rel="icon" type="image/png" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.png"
    sizes="194x194">
  <link rel="shortcut icon" href="https://res.cloudinary.com/snyk/image/upload/v1468845142/favicon/favicon.ico">
  <style type="text/css">
  
    body {
      -moz-font-feature-settings: "pnum";
      -webkit-font-feature-settings: "pnum";
      font-variant-numeric: proportional-nums;
      display: flex;
      flex-direction: column;
      font-feature-settings: "pnum";
      font-size: 100%;
      line-height: 1.5;
      min-height: 100vh;
      -webkit-text-size-adjust: 100%;
      margin: 0;
      padding: 0;
      background-color: #F5F5F5;
      font-family: 'Arial', 'Helvetica', Calibri, sans-serif;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 500;
    }
  
    a,
    a:link,
    a:visited {
      border-bottom: 1px solid #4b45a9;
      text-decoration: none;
      color: #4b45a9;
    }
  
    a:hover,
    a:focus,
    a:active {
      border-bottom: 2px solid #4b45a9;
    }
  
    hr {
      border: none;
      margin: 1em 0;
      border-top: 1px solid #c5c5c5;
    }
  
    ul {
      padding: 0 1em;
      margin: 1em 0;
    }
  
    code {
      background-color: #EEE;
      color: #333;
      padding: 0.25em 0.5em;
      border-radius: 0.25em;
    }
  
    pre {
      background-color: #333;
      font-family: monospace;
      padding: 0.5em 1em 0.75em;
      border-radius: 0.25em;
      font-size: 14px;
    }
  
    pre code {
      padding: 0;
      background-color: transparent;
      color: #fff;
    }
  
    a code {
      border-radius: .125rem .125rem 0 0;
      padding-bottom: 0;
      color: #4b45a9;
    }
  
    a[href^="http://"]:after,
    a[href^="https://"]:after {
      background-image: linear-gradient(transparent,transparent),url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20112%20109%22%3E%3Cg%20id%3D%22Page-1%22%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20id%3D%22link-external%22%3E%3Cg%20id%3D%22arrow%22%3E%3Cpath%20id%3D%22Line%22%20stroke%3D%22%234B45A9%22%20stroke-width%3D%2215%22%20d%3D%22M88.5%2021l-43%2042.5%22%20stroke-linecap%3D%22square%22%2F%3E%3Cpath%20id%3D%22Triangle%22%20fill%3D%22%234B45A9%22%20d%3D%22M111.2%200v50L61%200z%22%2F%3E%3C%2Fg%3E%3Cpath%20id%3D%22square%22%20fill%3D%22%234B45A9%22%20d%3D%22M66%2015H0v94h94V44L79%2059v35H15V30h36z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");
      background-repeat: no-repeat;
      background-size: .75rem;
      content: "";
      display: inline-block;
      height: .75rem;
      margin-left: .25rem;
      width: .75rem;
    }
  
  
  /* Layout */
  
    [class*=layout-container] {
      margin: 0 auto;
      max-width: 71.25em;
      padding: 1.9em 1.3em;
      position: relative;
    }
    .layout-container--short {
      padding-top: 0;
      padding-bottom: 0;
    }
  
    .layout-container--short:after {
      display: block;
      content: "";
      clear: both;
    }
  
  /* Header */
  
    .header {
      padding-bottom: 1px;
    }
  
    .project__header {
      background-color: #4C4A73;
      color: #fff;
      margin-bottom: -1px;
      padding-top: 1em;
      padding-bottom: 0.25em;
      border-bottom: 2px solid #BBB;
    }
  
    .project__header__title {
      overflow-wrap: break-word;
      word-wrap: break-word;
      word-break: break-all;
      margin-bottom: .1em;
      margin-top: 0;
      float: left;
    }
  
    .timestamp {
      float: right;
      clear: none;
      margin-bottom: 0;
    }
  
    .meta-counts {
      clear: both;
      display: block;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: 0 0 1.5em;
      color: #fff;
      clear: both;
      font-size: 1.1em;
    }
  
    .meta-count {
      display: block;
      flex-basis: 100%;
      margin: 0 1em 1em 0;
      float: left;
      padding-right: 1em;
      border-right: 2px solid #fff;
    }
  
    .meta-count:last-child {
      border-right: 0;
      padding-right: 0;
      margin-right: 0;
    }
  
  /* Card */
  
    .card {
      background-color: #fff;
      border: 1px solid #c5c5c5;
      border-radius: .25rem;
      margin: 0 0 2em 0;
      position: relative;
      min-height: 40px;
      padding: 1.5em;
    }
  
    .card .label {
      background-color: #767676;
      border: 2px solid #767676;
      color: white;
      padding: 0.25rem 0.75rem;
      font-size: 0.875rem;
      text-transform: uppercase;
      display: inline-block;
      margin: 0;
      border-radius: 0.25rem;
    }
  
    .card .label__text {
      vertical-align: text-top;
    }
  
    .card .label--high {
      background-color: #B51B72;
      border-color: #B51B72;
    }
  
    .card .label--medium {
      background-color: #E29022;
      border-color: #E29022;
    }
  
    .card .label--low {
      background-color: #222049;
      border-color: #222049;
    }
  
    .card .card.severity--low {
      border-color: #222049;
    }
  
    .card .card.severity--medium {
      border-color: #E29022;
    }
  
    .card .card.severity--high {
      border-color: #B51B72;
    }
  
    .card--vuln {
      padding-top: 4em;
      max-width: 48.75em;
    }
  
    .card--vuln .label {
      left: 0;
      position: absolute;
      top: 1.1em;
      padding-left: 1.9em;
      padding-right: 1.9em;
      border-radius: 0 0.25rem 0.25rem 0;
    }
  
    .card--vuln .card__section h2 {
      font-size: 22px;
      margin-bottom: 0.5em;
    }
  
    .card--vuln .card__section p {
      margin: 0 0 0.5em 0;
    }
  
    .card--vuln .card__meta {
      padding: 0 0 0 1em;
      margin: 0;
      font-size: 1.1em;
    }
  
    .card .card__meta__paths {
      font-size: 0.9em;
    }
  
    .card--vuln .card__title {
      font-size: 28px;
      margin-top: 0;
    }
  
    .card--vuln .card__cta p {
      margin: 0;
      text-align: right;
    }
  
    .source-panel {
      clear: both;
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      align-items: flex-start;
      padding: 0.5em 0;
      width: fit-content;
      padding: 0.5em;
    }
  
  
  
  </style>
</head>

<body class="section-projects">
  <main class="layout-stacked">

    <div class="layout-stacked__header header">
      <header class="project__header">
        <div class="layout-container--short">
            <h1 class="project__header__title">Snyk test summary</h1>

          <p class="timestamp">TIMESTAMP</p>
          <div class="source-panel">
            <span>Scanned the following paths:</span>
            <ul>
              <li>./java-goof (maven)</li><li>./goof (npm)</li>
            </ul>
          </div>

          <div class="meta-counts">
            <div class="meta-count"><span>81</span> <span>known vulnerabilities</span></div>
            <div class="meta-count"><span>139 vulnerable dependency paths</span></div>
            <div class="meta-count"><span>492</span> <span>dependencies</span></div>
          </div><!-- .meta-counts -->
        </div><!-- .layout-container--short -->
      </header><!-- .project__header -->
    </div><!-- .layout-stacked__header -->

    <div class="layout-stacked__content">
      <div class="layout-container--short" style="padding-top: 35px;">
        <div class="cards--vuln filter--patch filter--ignore">
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Prototype Override Protection Bypass</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              qs
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, body-parser@1.9.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>qs</code> to version <code>6.4.0</code> or higher.
          <strong>Note:</strong> The fix was backported to the following versions <code>6.3.2</code>, <code>6.2.3</code>, <code>6.1.2</code>, <code>6.0.4</code>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/ljharb/qs/commit/beade029171b8cef9cee0d03ebe577e2dd84976d">GitHub Commit</a></li>
          <li><a href="https://github.com/ljharb/qs/issues/200">Report of an insufficient fix</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:qs:20170213">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary File Write via Archive Extraction (Zip Slip)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.zeroturnaround:zt-zip
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.zeroturnaround:zt-zip</code> to version 1.13 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/zeroturnaround/zt-zip/commit/759b72f33bc8f4d69f84f09fcb7f010ad45d6fff">GitHub Commit</a></li>
          <li><a href="https://snyk.io/research/zip-slip-vulnerability">Zip Slip Advisory</a></li>
          <li><a href="https://github.com/snyk/zip-slip-vulnerability">List of fixed projects that contained Zip Slip</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGZEROTURNAROUND-31681">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">GPL-3.0 license</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Module:
          
                              org.jboss.logging:jboss-logging
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:maven:org.jboss.logging:jboss-logging:GPL-3.0">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Insecure Defaults</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30058">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary Code Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.32, 2.5.10.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/rapid7/metasploit-framework/pull/8072">Metasploit GitHub PR</a></li>
          <li><a href="https://github.com/rapid7/metasploit-framework/issues/8064">Metasploit GitHub Issue</a></li>
          <li><a href="https://github.com/rapid7/metasploit-framework/pull/8072/commits/fc0f63e77471baa40057effaaa8be0f205adc6b7">Metasploit GitHub Commit</a></li>
          <li><a href="https://github.com/tengzhangchao/Struts2_045-Poc">PoC</a></li>
          <li><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2017-5638">CVE</a></li>
          <li><a href="https://www.exploit-db.com/exploits/41570/">Exploit DB</a></li>
          <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-045">Struts Wiki</a></li>
          <li><a href="http://blog.talosintelligence.com/2017/03/apache-0-day-exploited.html">Talos Intelligence Blog</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30207">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Command Injection</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30770">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary Code Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.20.2, 2.3.24.2, 2.3.28.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3082">NVD</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30771">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary Command Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30772">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Directory Traversal</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30778">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary Command Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Developers are strongly advised to upgrade their <em>Apache Struts</em> components to version <code>2.3.34</code>, <code>2.5.13</code> or higher.</p>
          <p>It is possible that some REST actions stop working because of applied default restrictions on available classes. In this case please investigate the new interfaces that were introduced to allow class restrictions per action, those interfaces are:</p>
          <ul>
          <li>org.apache.struts2.rest.handler.AllowedClasses</li>
          <li>org.apache.struts2.rest.handler.AllowedClassNames</li>
          <li>org.apache.struts2.rest.handler.XStreamPermissionProvider</li>
          </ul>
          <p>If for some reason upgrading is not an option, consider the following workarounds:</p>
          <ol>
          <li><p>Disable handling XML pages and requests to such pages</p>
          <pre><code class="language-xml">&lt;constant name=&quot;struts.action.extension&quot; value=&quot;xhtml,,json&quot; /&gt;</code></pre>
          </li>
          <li><p>Override getContentType in XStreamHandler</p>
          <pre><code class="language-java">public class MyXStreamHandler extends XStreamHandler { 
          public String getContentType() {
            return &quot;not-existing-content-type-@;/&amp;%$#@&quot;;
          }
          }</code></pre>
          </li>
          <li><p>Register the handler by overriding the one provided by the framework in your struts.xml</p>
          <pre><code class="language-xml">&lt;bean type=&quot;org.apache.struts2.rest.handler.ContentTypeHandler&quot; name=&quot;myXStreamHandmer&quot; class=&quot;com.company.MyXStreamHandler&quot;/&gt;
          &lt;constant name=&quot;struts.rest.handlerOverride.xml&quot; value=&quot;myXStreamHandler&quot;/&gt;</code></pre>
          </li>
          </ol>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://lgtm.com/blog/apache_struts_CVE-2017-9805_announcement">LGTM Advisory</a></li>
          <li><a href="https://lgtm.com/blog/apache_struts_CVE-2017-9805">LGTM Vulnerability Details</a></li>
          <li><a href="https://blogs.apache.org/foundation/entry/apache-struts-statement-on-equifax">Apache Struts Statement on Equifax Security Breach</a></li>
          <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-052">Apache Security Bulletin</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31495">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.33, 2.5.12 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://struts.apache.org/docs/s2-049.html">Struts Security Bulletin</a></li>
          <li><a href="https://lists.apache.org/thread.html/3795c4dd46d9ec75f4a6eb9eca11c11edd3e796c6c1fd7b17b5dc50d@%3Cannouncements.struts.apache.org%3E">Struts Announcements Mailing List</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31500">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Remote Code Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to versions 2.3.35, 2.5.17 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=1620019">RedHat Bugzilla Bug</a></li>
          <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-057">Struts2 Security Bulletin</a></li>
          <li><a href="https://lgtm.com/blog/apache_struts_CVE-2018-11776">Lgtm Blog</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-32477">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary Code Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts.xwork:xwork-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30797">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Parameter Alteration</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts.xwork:xwork-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30798">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Improper Input Validation</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts.xwork:xwork-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30799">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary Code Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts.xwork:xwork-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30803">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Uninitialized Memory Exposure</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              npmconf
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and npmconf@0.0.24
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>npmconf</code> to version 2.1.3. 
          <strong>Note</strong> <code>npmconf</code> is deprecated and should not be used.
          <strong>Note</strong> This is vulnerable only for Node &lt;=4</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://hackerone.com/reports/320269">HAckerOne Report</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:npmconf:20180512">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              negotiator
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, errorhandler@1.2.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>negotiator</code> to version <code>0.6.1</code> or greater.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS</a></li>
          <li><a href="https://github.com/jshttp/negotiator/commit/26a05ec15cf7d1fa56000d66ebe9c9a1a62cb75c">https://github.com/jshttp/negotiator/commit/26a05ec15cf7d1fa56000d66ebe9c9a1a62cb75c</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:negotiator:20160616">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              minimatch
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>minimatch</code> to version <code>3.0.2</code> or greater.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS</a></li>
          <li><a href="https://github.com/isaacs/minimatch/commit/6944abf9e0694bd22fd9dad293faa40c2bc8a955">https://github.com/isaacs/minimatch/commit/6944abf9e0694bd22fd9dad293faa40c2bc8a955</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:minimatch:20160620">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Content &amp; Code Injection (XSS)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              marked
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and marked@0.3.5
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.6 or higher.
          Also, you can patch the vulnerability using <a href="https://snyk.io/docs/using-snyk/#wizard">Snyk wizard</a>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/pull/592">GitHub PR</a></li>
          <li><a href="https://github.com/chjj/marked/pull/592/commits/2cff85979be8e7a026a9aca35542c470cf5da523">GitHub Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20150520">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Cross-site Scripting (XSS) via Data URIs</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              marked
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and marked@0.3.5
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.7 or higher.
          Also, you can patch the vulnerability using <a href="https://snyk.io/docs/using-snyk/#wizard">Snyk wizard</a>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/commit/cd2f6f5b7091154c5526e79b5f3bfb4d15995a51">GitHub Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170112">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Cross-site Scripting (XSS)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              marked
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and marked@0.3.5
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/issues/925">GitHub Issue</a></li>
          <li><a href="https://github.com/chjj/marked/pull/958">GitHub Issue - Release 0.3.9 status</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170815">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              marked
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and marked@0.3.5
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.9 or higher.
          In the meantime, you can patch the vulnerability using <a href="https://snyk.io/docs/using-snyk/#wizard">Snyk wizard</a>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/issues/937">Github Issue</a></li>
          <li><a href="https://github.com/chjj/marked/pull/958">GitHub Issue - Release 0.3.9 status</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170907">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              marked
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and marked@0.3.5
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade marked to version 0.3.17 or higher</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/markedjs/marked/pull/1083">GitHub PR</a></li>
          <li><a href="https://github.com/markedjs/marked/pull/1083">GitHub Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20180225">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">XML External Entity (XXE) Injection</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              javax.servlet:jstl
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade to a version <code>1.3</code> or above. </p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0254">NVD</a></li>
          <li><a href="https://access.redhat.com/security/cve/CVE-2015-0254">Redhat Security</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-JAVAXSERVLET-30449">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">GPL-2.0 license</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Module:
          
                              goof
                      </li>
          
                      <li class="card__meta__item">Introduced through:
                                  <a href="/test//goof@0.0.3">
                                      goof@0.0.3
                                  </a>
          
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:npm:goof:GPL-2.0">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              fresh
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, express@4.12.4 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>fresh</code> to version 0.5.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/jshttp/fresh/issues/24">Github Issue</a></li>
          <li><a href="https://github.com/jshttp/fresh/commit/21a0f0c2a5f447e0d40bc16be0c23fa98a7b46ec">Github Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:fresh:20170908">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary Code Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              ejs
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and ejs@1.0.0
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>The vulnerability can be resolved by either using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or by running <code>snyk wizard</code> from the command-line interface.
          Otherwise, Upgrade <code>ejs</code> to version <code>2.5.3</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
          <li><a href="https://github.com/mde/ejs/commit/3d447c5a335844b25faec04b1132dbc721f9c8f6">Fix commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ejs:20161128">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Code Injection</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              dustjs-linkedin
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and dustjs-linkedin@2.5.0
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade to version <code>2.6.0</code> or greater.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/linkedin/dustjs/pull/534/commits/884be3bb3a34a843e6fb411100088e9b02326bd4">https://github.com/linkedin/dustjs/pull/534/commits/884be3bb3a34a843e6fb411100088e9b02326bd4</a></li>
          <li><a href="https://github.com/linkedin/dustjs/pull/534">https://github.com/linkedin/dustjs/pull/534</a></li>
          <li><a href="https://github.com/linkedin/dustjs/issues/741">https://github.com/linkedin/dustjs/issues/741</a></li>
          <li><a href="https://artsploit.blogspot.co.il/2016/08/pprce2.html">https://artsploit.blogspot.co.il/2016/08/pprce2.html</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:dustjs-linkedin:20160819">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              commons-fileupload:commons-fileupload
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>commons-fileupload:commons-fileupload</code> to version 1.3.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/apache/commons-fileupload/blob/b1498c9877d751f8bc4635a6f252ebdfcba28518/src/changes/changes.xml#L84">Github ChangeLog</a></li>
          <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=1349475">Redhat Bugzilla</a></li>
          <li><a href="http://mail-archives.us.apache.org/mod_mbox/www-announce/201606.mbox/%3C6223ece6-2b41-ef4f-22f9-d3481e492832@apache.org%3E">Apache Mailing Archives</a></li>
          <li><a href="http://svn.apache.org/viewvc/commons/proper/fileupload/trunk/RELEASE-NOTES.txt?r1=1745717&amp;r2=1749637&amp;diff_format=h">Apache-SVN</a></li>
          <li><a href="https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2016-3092">CVE</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSFILEUPLOAD-30082">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary Code Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              commons-fileupload:commons-fileupload
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>commons-fileupload</code> to version 1.3.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-1000031">NVD</a></li>
          <li><a href="http://www.tenable.com/security/research/tra-2016-12">Tenable Security</a></li>
          <li><a href="https://github.com/apache/commons-fileupload/blob/master/src/changes/changes.xml#L65">Github ChangeLog</a></li>
          <li><a href="https://github.com/apache/commons-fileupload/commit/388e824518697c2c8f9f83fd964621d9c2f8fc4c">Github Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSFILEUPLOAD-30401">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary Code Execution</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              commons-collections:commons-collections
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSCOLLECTIONS-30078">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--high" >
              <h2 class="card__title">Arbitrary File Write via Archive Extraction (Zip Slip)</h2>
              <div class="card__section">
          
                  <div class="label label--high">
                      <span class="label__text">high severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              adm-zip
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and adm-zip@0.4.7
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>adm-zip</code> to version 0.4.11 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/cthackers/adm-zip/pull/212">GitHub PR</a></li>
          <li><a href="https://github.com/cthackers/adm-zip/pull/212/commits/6f4dfeb9a2166e93207443879988f97d88a37cde">GitHub Commit 0.4.9</a></li>
          <li><a href="https://github.com/cthackers/adm-zip/commit/d01fa8c80c3a5fcf5ce1eda82d96600c62910d3f">GitHub Commit 0.4.11</a></li>
          <li><a href="https://snyk.io/research/zip-slip-vulnerability">Zip Slip Advisory</a></li>
          <li><a href="https://github.com/snyk/zip-slip-vulnerability">List of fixed projects that contained Zip Slip</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:adm-zip:20180415">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Uninitialized Memory Exposure</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              tunnel-agent
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>tunnel-agent</code> to version 0.6.0 or higher.
          <strong>Note</strong> This is vulnerable only for Node &lt;=4</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://gist.github.com/ChALkeR/fd6b2c445834244e7d440a043f9d2ff4">PoC by ChALkeR</a></li>
          <li><a href="https://github.com/request/tunnel-agent/commit/9ca95ec7219daface8a6fc2674000653de0922c0">Github Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:tunnel-agent:20170305">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">MPL-2.0 license</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Module:
          
                              symbol
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:npm:symbol:MPL-2.0">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Directory Traversal</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              st
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and st@0.2.4
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade to version 0.2.5 or greater.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/isaacs/st#security-status">https://github.com/isaacs/st#security-status</a></li>
          <li><a href="http://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers">http://blog.npmjs.org/post/80277229932/newly-paranoid-maintainers</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:st:20140206">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Open Redirect</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              st
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and st@0.2.4
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:st:20171013">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              semver
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, npmconf@0.0.24 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Update to a version 4.3.2 or greater. From the issue description [2]: &quot;Package version can no longer be more than 256 characters long. This prevents a situation in which parsing the version number can use exponentially more time and memory to parse, leading to a potential denial of service.&quot;</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/npm/npm/releases/tag/v2.7.5">GitHub Release</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:semver:20150403">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Remote Memory Exposure</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              request
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>request</code> to version 2.68.0 or higher.</p>
          <p>If a direct dependency update is not possible, use <a href="https://snyk.io/docs#wizard"><code>snyk wizard</code></a> to patch this vulnerability.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/request/request/pull/2018">GitHub PR</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials">Blog: Node Buffer API fix</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md">Blog: Information about Buffer</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:request:20160119">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.springframework:spring-web
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.springframework:spring-web</code> to version 3.2.14, 4.1.7 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://pivotal.io/security/cve-2015-3192">Pivotal Security</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30164">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Reflected File Download</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.springframework:spring-web
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.springframework:spring-web</code> to version 4.2.1.RELEASE, 4.1.7.RELEASE, 4.0.9.RELEASE, 3.2.14.RELEASE or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://pivotal.io/security/cve-2015-5211">Pivotal Security</a></li>
          <li><a href="https://access.redhat.com/security/cve/cve-2015-5211">Redhat Bugzilla</a></li>
          <li><a href="https://www.trustwave.com/Resources/SpiderLabs-Blog/Reflected-File-Download---A-New-Web-Attack-Vector/">Oren Hafif Blog</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30165">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Cross-site Request Forgery (CSRF)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.springframework:spring-web
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31331">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Authentication Bypass</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.springframework:spring-web
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no fix version for <code>org.springframework:spring-web</code>.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/spring-projects/spring-security/issues/3392">GitHub Issue</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31644">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Directory Traversal</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.springframework:spring-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.springframework:spring-core</code> to version 3.2.9, 4.0.5 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/spring-projects/spring-framework/commit/e3e71ba92a8b82dadf474eda76cd2741f65a77a8">GitHub Commit</a></li>
          <li><a href="https://pivotal.io/security/cve-2014-3578">Pivotal Security</a></li>
          <li><a href="https://jira.spring.io/browse/SPR-12354">Jira Issue</a></li>
          <li><a href="http://jvndb.jvn.jp/en/contents/2014/JVNDB-2014-000054.html">JVNDB</a></li>
          <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=1131882">Redhat Bugzilla</a></li>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-3578">NVD</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-31325">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">JSM bypass via ReflectionHelper</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.hibernate:hibernate-validator
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-common@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGHIBERNATE-30098">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Dual license: EPL-1.0, EPL-1.0</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Module:
          
                              org.hibernate.javax.persistence:hibernate-jpa-2.1-api
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:maven:org.hibernate.javax.persistence:hibernate-jpa-2.1-api:(EPL-1.0_OR_EPL-1.0)">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">EPL-1.0 license</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Module:
          
                              org.aspectj:aspectjweaver
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-core@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/snyk:lic:maven:org.aspectj:aspectjweaver:EPL-1.0">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Cross-site Scripting (XSS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30773">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Cross-site Request Forgery (CSRF)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30774">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Access Restriction Bypass</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30775">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Access Restriction Bypass</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30776">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30777">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.34, 2.5.13 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://struts.apache.org/docs/s2-050.html">Struts Security Bulletin</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31501">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.apache.struts:struts2-core</code> to version 2.3.34, 2.5.13 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://struts.apache.org/docs/s2-051.html">Struts Security Bulletin</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31502">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Arbitrary Code Execution</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Developers are strongly advised to upgrade their <em>Apache Struts</em> components to version <code>2.3.34</code>, <code>2.5.12</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://cwiki.apache.org/confluence/display/WW/S2-053">Apache Security Bulletin</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-31503">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Cross-site Scripting (XSS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts.xwork:xwork-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30800">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Improper Input Validation</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts.xwork:xwork-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30801">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Improper Input Validation</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts.xwork:xwork-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30802">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Improper Input Validation</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts.xwork:xwork-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTSXWORK-30804">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              ognl:ognl
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>ognl:ognl</code> to version 3.0.12 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3093">NVD</a></li>
          <li><a href="https://github.com/jkuhnert/ognl/commit/ae43073fbf38db8371ff4f8bf2a966ee3b5f7e92">GitHub Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-OGNL-30474">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              ms
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, humanize-ms@1.0.1 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>ms</code> to version 0.7.1.</p>
          <p>If direct dependency upgrade is not possible, use <a href="https://snyk.io/docs/using-snyk#wizard">snyk wizard</a> to patch this vulnerability.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://www.owasp.org/index.php/Regular_expression_Denial_of_Service_-_ReDoS">OWASP - ReDoS</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ms:20151024">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Remote Memory Exposure</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              mongoose
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and mongoose@4.2.4
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>mongoose</code> to version &gt;= 3.8.39 or &gt;= 4.3.6.</p>
          <p>If a direct dependency update is not possible, use <a href="https://snyk.io/docs/using-snyk#wizard"><code>snyk wizard</code></a> to patch this vulnerability.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/Automattic/mongoose/issues/3764">GitHub Issue</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Lets-fix-Buffer-API.md#previous-materials">Blog: Node Buffer API fix</a></li>
          <li><a href="https://github.com/ChALkeR/notes/blob/master/Buffer-knows-everything.md">Blog: Information about Buffer</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:mongoose:20160116">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              moment
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and moment@2.15.1
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:moment:20161019">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Cross-site Scripting (XSS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              marked
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and marked@0.3.5
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>marked</code> to version 0.3.9 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/chjj/marked/issues/926">GitHub Issue</a></li>
          <li><a href="https://github.com/chjj/marked/pull/958">GitHub Issue - Release 0.3.9 status</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:marked:20170815-1">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Cross-site Scripting (XSS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              jquery
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and jquery@2.2.4
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>jquery</code> to version <code>3.0.0</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/jquery/jquery/issues/2432">GitHub Issue</a></li>
          <li><a href="https://github.com/jquery/jquery/pull/2588">GitHub PR</a></li>
          <li><a href="https://github.com/jquery/jquery/pull/2588/commits/c254d308a7d3f1eac4d0b42837804cfffcba4bb2">GitHub Commit 3.0.0</a></li>
          <li><a href="https://github.com/jquery/jquery/commit/f60729f3903d17917dc351f3ac87794de379b0cc">GitHub Commit 1.12</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:jquery:20150627">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Timing Attack</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              http-signature
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>http-signature</code> to version 1.0.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/joyent/node-http-signature/pull/36">Github PR</a></li>
          <li><a href="https://github.com/joyent/node-http-signature/commit/78ab1da232f31f695f5c362d863593a143aa8b56">Github Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:http-signature:20150122">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Cross-site Scripting (XSS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              ejs
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and ejs@1.0.0
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>The vulnerability can be resolved by either using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or by running <code>snyk wizard</code> from the command-line interface.
          Otherwise, Upgrade <code>ejs</code> to version <code>2.5.5</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
          <li><a href="https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f">Fix commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ejs:20161130">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              ejs
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and ejs@1.0.0
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>The vulnerability can be resolved by either using the GitHub integration to <a href="https://snyk.io/org/projects">generate a pull-request</a> from your dashboard or by running <code>snyk wizard</code> from the command-line interface.
          Otherwise, Upgrade <code>ejs</code> to version <code>2.5.5</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://snyk.io/blog/fixing-ejs-rce-vuln">Snyk Blog</a></li>
          <li><a href="https://github.com/mde/ejs/commit/49264e0037e313a0a3e033450b5c184112516d8f">Fix commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ejs:20161130-1">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Insecure Randomness</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              cryptiles
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade to version 4.1.2 and higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/hapijs/cryptiles/issues/34">GitHub Issue</a></li>
          <li><a href="https://github.com/hapijs/cryptiles/commit/9332d4263a32b84e76bf538d7470d01ea63fa047">GitHub Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:cryptiles:20180710">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Information Disclosure</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              commons-fileupload:commons-fileupload
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>commons-fileupload</code> to version 1.3.2 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/apache/commons-fileupload/blob/master/src/changes/changes.xml#L56">Github ChangeLog</a></li>
          <li><a href="https://github.com/apache/commons-fileupload/commit/5b4881d7f75f439326f54fa554a9ca7de6d60814">Github Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-COMMONSFILEUPLOAD-31540">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--medium" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--medium">
                      <span class="label__text">medium severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              brace-expansion
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>brace-expansion</code> to version 1.1.7 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/juliangruber/brace-expansion/pull/35">GitHub PR</a></li>
          <li><a href="https://github.com/juliangruber/brace-expansion/issues/33">GitHub Issue</a></li>
          <li><a href="https://github.com/juliangruber/brace-expansion/pull/35/commits/b13381281cead487cbdbfd6a69fb097ea5e456c3">GitHub Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:brace-expansion:20170302">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">XML External Entity (XXE) Injection</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.springframework:spring-web
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>org.springframework:spring-web</code> to versions 3.2.8, 4.0.4 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="http://www.gopivotal.com/security/cve-2014-0225">Pivotal Security</a></li>
          <li><a href="https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-0225">Redhat Bugzilla</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGSPRINGFRAMEWORK-30163">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">Manipulation of Struts&#x27; internals</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: maven
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              org.apache.struts:struts2-core
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      io.github.snyk:todolist-mvc@1.0-SNAPSHOT, io.github.snyk:todolist-web-struts@1.0-SNAPSHOT and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/SNYK-JAVA-ORGAPACHESTRUTS-30060">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              ms
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, mongoose@4.2.4 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>ms</code> to version 2.0.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/zeit/ms/pull/89">GitHub PR</a></li>
          <li><a href="https://github.com/zeit/ms/pull/89/commits/305f2ddcd4eff7cc7c518aca6bb2b2d2daad8fef">GitHub Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:ms:20170412">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              moment
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
                                  goof@0.0.3 and moment@2.15.1
          
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>moment</code> to version <code>2.19.3</code> or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/moment/moment/issues/4163">GitHub Issue</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:moment:20170905">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              mime
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, express@4.12.4 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>mime</code> to versions 1.4.1, 2.0.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/broofa/node-mime/issues/167">Github Issue</a></li>
          <li><a href="https://github.com/broofa/node-mime/commit/855d0c4b8b22e4a80b9401a81f2872058eae274d">Github Commit 1.x</a></li>
          <li><a href="https://github.com/broofa/node-mime/commit/1df903fdeb9ae7eaa048795b8d580ce2c98f40b0">Github Commit 2.0.x</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:mime:20170907">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">Prototype Pollution</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              hoek
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>hoek</code> to versions 4.2.1, 5.0.3 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://hackerone.com/reports/310439">HackerOne Report</a></li>
          <li><a href="https://github.com/hapijs/hoek/pull/227">GitHub PR</a></li>
          <li><a href="https://github.com/hapijs/hoek/issues/230">GitHub Issue - 4.2.1 Backport</a></li>
          <li><a href="https://github.com/hapijs/hoek/commit/32ed5c9413321fbc37da5ca81a7cbab693786dee">GitHub Commit 5.0.3</a></li>
          <li><a href="https://github.com/hapijs/hoek/commit/5aed1a8c4a3d55722d1c799f2368857bf418d6df">GitHub Commit 4.2.x</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:hoek:20180212">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">Regular Expression Denial of Service (DoS)</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              hawk
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>There is no remediation at the moment</p>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:hawk:20160119">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              debug
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, express@4.12.4 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>debug</code> to version 2.6.9, 3.1.0 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/visionmedia/debug/issues/501">GitHub Issue</a></li>
          <li><a href="https://github.com/visionmedia/debug/pull/504">GitHub PR</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:debug:20170905">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              bson
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, mongoose@4.2.4 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>bson</code> to version 1.0.5 or higher</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/mongodb/js-bson/commit/bd61c45157c53a1698ff23770160cf4783e9ea4a">GitHub Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:bson:20180225">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
          <div class="card card--vuln  disclosure--not-new severity--low" >
              <h2 class="card__title">Regular Expression Denial of Service (ReDoS)</h2>
              <div class="card__section">
          
                  <div class="label label--low">
                      <span class="label__text">low severity</span>
                  </div>
          
                  <hr/>
          
                  <ul class="card__meta">
                      <li class="card__meta__item">
                          Package Manager: npm
                      </li>
                      <li class="card__meta__item">
                              Vulnerable module:
          
                              braces
                      </li>
          
                      <li class="card__meta__item">Introduced through:
          
          
                                      goof@0.0.3, tap@5.8.0 and others
                      </li>
                  </ul>
          
                  <hr/>
          
          
              </div><!-- .card__section -->
          
                <h2 id="remediation">Remediation</h2>
          <p>Upgrade <code>braces</code> to version 2.3.1 or higher.</p>
          <h2 id="references">References</h2>
          <ul>
          <li><a href="https://github.com/micromatch/braces/commit/abdafb0cae1e0c00f184abbadc692f4eaa98f451">GitHub Commit</a></li>
          </ul>
          
          
              <div class="cta card__cta">
                  <p><a href="https://snyk.io/vuln/npm:braces:20180219">More about this vulnerability</a></p>
              </div>
          
          </div><!-- .card -->
        </div><!-- cards -->
      </div>
    </div><!-- .layout-container -->

  </main><!-- .layout-stacked__content -->
</body>

</html>

`