// This file contains functions / scripts / algorithms that can
// be useful anywhere.  Use with:
/*
const global = require('../global/GlobalFunctions.js');
global.functionName(param);
*/

module.exports = {
  shuffle: function (array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  },
  saveButtonStates: function () {
    return ({
      show: "SHOWSAVEBUTTON",
      hide: "HIDESAVEBUTTON",
      saving: "SAVINGSAVEBUTTON",
    })
  },
  pageNames: function () {
    return ({
      cardsPage: "CARDSPAGE",
      chatPage: "CHATPAGE",
      settingsPage: "SETTINGSPAGE",
      conversation: "CONVERSATIONPAGE",
      auth: "AUTHPAGE",
      preRelease: "PRERELEASE",
      expiredPage: "EXPIREDPAGE",
      appHome: "APPHOMEPAGE",
      loadingPage: "LOADINGPAGE",
    })
  },
  storageKeys: function () {
    const prefix = "@SmashEmUp2017:";
    return ({
      profiles: prefix+"profiles",
      lastIndex: prefix+"lastIndex",
      likePoints: prefix+"likePoints",
      deviceToken: prefix+"deviceToken",
      myProfile: prefix+"myProfile",

    })
  },
  mod: function (n, m) {
    return ((n % m) + m) % m;
  },
  otherParticipants: function (participants, userId) {
    if (participants) {
      let ar = [];
      let len = participants.length;
      for(var i = 0; i < len; i++) {
        if(participants[i].profileId != userId) {
          ar.push(participants[i]);
        }
      }
      return ar;
    } else {
      return null;
    }
  },
  isGoodResponse: function (response) {
    return ("status" in response && response["status"] >= 200 && response["status"] < 300);
  },
  calculateAppExpirationState: function () {
    let today = new Date();
    let startDate = new Date(2017, 4, 12); // may 12th, midnight (month indexed at 0)
    let endDate = new Date(2017,4,22); // may 22nd, midnight

    if (__DEV__) {
      return this.appExpirationStates().expired; //TODO @richard remove this
    }

    if (today > startDate && today < startDate) {
      return (this.appExpirationStates().active);
    } else if (today < startDate) {
      return (this.appExpirationStates().preRelease);
    } else {
      return (this.appExpirationStates().expired)
    }
  },
  appExpirationStates: function() {
    return ({
      active: "APPACTIVE",
      preRelease: "APPPRERELEASE",
      expired: "APPEXPIRED",
    })
  },
  betaTesters: function() {
    let testers = ["Zoe Baghdoyan", "Josh Beri", "Frankie Caiazzo", "Tafari Duncan", "Orlando Economos", "Jason Fan", "Derek Fieldhouse", "Shana Gallagher", "Lucy Gerhart", "Ryan Gill", "Cori Jacoby", "Nishant Joshi", "Dhruv Khurana", "Rebecca Larson", "Ian Leaman", "Ann Lin", "Emily Lin", "Brian McGough", "Jordan Meisel", "Mackenzie Merriam", "Sylvia R. Ofama", "Isha Patnaik", "Luis Rebollar", "Joaquin Rodgriguez", "Ben Sack", "Maya Salcido White", "Katie Saviano", "Kabir Singh", "Clare Stone", "Lilly Tahmasebi", "Aubrey Tan", "Mudit Tandon", "Joshua Terry", "Nicholas Turiano", "Harry Weissman", "Gideon Wulfsohn"];
    this.shuffle(testers);
    return testers.join(", ");
  },
  developers: function() {
    let devs = ["Elif Kinli", "Jade Chan", "Jared Moskowitz", "Justin Sullivan", "Richard Kim"];
    this.shuffle(devs);
    return devs.join(", ");
  },
  designers: function() {
    let des = ["Bruno 'daddy' Olmedo", "Shanshan Duan"];
    this.shuffle(des);
    return des.join(", ");
  },
  overrideActions: function() { //override the app inactivity (used for app demo / using after expiration)
    return({
      openApp: "OPENAPP",
      demoApp: "DEMOAPP",
      logout: "LOGOUT",
    });
  }
}
