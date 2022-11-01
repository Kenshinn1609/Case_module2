"use strict";
exports.__esModule = true;
exports.pcs = exports.Status = void 0;
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
})(Status = exports.Status || (exports.Status = {}));
exports.pcs = [
    {
        name: 'pc1',
        status: Status.Inactive
    },
    {
        name: 'pc2',
        status: Status.Inactive
    },
    {
        name: 'pc3',
        status: Status.Inactive
    }, {
        name: 'pc4',
        status: Status.Inactive
    }
];
