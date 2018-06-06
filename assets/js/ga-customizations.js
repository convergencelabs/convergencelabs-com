window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;

(function(ga) {
  var ALL_TRACKERS = [{
    name: 'prod', 
    trackingId: 'UA-84372428-1'
  }, {
    name: 'test',
    trackingId: 'UA-84372428-4'
  }];

  function createGaProxy(trackers) {
    return function(command) {
      for(var i = 0; i < trackers.length; i++) {
        var tracker = trackers[i];
        if(typeof command == 'function') {
          ga(function() {
            command(ga.getByName(tracker.name));
          });
        } else {
          var args = Array.prototype.slice.call(arguments);
          args[0] = tracker.name + '.' + command;
          ga.apply(window, args);
        }
      }
    };
  }

  var gaAll = createGaProxy(ALL_TRACKERS);
  var gaTest = createGaProxy(ALL_TRACKERS.slice(1));

  ALL_TRACKERS.forEach(function(tracker) {
    ga('create', tracker.trackingId, 'auto', tracker.name);
  })

  gaAll('require', 'eventTracker');
  gaAll('require', 'linker');
  gaAll('require', 'maxScrollTracker', {
    maxScrollMetricIndex: 3
  });
  gaAll('require', 'outboundLinkTracker', {
    events: ['click', 'auxclick', 'contextmenu'],
    linkSelector: 'a:not([ga-on])'
  });
  gaAll('require', 'pageVisibilityTracker', {
    sendInitialPageview: true,
    visibleMetricIndex: 1,
    pageLoadsMetricIndex: 2
  });
  gaAll('require', 'cleanUrlTracker', {
    stripQuery: true,
    trailingSlash: 'remove'
  });

  gaAll('linker:autoLink', ['admin.convergence.io']);
}(window.ga));


$(document).ready(function () {
  /* 
   * Normally the event tracker would handle this, but we don't have access to the actual
   * anchor element in the top menu 
   */
  function handleOutboundLinkClicks(event) {
    ga('send', 'event', {
      eventCategory: 'Outbound link click',
      eventAction: 'Request invite',
      eventLabel: 'Sign Up (header)'
    });
  }

  // the only links this applies to are scattered throughout a few blog posts
  $('.request-invite-link').bind('click', handleOutboundLinkClicks);
});