let players = [
    {
        name: 'Henry',
        club: 'Arsenal'
    },
    {
        name: 'Lampard',
        club: 'Chelsea'
    },
    {
        name: 'Keane',
        club: 'Man Utd'
    },
    {
        name: 'Stones',
        club: 'Man City'
    },
    {
        name: 'Mane',
        club: 'Liverpool'
    },
    {
        name: 'Kane',
        club: 'Tottenham'
    }
];

//selectors
const info = document.querySelector('#info');

let details = players.map(function(item) {
    return '<div>' + item.club + '</div>';
    
});

info.innerHTML = details.join(' \n');