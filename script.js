// ============================================================
// DIE GESCHICHTE – hier stehen alle Stationen (Story-Nodes)
// ============================================================
//
// So baust du eine Station auf:
//   id       = Nummer dieser Station (jede ID darf nur einmal vorkommen)
//   text     = Was der Spieler liest
//   antworten = Liste mit Buttons; jede Antwort hat:
//               text      = Text auf dem Button
//               naechsteId = Nummer der Station, zu der es weitergeht
//
// NEUE STATION HINZUFÜGEN:
//   1. Kopiere einen der Blöcke unten (z.B. ID 2)
//   2. Ändere id, text und antworten
//   3. Verknüpfe sie: Bei einer anderen Station in "antworten"
//      eintragen: { text: "...", naechsteId: DEINE_NEUE_ID }
//   4. Bild: Lege eine Datei "images/station-XX.png" ab (XX = ID mit führender Null,
//      z.B. ID 4 -> station-04.png). Das Spiel lädt sie automatisch!
//
// BEISPIEL für eine neue Station (ID 4):
//   {
//     id: 4,
//     text: "Du befreist den Piep-Bot. Er piept dankbar.",
//     antworten: [
//       { text: "Frag ihn nach dem Weg.", naechsteId: 5 }
//     ]
//   }
//   Dann in Station ID 2 eine Antwort ergänzen:
//   { text: "Hilf dem Piep-Bot.", naechsteId: 4 }
//
// ============================================================


    // ============================================================
    // DIE GESCHICHTE – Sci-Fi-Parodie mit witzigen Anspielungen
    // ============================================================

    const geschichte = [

      // --- START (ID 1) ---
      {
        id: 1,
        text: "Dein Raumschiff ist auf einem heißen Wüstenplaneten abgestürzt. Der Sand flimmert in der Sonne. Du siehst Fußspuren eines Roboters, die nach Norden führen, und eine dunkle Höhle im Westen.",
        antworten: [
          { text: "Folge den Roboter-Spuren.", naechsteId: 2 },
          { text: "Gehe in die dunkle Höhle.", naechsteId: 3 }
        ]
      },

      // --- ID 2: Roboter-Spuren ---
      {
        id: 2,
        text: "Du folgst den Spuren und findest einen kleinen Kugelroboter (Piep-Bot), der im Sand feststeckt wie ein nasser Keks.",
        antworten: [
            { text: "Hilf dem Piep-Bot und ziehe ihn aus dem Sand.", naechsteId: 4 },
            { text: "Frage ihn nach dem Weg, ohne ihm zu helfen.", naechsteId: 5 }
        ]
      },

      // --- ID 3: Die Höhle ---
      {
        id: 3,
        text: "In der Höhle ist es kühl. Plötzlich hörst du ein Geräusch. Du zündest deine Leucht-Klinge, um etwas zu sehen.",
        antworten: [
          { text: "Rufe laut: 'Ich komme in Frieden!'", naechsteId: 8 },
          { text: "Wirf einen Mini-Noppen-Stein des Grauens in die Dunkelheit.", naechsteId: 9 }
        ]
      },

      // --- ID 4: Dem Piep-Bot helfen ---
      {
        id: 4,
        text: "Der Piep-Bot bedankt sich mit lustigen Piep-Geräuschen und spielt ein Video ab.",
        antworten: [
            { text: "Schau dir das Video an.", naechsteId: 6 },
            { text: "Streichle ihn mit der Leucht-Klinge.", naechsteId: 7 }
        ]
      },

      // --- ID 5: Nicht helfen ---
      {
        id: 5,
        text: "Der Piep-Bot piept beleidigt, nennt dich 'Stirn-Falten-Krieger' und versinkt im Treibsand. Ein Sandwurm, der aussieht wie ein Müllschlund aus einem anderen Film, verschluckt ihn.",
        antworten: [
            { text: "Spring mutig hinterher!", naechsteId: 10 },
            { text: "Oh je. Gehe doch lieber in die dunkle Höhle.", naechsteId: 3 }
        ]
      },

      // --- ID 6: Das Video ---
      {
        id: 6,
        text: "Das Hologramm zeigt einen Waschbär mit Raketenwerfer aus dem All, der ruft: 'Wir brauchen das Handtuch der Galaxis, um den Würfel-Kollektiv zu sprengen! Finde das Artefakt in der Höhle!'",
        antworten: [
            { text: "Gehe sofort zur Höhle.", naechsteId: 3 },
            { text: "Frag den Piep-Bot, ob er zufällig ein Handtuch hat.", naechsteId: 11 }
        ]
      },

      // --- ID 7: Fehler mit der Leucht-Klinge ---
      {
        id: 7,
        text: "Das war keine gute Idee. Du überlastest dadurch seine Schaltkreise und er explodiert in einer Wolke aus Konfetti.",
        antworten: [
            { text: "Game Over. Nochmal versuchen!", naechsteId: 1 }
        ]
      },

      // --- ID 8: Pelzriese in der Höhle ---
      {
        id: 8,
        text: "Das Geräusch stoppt. Ein Pelzriese in roter Raumuniform tritt ins Licht. Er hält ein flauschiges Handtuch und sagt: 'Faszinierend. Ein Sternenritter. Kennst du die Antwort auf die ultimative Frage?'",
        antworten: [
            { text: "Antworte: '42'.", naechsteId: 12 },
            { text: "Antworte: 'Möge das Leuchten mit dir sein'.", naechsteId: 13 }
        ]
      },

      // --- ID 9: Die Noppen-Stein-Falle ---
      {
        id: 9,
        text: "Du wirfst einen spitzen Mini-Noppen-Stein in die Dunkelheit. Jemand tritt barfuß darauf und brüllt entsetzlich auf! Es ist der Herr der schwarzen Maske — im Sternen-Schlafanzug!",
        antworten: [
            { text: "Entschuldige dich höflich.", naechsteId: 14 },
            { text: "Laufe schreiend weg!", naechsteId: 1 }
        ]
      },

      // --- ID 10: Der Sandwurm ---
      {
        id: 10,
        text: "Der Müllschlund-Sandwurm spuckt dich direkt wieder aus. Du schmeckst wohl nicht nach Pelzriesen-Keksen.",
        antworten: [
            { text: "Klopfe den Sand ab und beginne von vorn.", naechsteId: 1 }
        ]
      },

      // --- ID 11: Das Handtuch ---
      {
        id: 11,
        text: "Der Piep-Bot öffnet eine Klappe und reicht dir ein gelbes Handtuch, auf dem groß 'BLEIB RUHIG, ES IST NUR EIN UNIVERSUM' steht. Plötzlich erfasst dich ein greller Lichtstrahl!",
        antworten: [
            { text: "Lass dich wegbeamen.", naechsteId: 15 }
        ]
      },

      // --- ID 12: Der Hebel-Raum ---
      {
        id: 12,
        text: "Der Pelzriese nickt weise. 'Korrekt. Tritt ein in den Kontrollraum.' Vor dir steht ein Teleporter mit drei Hebeln. Welchen ziehst du?",
        antworten: [
            { text: "Den roten Hebel (Beschriftung: 'Nicht drücken!').", naechsteId: 16 },
            { text: "Den grünen Hebel (sieht aus wie ein Grüner Minimeister aus Sumpf).", naechsteId: 15 },
            { text: "Den blauen Hebel (summt wie eine britische Zeit-Telefonzelle).", naechsteId: 17 }
        ]
      },

      // --- ID 13: Falsches Filmuniversum ---
      {
        id: 13,
        text: "'Falsches Filmuniversum!', brummt der Pelzriese genervt und beamt dich mit einer Funk-Sprecheinheit zurück in die Wüste.",
        antworten: [
            { text: "Zurück zum Start...", naechsteId: 1 }
        ]
      },

      // --- ID 14: Maske helfen (GEWONNEN) ---
      {
        id: 14,
        text: "Der Herr der schwarzen Maske reibt sich den Fuß. 'Das tat weh! Aber danke für den Stein — mir fehlte genau dieses Zahnrad für meinen Mond des absolut Bösen.' Zum Dank schenkt er dir seinen Krawatten-Jäger.",
        antworten: [
            { text: "Steig in den Krawatten-Jäger und fliege nach Hause!", naechsteId: 99 }
        ]
      },

      // --- ID 15: Auf der Brücke ---
      {
        id: 15,
        text: "Du materialisierst auf der Brücke eines fremden Raumschiffs. Ein Baum-Alien am Steuer spricht nur einen Satz. Der Schiffs-Computer meldet: 'System gesperrt. Benötige Logik-Code.'",
        antworten: [
            { text: "Sag: 'Ich bin definitiv ein Baum.'", naechsteId: 18 },
            { text: "Schlage mit der Leucht-Klinge auf die Konsole.", naechsteId: 19 }
        ]
      },

      // --- ID 16: Roter Hebel ---
      {
        id: 16,
        text: "Eine Falltür öffnet sich. Du landest in einer Grube voller Plüsch-Kugel-Aliens, die dich so lange kitzeln, bis du aufgibst.",
        antworten: [
            { text: "Das war wohl der falsche Hebel.", naechsteId: 1 }
        ]
      },

      // --- ID 17: Blauer Hebel ---
      {
        id: 17,
        text: "Du reist durch die Zeit zurück und stehst wieder genau da, wo du abgestürzt bist. Verrückt!",
        antworten: [
            { text: "Alles nochmal von vorne.", naechsteId: 1 }
        ]
      },

      // --- ID 18: Das finale Rätsel ---
      {
        id: 18,
        text: "Der Computer verlangt die Lösung für ein Rätsel, um den Überlicht-Antrieb zu starten: 'Wenn 3 Piep-Bots genau 3 Raumschiffe in 3 Tagen reparieren können... Wie lange brauchen dann 100 Piep-Bots für 100 Raumschiffe?'",
        antworten: [
            { text: "100 Tage", naechsteId: 20 },
            { text: "3 Tage", naechsteId: 21 },
            { text: "42 Tage", naechsteId: 20 }
        ]
      },

      // --- ID 19: Konsole kaputt ---
      {
        id: 19,
        text: "Das war keine gute Idee. Die Konsole war eigentlich ein Auto-Roboter in Verkleidung, der jetzt ziemlich schlecht gelaunt ist.",
        antworten: [
            { text: "Schnell weg hier!", naechsteId: 1 }
        ]
      },

      // --- ID 20: Falsche Rätsel-Lösung ---
      {
        id: 20,
        text: "Der Computer leuchtet rot auf: 'FALSCH! Überlicht-Antrieb deaktiviert.' Das Schiff stürzt ab und du landest wieder im Wüstensand.",
        antworten: [
            { text: "Mathe ist manchmal echt fies.", naechsteId: 1 }
        ]
      },

      // --- ID 21: RICHTIG! (GEWONNEN) ---
      {
        id: 21,
        text: "Der Computer sagt: 'KORREKT! Überlicht-Antrieb online.' (Jeder Piep-Bot braucht 3 Tage für 1 Schiff, egal wie viele es sind!). Das Schiff springt auf Lichtgeschwindigkeit. Du hast das Universum gerettet!",
        antworten: [
            { text: "JUHU! Sieg!", naechsteId: 99 }
        ]
      },

      // --- ID 99: Das Ende ---
      {
        id: 99,
        text: "🏆 HERZLICHEN GLÜCKWUNSCH! 🏆 Du bist ein wahrer Meister der Galaxien, Bezwinger der Noppen-Steine und Kenner aller Film-Parodien. Möge das Leuchten, der Überlicht-Antrieb und das Handtuch immer mit dir sein!",
        antworten: []
      }
];


// ============================================================
// SPIEL-LOGIK – zeigt Text und Buttons auf der Webseite
// ============================================================

// Merkt sich, an welcher Station wir gerade sind
let aktuelleId = 1;

// Holt die HTML-Elemente aus index.html
const storyBildElement = document.getElementById("story-bild");
const storyTextElement = document.getElementById("story-text");
const choicesElement = document.getElementById("choices");


// Baut den Dateinamen für das Bild zur aktuellen Station
// Beispiel: ID 1  -> "images/station-01.png"
//           ID 99 -> "images/station-99.png"
function bildPfadFuerStation(id) {
  const nummer = String(id).padStart(2, "0");
  return "images/station-" + nummer + ".png";
}


// Zeigt das passende Bild zur Station an
function zeigeBild(id) {
  const bildPfad = bildPfadFuerStation(id);

  storyBildElement.innerHTML =
    '<img src="' + bildPfad + '" alt="Illustration zur Szene ' + id + '">';
}


// Sucht eine Station anhand ihrer ID im Array "geschichte"
function findeStation(id) {
  return geschichte.find(function (station) {
    return station.id === id;
  });
}


// Zeigt eine Station an: Text oben, Buttons unten
function zeigeStation(id) {
  aktuelleId = id;

  // Passende Station suchen
  const station = findeStation(id);

  // Falls die ID nicht existiert: Fehlermeldung
  if (!station) {
    storyTextElement.textContent = "Diese Station gibt es noch nicht. Prüfe die ID in script.js!";
    choicesElement.innerHTML = "";
    return;
  }

  // Bild und Text zur Station anzeigen
  zeigeBild(id);
  storyTextElement.textContent = station.text;

  // Alte Buttons entfernen
  choicesElement.innerHTML = "";

  // Für jede Antwort einen neuen Button bauen
  for (let i = 0; i < station.antworten.length; i++) {
    const antwort = station.antworten[i];
    const button = document.createElement("button");

    button.textContent = antwort.text;

    // Beim Klick: zur nächsten Station springen
    button.addEventListener("click", function () {
      zeigeStation(antwort.naechsteId);
    });

    choicesElement.appendChild(button);
  }

  // Wenn es keine Antworten mehr gibt: Ende oder Sieg
  if (station.antworten.length === 0) {
    const neuStartenButton = document.createElement("button");

    if (id === 99) {
      neuStartenButton.textContent = "Nochmal spielen";
    } else {
      const endeHinweis = document.createElement("p");
      endeHinweis.className = "ende-hinweis";
      endeHinweis.textContent = "— Hier endet dieser Pfad. Füge in script.js neue Antworten hinzu! —";
      storyTextElement.appendChild(endeHinweis);
      neuStartenButton.textContent = "Nochmal von vorn";
    }

    neuStartenButton.className = "neu-starten";
    neuStartenButton.addEventListener("click", function () {
      zeigeStation(1);
    });
    choicesElement.appendChild(neuStartenButton);
  }
}


// ============================================================
// SPIEL STARTEN – wenn die Seite geladen ist
// ============================================================
// Die "1" ist die Start-ID. Ändere sie, wenn du woanders beginnen willst.

zeigeStation(1);
