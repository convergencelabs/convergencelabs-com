window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;

(function(ga) {
  var ALL_TRACKERS = [{
    name: 'clabs-com', 
    trackingId: 'UA-84372428-1'
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
  var gaConvergenceIo = createGaProxy({
    name: 'convergence-io',
    trackingId: 'UA-84372428-6'
  });

  ALL_TRACKERS.forEach(function(tracker) {
    ga('create', tracker.trackingId, 'auto', tracker.name);
  })
  ga('set', 'transport', 'beacon');
  ga('send', 'pageview');

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

  $(document).ready(function () {
    /* 
     * Normally the event tracker would handle this, but we don't have access to the actual
     * anchor element in the top menu 
     */
    function handleConvergenceSignupClicks(event) {
      gaConvergenceIo('send', 'event', {
        eventCategory: 'Outbound link click',
        eventAction: 'Request invite',
        eventLabel: 'Sign Up (header)'
      });
    }
  
    // the only links this applies to are scattered throughout a few blog posts
    $('.request-invite-link').bind('click', handleConvergenceSignupClicks);
  
    // capture the newsletter subscription submission
    $('.subscribe-form').submit(function() {
      gaAll('send', 'event', {
        eventCategory: 'Newsletter signup'
      });
      if (window.fbq) {
        window.fbq('track', 'CompleteRegistration', {
          content_name: 'newsletter'
        });
      }
    });
  });
}(window.ga));


