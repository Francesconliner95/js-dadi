var lancio=[];

for (var i = 0; i <2; i++) {
    lancio[i] = Math.floor((Math.random() * 6) + 1);
}

console.log(lancio);

if(lancio[0]==lancio[1]){
    console.log('Pareggio');
    document.getElementById('vincitore').innerHTML = 'Partita finita in pareggio'
}
else if(lancio[0]>lancio[1]){
    console.log('Giocatore1');
    document.getElementById('vincitore').innerHTML = 'Giocatore1'
}
else{
    console.log('Giocatore2');
    document.getElementById('vincitore').innerHTML = 'Giocatore2'
}
