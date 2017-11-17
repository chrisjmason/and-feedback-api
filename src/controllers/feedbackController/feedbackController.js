let feedbackToAddModel = require('../../models/feedbackToAddModel');
let googleSheetsService = require('../../services/googleSheetsService');

module.exports = {
    addFeedback(req, res) {
        let feedbackToAdd = feedbackToAddModel.getNewRowObject(req.body.giver,
            req.body.receiver,
            req.body.positive,
            req.body.constructive,
            req.body.wonder,
            req.body.share,
            req.body.delight,
            req.body.other);

        googleSheetsService.addRowToGoogleSheets(feedbackToAdd, (result, row) => {
            if(!result){
                res.status(500);
                res.send({message: "error adding row", rowAdded:row});
            }else{
                res.status(200);
                res.send({message: "row added successfully", rowAdded: row});
            }
        });
    }
};