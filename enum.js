"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playerTurn = exports.deckTypes = void 0;
var deckTypes;
(function (deckTypes) {
    deckTypes["Spade"] = "\u2660\uFE0F";
    deckTypes["Hearts"] = "\u2764\uFE0F";
    deckTypes["Clover"] = "\uD83C\uDF40";
    deckTypes["Diamond"] = "\uD83D\uDD37";
})(deckTypes || (exports.deckTypes = deckTypes = {}));
var playerTurn;
(function (playerTurn) {
    playerTurn[playerTurn["Player"] = 0] = "Player";
    playerTurn[playerTurn["Dealer"] = 1] = "Dealer";
})(playerTurn || (exports.playerTurn = playerTurn = {}));
