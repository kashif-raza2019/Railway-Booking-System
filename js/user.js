/**
 * Train Coach Detail Chart-Mapping
 */

const trainDetails = [
    { trainName: "Indore Nagpur Trishatabdi Suoerfast Express", trainNo: "12913", trainSource: "Indore", trainDestination: "Nagpur", typeOfCoaches : "4", numberOFCoaches: 16  },
    { trainName: "Puri Hamsafar Express", trainNo: "19317", trainSource: "Indore", trainDestination: "Puri", typeOfCoaches : "5", numberOFCoaches: 18 },
    { trainName: "Indore Yesvantpur Express", trainNo: "19301", trainSource: "Indore", trainDestination: "yesvantpur", typeOfCoaches : "5", numberOFCoaches: 18  },
    { trainName: "HZT. NZM-KSR Banglore Rajdhani Express", trainNo: "02692", trainSource: "NZM-Delhi", trainDestination: "Banglore City", typeOfCoaches : "5", numberOFCoaches: 18  },
];

const trainNumbers = [ "12913", "19317", "19301", "02692" ];
const trainName = [ "Indore Nagpur Trishatabdi Suoerfast Express", "Puri Hamsafar Express", "Indore Yesvantpur Express", "HZT. NZM-KSR Banglore Rajdhani Express" ];

const coachDetails = [
    { coachType: "1AC", coachName: "AC First Tier", coachFare: "Rs 4999", coachSeats: "20" },
    { coachType: "2AC", coachName: "AC Second Tier", coachFare: "Rs 2999", coachSeats: "48" },
    { coachType: "3AC", coachName: "AC Third Tier", coachFare: "Rs 1999", coachSeats: "64" },
    { coachType: "SL", coachName: "Sleeper", coachFare: "Rs 999", coachSeats: "72" },
    { coachType: "CC", coachName: "Chair Class", coachFare: "Rs 499", coachSeats: "84" }
];

function getTrainDetails(trainNo) {
    for(let i=0; i<trainNumbers.length; i++) {
        if(trainNumbers[i] == trainNo) {
            return trainName[i];
        }
    }
};

module.exports = { getTrainDetails, trainDetails, coachDetails };
