function gameObject(){
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black','White'],
            players: {

                "Alan Anderson": {
                    "number": 0,
                    "shoe": 16,
                    "points": 22,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 1,
                },

                "Reggie Evans": {
                    "number": 30,
                    "shoe": 14,
                    "points": 12,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 12,
                    "blocks": 12,
                    "slamDunks": 7 
                },

                "Brook Lopez": {
                    "number": 11,
                    "shoe": 17,
                    "points": 17,
                    "rebounds": 19,
                    "assists": 10,
                    "steals": 3,
                    "blocks": 1,
                    "slamDunks": 15,
                },

                "Mason Plumlee": {
                    "number": 1,
                    "shoe": 19,
                    "points": 26,
                    "rebounds": 12,
                    "assists": 6,
                    "steals": 3,
                    "blocks": 8,
                    "slamDunks": 5
                },

                "Jason Terry": {
                    "number": 31,
                    "shoe": 15,
                    "points": 19, 
                    "rebounds": 2,
                    "assists": 2,
                    "steals": 4,
                    "blocks": 11,
                    "slamDunks": 1
                }


            },
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise','Purple'],
            players: {
                "Jeff Adrien": {
                    "number": 4,
                    "shoe": 18,
                    "points": 10,
                    "rebounds": 1,
                    "assists": 1,
                    "steals": 2,
                    "blocks": 7,
                    "slamDunks": 2
                },

                
                "Bismak Biyombo": {
                    "number": 0,
                    "shoe": 16,
                    "points": 12,
                    "rebounds": 4,
                    "assists": 7,
                    "steals": 7,
                    "blocks": 15,
                    "slamDunks": 10
                },

                "DeSagna Diop": {
                    "number": 2,
                    "shoe": 14,
                    "points": 24,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 4,
                    "blocks": 5,
                    "slamDunks": 5,
                },

                "Ben Gordon": {
                    "number": 8,
                    "shoe": 15,
                    "points": 33,
                    "rebounds": 3, 
                    "assists": 2,
                    "steals": 1,
                    "blocks": 1,
                    "slamDunks": 0
                },

                "Brendan Haywood": {
                    "number": 33,
                    "shoe": 15,
                    "points": 6,
                    "rebounds": 12,
                    "assists": 12,
                    "steals": 22,
                    "blocks": 5,
                    "slamDunks": 12
                }



                

            },
        }
    }
};

//console.log(gameObject());

let obj = gameObject();

function numPointsScored(playerName){
    for (let team in obj){
            //condition returns true or false to see which team that player is on: 
            if (Object.keys(obj[team].players).includes(playerName)){
                return(`${playerName} scored ${obj[team].players[playerName].points} points`);
            };
        }
    return `Player ${playerName} not found`;    
    };
    


function shoeSize(playerName){
    for (let team in obj){
        if (Object.keys(obj[team].players).includes(playerName)){
            return(`${playerName}'s shoe size is ${obj[team].players[playerName].shoe}`)
        }
    }
    return `Player ${playerName} not found`;  
};

function teamColors (tName){
    for (let team in obj){
        if (obj[team].teamName == tName){
            return obj[team].colors;
        }
    }
    return `team '${tName}' not found`;
};


function teamNames(){
    let teamNames = [];
    for (let team in obj){
        teamNames.push(obj[team].teamName);
    }
    return teamNames; 
};

function playerNumbers(tName){
    let numbers = [];
    for (let team in obj){
        if (obj[team].teamName == tName){
            for (let player in obj[team].players){
                numbers.push(obj[team].players[player].number);
            };
        }
    }
    return numbers; 
};


function playerStats(playerName){
    for (let team in obj){
        if (Object.keys(obj[team].players).includes(playerName)){
            return obj[team].players[playerName];
        }
    }
};



function bigShoeRebounds(){
    let biggest = 0;   
    let rebounds; 
   
    
    for (let team in obj){
        for (let player in obj[team].players){

            if (obj[team].players[player].shoe >= biggest){
                biggest = obj[team].players[player].shoe;
                rebounds = obj[team].players[player].rebounds;
            }
        }
    }

    return rebounds;
};

console.log(bigShoeRebounds());

