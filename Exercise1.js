var facebookProfile = {
    name: "Marc",
    numberOfFriends: 10,
    postedMessages: ["message1", "message2", "message3"],
    postMessage: function(message) {
        return this.postedMessage.push(message);
    },
    deleteMessage: function(index) {
        this.postedMessages.splice(index,1);
    },
    addFriend: function() {
        this.numberOfFriends += 1;
    },
    removeFriend: function() {
        this.numberOfFriends -= 1;
    },
    printMessages: function() {
        for (var i = 0; i < this.postedMessages.length; i++) {
            console.log(this.postedMessages[i]);
        }
    }
}

// facebookProfile.printMessages();
// facebookProfile.deleteMessage(2);
// facebookProfile.printMessages();