var config = {
    cowconfig: {
        url: 'websocket.geodan.nl/geofort',
        port: 443,
        protocol: 'wss',
        dir: 'geofort',
        key: 'geofort'
    },
    teams: [{
        id: 'Populatie',
        text: 'U gaat zich bezig houden met het in kaart brengen van de hoeveelheid mensen die in het rampgebied wonen en werken.'
    },{
        id: 'Evacuatie',
        text: 'U gaat zich bezig houden met het in kaart brengen van vluchtroutes voor mensen uit het rampgebied naar buiten het gebied.'
    },{
        id: 'Opvang',
        text: 'U gaat zich bezig houden met de locaties zoeken waar de evacuees kunnen worden opgevangen.'
    },{
        id: 'Communicatie',
        text: 'U gaat zorgen dat alle teams met elkaar blijven comminiceren en uiteindelijk geeft u een samenvatting aan de burgemeester.'
    },{
        id: 'Dijkwacht',
        text: 'Controleteam'
    }]
};
