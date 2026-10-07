const mosse = [[1, 2], [2, 1], [-1, 2], [-2, 1], [1, -2], [2, -1], [-1, -2], [-2, -1] ]

function esistenzaCasella(casella) {
  return casella[0] >= 0 && casella[0] < 8 && casella[1] >= 0 && casella[1] < 8
}

function mossePossibili (casella) {
  let posizioniPossibili = []
  mosse.forEach(elemento => {
    let casellaDiArrivo = [casella[0] + elemento[0], casella[1] + elemento[1]]
    if (esistenzaCasella(casellaDiArrivo)) {
      posizioniPossibili.push(casellaDiArrivo)
    }
  });
  return posizioniPossibili;
}

function knightMoves (partenza, arrivo) {
  if (partenza[0] === arrivo[0] && partenza[1] === arrivo[1] ) {
    console.log("Partenza e arrivo coincindono!");
    return
  }
  const coda = [[partenza, [partenza]]]
  const caselleVisitate = new Set ([partenza.join(",")]);

  while (coda.length > 0) {
    let [casella, percorso] = coda.shift();
  
    if (casella[0] === arrivo[0] && casella[1] === arrivo[1]) {
      console.log(`Il cavallo è arrivato a destinazione in ${percorso.length - 1} mosse!`)
      console.log(`Il percorso svolto è il seguente:`);
      console.log(percorso);
      return
    } else {
      for (const elemento of mossePossibili(casella)) {
        let chiave = elemento.join(",");
        if (!caselleVisitate.has(chiave)) {
          coda.push([elemento, [...percorso, elemento]]);
          caselleVisitate.add(chiave);
        }
      }
    }
  }
}