'use strict';
chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
  //contextMenus
  const kLocales = {
    'com.au': 'Australia',
    'com.br': 'Brazil',
    'ca': 'Canada',
    'cn': 'China',
    'fr': 'France',
    'it': 'Italy',
    'co.in': 'India',
    'co.jp': 'Japan',
    'com.ms': 'Mexico',
    'ru': 'Russia',
    'co.za': 'South Africa',
    'co.uk': 'United Kingdom'
  };
  for (let key of Object.keys(kLocales)) {
    chrome.contextMenus.create({
      id: key,
      title: kLocales[key],
      type: 'normal',
      contexts: ['selection'],
    });
  }
  //commoand
  chrome.commands.onCommand.addListener(function(command) {
    chrome.tabs.query({currentWindow: true}, function(tabs) {
      // Sort tabs according to their index in the window.
      tabs.sort((a, b) => { return a.index < b.index; });
      let activeIndex = tabs.findIndex((tab) => { return tab.active; });
      let lastTab = tabs.length - 1;
      let newIndex = -1;
      if (command === 'flip-tabs-forward')
        newIndex = activeIndex === 0 ? lastTab : activeIndex - 1;
      else  // 'flip-tabs-backwards'
        newIndex = activeIndex === lastTab ? 0 : activeIndex + 1;
      chrome.tabs.update(tabs[newIndex].id, {active: true, highlighted: true});
    });
  });
});

// Events must be registered synchronously from the start of the page.
chrome.bookmarks.onCreated.addListener(function() {
  // do something
});

chrome.runtime.onMessage.addListener(function(message, callback) {
  if (message.data == “setAlarm”) {
    chrome.alarms.create({delayInMinutes: 5})
  } else if (message.data == “runLogic”) {
    chrome.tabs.executeScript({file: 'logic.js'});
  } else if (message.data == “changeColor”) {
    chrome.tabs.executeScript(
        {code: 'document.body.style.backgroundColor="orange"'});
  };
});