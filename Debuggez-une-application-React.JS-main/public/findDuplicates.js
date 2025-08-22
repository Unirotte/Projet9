// À placer dans un fichier, par exemple findDuplicates.js
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('c:/Users/Judith/Desktop/Projet9/Debuggez-une-application-React.JS-main/public/events.json', 'utf8'));
const events = data.events;

// Fonction pour créer une "clé unique" pour chaque événement (hors id)
function eventKey(event) {
  // On trie les prestations pour éviter les différences d'ordre
  const prestations = [...event.prestations].sort();
  return JSON.stringify({
    type: event.type,
    date: event.date,
    title: event.title,
    cover: event.cover,
    description: event.description,
    nb_guesses: event.nb_guesses,
    periode: event.periode,
    prestations
  });
}

const map = new Map();

events.forEach(event => {
  const key = eventKey(event);
  if (!map.has(key)) {
    map.set(key, []);
  }
  map.get(key).push(event.id);
});

console.log("Doublons parfaits (hors champ id) :");
let found = false;
for (const [key, ids] of map.entries()) {
  if (ids.length > 1) {
    found = true;
    console.log(`Événements avec ids : [${ids.join(', ')}]`);
    console.log(JSON.parse(key));
    console.log('---');
  }
}
if (!found) {
  console.log("Aucun doublon parfait trouvé.");
}