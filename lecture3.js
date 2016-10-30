/**
 * Created by Jerry on 2016-10-22.
 */

/*  1. Explain the following code:
 *
 *  function func() {
 *      console.log(this);
 *  }
 *
 *  func(); // what is the output? Why?
function func() {
console.log(this);
}
func();

{ global: [Circular],
  process: 
   process {
     title: 'node',
     version: 'v4.6.1',
     moduleLoadList: 
      [ 'Binding contextify',
        'Binding natives',
        'NativeModule events',
        'NativeModule buffer',
        'Binding buffer',
        'NativeModule internal/util',
        'Binding util',
        'NativeModule timers',
        'Binding timer_wrap',
        'NativeModule _linklist',
        'NativeModule assert',
        'NativeModule util',
        'Binding uv',
        'NativeModule path',
        'NativeModule module',
        'NativeModule internal/module',
        'NativeModule vm',
        'NativeModule fs',
        'Binding fs',
        'NativeModule constants',
        'Binding constants',
        'NativeModule stream',
        'NativeModule _stream_readable',
        'NativeModule _stream_writable',
        'NativeModule _stream_duplex',
        'NativeModule _stream_transform',
        'NativeModule _stream_passthrough',
        'Binding fs_event_wrap',
        'NativeModule console',
        'Binding tty_wrap',
        'NativeModule net',
        'NativeModule internal/net',
        'Binding cares_wrap',
        'Binding tcp_wrap',
        'Binding pipe_wrap',
        'Binding stream_wrap' ],
     versions: 
      { http_parser: '2.7.0',
        node: '4.6.1',
        v8: '4.5.103.37',
        uv: '1.9.1',
        zlib: '1.2.8',
        ares: '1.10.1-DEV',
        icu: '56.1',
        modules: '46',
        openssl: '1.0.2j' },
     arch: 'x64',
     platform: 'linux',
     release: 
      { name: 'node',
        lts: 'Argon',
        sourceUrl: 'https://nodejs.org/download/release/v4.6.1/node-v4.6.1.tar.gz',
        headersUrl: 'https://nodejs.org/download/release/v4.6.1/node-v4.6.1-headers.tar.gz' },
     argv: [ '/usr/bin/nodejs', '/home/chris/JS/try.js' ],
     execArgv: [],
     env: 
      { SESSION_MANAGER: 'local/chris-HP-ProBook-470-G1:@/tmp/.ICE-unix/1353,unix/chris-HP-ProBook-470-G1:/tmp/.ICE-unix/1353',
        MATE_DESKTOP_SESSION_ID: 'this-is-deprecated',
        DISPLAY: ':0',
        SHELL: '/bin/bash',
        XDG_SESSION_COOKIE: '4603ef0b0eb640e2836974a04d12e5ab-1477810791.552819-1694795567',
        NODE_PATH: '/usr/lib/nodejs:/usr/lib/node_modules:/usr/share/javascript',
        COMPIZ_CONFIG_PROFILE: 'mate',
        XAUTHORITY: '/home/chris/.Xauthority',
        USERNAME: 'chris',
        QT_ACCESSIBILITY: '1',
        GTK_MODULES: 'gail:atk-bridge',
        XDG_CURRENT_DESKTOP: 'MATE',
        CLUTTER_BACKEND: 'x11',
        LOGNAME: 'chris',
        XDG_RUNTIME_DIR: '/run/user/1000',
        SSH_AUTH_SOCK: '/run/user/1000/keyring/ssh',
        SSH_AGENT_PID: '1421',
        PATH: '/home/chris/Documents/swift-3.0-RELEASE-ubuntu15.10/usr/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games',
        XDG_SESSION_ID: 'c1',
        GIO_LAUNCHED_DESKTOP_FILE_PID: '12496',
        GDMSESSION: 'mate',
        GTK_OVERLAY_SCROLLING: '0',
        QT_LINUX_ACCESSIBILITY_ALWAYS_ON: '1',
        MANDATORY_PATH: '/usr/share/gconf/mate.mandatory.path',
        DESKTOP_AUTOSTART_ID: '104e4d4a6a51e5f4dc147781079233789100000013530001',
        USER: 'chris',
        WINDOWPATH: '8',
        MDMSESSION: 'mate',
        GDM_XSERVER_LOCATION: 'local',
        MDM_LANG: 'en_US.UTF-8',
        QT_STYLE_OVERRIDE: 'gtk',
        LANG: 'en_US.UTF-8',
        XDG_DATA_DIRS: '/usr/share/mate:/usr/local/share/:/usr/share/:/usr/share/mdm/',
        HOME: '/home/chris',
        XDG_VTNR: '8',
        XDG_SEAT: 'seat0',
        DESKTOP_SESSION: 'mate',
        DEFAULTS_PATH: '/usr/share/gconf/mate.default.path',
        XDG_CONFIG_DIRS: '/etc/xdg/xdg-mate:/etc/xdg',
        DBUS_SESSION_BUS_ADDRESS: 'unix:abstract=/tmp/dbus-TbVbJrEW0i,guid=61f33d22a22b00e44c1996bb58159a68',
        PWD: '/home/chris',
        XDG_SESSION_DESKTOP: 'mate',
        GIO_LAUNCHED_DESKTOP_FILE: '/usr/share/applications/sublime_text.desktop',
        MDM_XSERVER_LOCATION: 'local' },
     pid: 25822,
     features: 
      { debug: false,
        uv: true,
        ipv6: true,
        tls_npn: true,
        tls_sni: true,
        tls_ocsp: true,
        tls: true },
     _needImmediateCallback: false,
     execPath: '/usr/bin/nodejs',
     debugPort: 5858,
     _startProfilerIdleNotifier: [Function: _startProfilerIdleNotifier],
     _stopProfilerIdleNotifier: [Function: _stopProfilerIdleNotifier],
     _getActiveRequests: [Function: _getActiveRequests],
     _getActiveHandles: [Function: _getActiveHandles],
     reallyExit: [Function: reallyExit],
     abort: [Function: abort],
     chdir: [Function: chdir],
     cwd: [Function: cwd],
     umask: [Function: umask],
     getuid: [Function: getuid],
     geteuid: [Function: geteuid],
     setuid: [Function: setuid],
     seteuid: [Function: seteuid],
     setgid: [Function: setgid],
     setegid: [Function: setegid],
     getgid: [Function: getgid],
     getegid: [Function: getegid],
     getgroups: [Function: getgroups],
     setgroups: [Function: setgroups],
     initgroups: [Function: initgroups],
     _kill: [Function: _kill],
     _debugProcess: [Function: _debugProcess],
     _debugPause: [Function: _debugPause],
     _debugEnd: [Function: _debugEnd],
     hrtime: [Function: hrtime],
     dlopen: [Function: dlopen],
     uptime: [Function: uptime],
     memoryUsage: [Function: memoryUsage],
     binding: [Function: binding],
     _linkedBinding: [Function: _linkedBinding],
     _setupDomainUse: [Function: _setupDomainUse],
     _events: { newListener: [Function], removeListener: [Function] },
     _rawDebug: [Function],
     _eventsCount: 2,
     domain: null,
     _maxListeners: undefined,
     EventEmitter: 
      { [Function: EventEmitter]
        EventEmitter: [Circular],
        usingDomains: false,
        defaultMaxListeners: 10,
        init: [Function],
        listenerCount: [Function] },
     _fatalException: [Function],
     _exiting: false,
     assert: [Function],
     config: { target_defaults: [Object], variables: [Object] },
     nextTick: [Function: nextTick],
     _tickCallback: [Function: _tickCallback],
     _tickDomainCallback: [Function: _tickDomainCallback],
     stdout: [Getter],
     stderr: [Getter],
     stdin: [Getter],
     openStdin: [Function],
     exit: [Function],
     kill: [Function],
     mainModule: 
      Module {
        id: '.',
        exports: {},
        parent: null,
        filename: '/home/chris/JS/try.js',
        loaded: false,
        children: [],
        paths: [Object] } },
  GLOBAL: [Circular],
  root: [Circular],
  Buffer: 
   { [Function: Buffer]
     poolSize: 8192,
     from: [Function],
     alloc: [Function],
     allocUnsafe: [Function],
     allocUnsafeSlow: [Function],
     isBuffer: [Function: isBuffer],
     compare: [Function: compare],
     isEncoding: [Function],
     concat: [Function],
     byteLength: [Function: byteLength] },
  clearImmediate: [Function],
  clearInterval: [Function],
  clearTimeout: [Function],
  setImmediate: [Function],
  setInterval: [Function],
  setTimeout: [Function],
  console: [Getter] }


this isn't pointing to any object so it points to the windows object in the global scope
 *
 *  var obj = {
 *      func: func // what is the second func here?
 *  };
 
 func is the method'func()'
 
 *
 *  obj.func(); //what is the output? try to explain why.
 
 Will print the obj  object because 'this' in the function 'func' now points to the obj object not the windows object
 
 *
 *  obj.func.bind(window)(); // what is the output? why?
 
 It will display the windows object because the function 'func' is now bound to the windows object and not 'obj' object
 
 *
 *  obj.func.bind(this)();  // what is the output? why?
 
 It prints out the windows object because 'this' binds the 'func' to the windows object
 
 *
 *  var people = {
 *      name: 'ashwin',
 *      age: 40
 *  };
 *
 *  obj.func.bind(people)(); //what is the output? why?
 */

// This will print out the 'people' object because 'func' is now bound to 'people' object

/* 2. write a function to convert first letter of every word in a string
 *     to upper case.
 *     eg input = 'hi, welcome to mest;'
 *        output = 'Hi Welcome To Mest';
 *        input2 = 'today is Sunday';
 *        output2 = 'Today is Sunday';
 */

function titleCase(str) {
     str = str.toLowerCase().split(' ');                

     for(var i = 0; i < str.length; i++){               
          str[i] = str[i].split('');                    
          str[i][0] = str[i][0].toUpperCase();          
          str[i] = str[i].join('');                     
     }
     return str.join(' ');                              
}

/*
 *  3. Write reg expresion for email validation(This is not an easy
 *  question, please make sure you do your research on this).
 *
 */

/*
 * 4. what is localStorage and sessionStorge under window object? What is the
 *    difference
 */
// localStorage and sessionStorage both extend Storage. There is no difference between them except for the intended "non-persistence" of sessionStorage.

// That is, the data stored in localStorage persists until explicitly deleted. Changes made are saved and available for all current and future visits to the site.

// For sessionStorage, changes are only available per window (or tab in browsers like Chrome and Firefox). Changes made are saved and available for the current page, as well as future visits to the site on the same window. Once the window is closed, the storage is deleted.
