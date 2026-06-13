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
//     text: "Du befreist den Droiden. Er piept dankbar.",
//     antworten: [
//       { text: "Frag ihn nach dem Weg.", naechsteId: 5 }
//     ]
//   }
//   Dann in Station ID 2 eine Antwort ergänzen:
//   { text: "Hilf dem Droiden.", naechsteId: 4 }
//
// ============================================================


    // ============================================================
    // DIE GESCHICHTE – erweitert mit verrückten Wendungen!
    // ============================================================

    const geschichte = [

      // --- START (ID 1) ---
      {
        id: 1,
        text: "Dein Raumschiff ist auf einem heißen Wüstenplaneten abgestürzt. Der Sand flimmert in der Sonne. Du siehst Fußspuren eines Droiden, die nach Norden führen, und eine dunkle Höhle im Westen.",
        antworten: [
          { text: "Folge den Droiden-Spuren.", naechsteId: 2 },
          { text: "Gehe in die dunkle Höhle.", naechsteId: 3 }
        ]
      },

      // --- ID 2: Droiden-Spuren ---
      {
        id: 2,
        text: "Du folgst den Spuren und findest einen kleinen Astromech-Droiden, der im Sand feststeckt.",
        antworten: [
            { text: "Hilf dem Droiden und ziehe ihn aus dem Sand.", naechsteId: 4 },
            { text: "Frage ihn nach dem Weg, ohne ihm zu helfen.", naechsteId: 5 }
        ]
      },

      // --- ID 3: Die Höhle ---
      {
        id: 3,
        text: "In der Höhle ist es kühl. Plötzlich hörst du ein Geräusch. Du zündest dein Lichtschwert, um etwas zu sehen.",
        antworten: [
          { text: "Rufe laut: 'Ich komme in Frieden!'", naechsteId: 8 },
          { text: "Wirf einen kleinen Block aus Klemmbausteinen zur Ablenkung in die Dunkelheit.", naechsteId: 9 }
        ]
      },

      // --- ID 4: Dem Droiden helfen ---
      {
        id: 4,
        text: "Der Droide bedankt sich mit lustigen Piep-Geräuschen und spielt ein Video ab.",
        antworten: [
            { text: "Schau dir das Video an.", naechsteId: 6 },
            { text: "Streichle ihn mit dem Laserschwert.", naechsteId: 7 }
        ]
      },

      // --- ID 5: Nicht helfen ---
      {
        id: 5,
        text: "Der Droide piept beleidigt, nennt dich einen 'Klingonen-Kopf' und versinkt im Treibsand. Ein Sandwurm (der verblüffend wie ein riesiger Müllschlucker aussieht) verschluckt ihn.",
        antworten: [
            { text: "Spring mutig hinterher!", naechsteId: 10 },
            { text: "Oh je. Gehe doch lieber in die dunkle Höhle.", naechsteId: 3 }
        ]
      },

      // --- ID 6: Das Video ---
      {
        id: 6,
        text: "Das Hologramm zeigt einen sprechenden Waschbären mit einem Raketenwerfer, der ruft: 'Wir brauchen das Handtuch, um den Borg-Würfel zu sprengen! Finde das Artefakt in der Höhle!'",
        antworten: [
            { text: "Gehe sofort zur Höhle.", naechsteId: 3 },
            { text: "Frag den Droiden, ob er zufällig ein Handtuch hat.", naechsteId: 11 }
        ]
      },

      // --- ID 7: Fehler mit dem Lichtschwert ---
      {
        id: 7,
        text: "Das war keine gute Idee. Du überlastest dadurch seine Schaltkreise und er explodiert in einer Wolke aus Konfetti.",
        antworten: [
            { text: "Game Over. Nochmal versuchen!", naechsteId: 1 }
        ]
      },

      // --- ID 8: Wookiee in der Höhle ---
      {
        id: 8,
        text: "Das Geräusch stoppt. Ein riesiger, pelziger Wookiee in einer roten Raumschiff-Uniform tritt ins Licht. Er hält ein flauschiges Handtuch und sagt: 'Faszinierend. Ein Jedi. Hast du die Antwort auf die Frage aller Fragen?'",
        antworten: [
            { text: "Antworte: '42'.", naechsteId: 12 },
            { text: "Antworte: 'Möge die Macht mit dir sein'.", naechsteId: 13 }
        ]
      },

      // --- ID 9: Die Klemmbaustein-Falle ---
      {
        id: 9,
        text: "Du wirfst einen spitzen Lego-Technic-Stein in die Dunkelheit. Jemand tritt barfuß darauf und brüllt entsetzlich auf! Es ist Darth Vader im Pyjama.",
        antworten: [
            { text: "Entschuldige dich höflich.", naechsteId: 14 },
            { text: "Laufe schreiend weg!", naechsteId: 1 }
        ]
      },

      // --- ID 10: Der Sandwurm ---
      {
        id: 10,
        text: "Der Müllschlucker-Sandwurm spuckt dich direkt wieder aus. Du schmeckst wohl nicht nach Wookiee-Keksen.",
        antworten: [
            { text: "Klopfe den Sand ab und beginne von vorn.", naechsteId: 1 }
        ]
      },

      // --- ID 11: Das Handtuch ---
      {
        id: 11,
        text: "Der Droide öffnet eine Klappe und reicht dir ein gelbes Handtuch, auf dem groß 'KEINE PANIK' steht. Plötzlich erfasst dich ein greller Lichtstrahl!",
        antworten: [
            { text: "Lass dich wegbeamen.", naechsteId: 15 }
        ]
      },

      // --- ID 12: Der Hebel-Raum ---
      {
        id: 12,
        text: "Der Wookiee nickt weise. 'Korrekt. Tritt ein in den Kontrollraum.' Vor dir steht ein Teleporter mit drei Hebeln. Welchen ziehst du?",
        antworten: [
            { text: "Den roten Hebel (Beschriftung: 'Nicht drücken!').", naechsteId: 16 },
            { text: "Den grünen Hebel (sieht aus wie ein leuchtender Yoda).", naechsteId: 15 },
            { text: "Den blauen Hebel (klingt wie eine Polizeibox).", naechsteId: 17 }
        ]
      },

      // --- ID 13: Falsches Universum ---
      {
        id: 13,
        text: "'Falsches Universum!', brummt der Wookiee genervt und beamt dich mit einem alten Communicator zurück in die Wüste.",
        antworten: [
            { text: "Zurück zum Start...", naechsteId: 1 }
        ]
      },

      // --- ID 14: Vader helfen (GEWONNEN) ---
      {
        id: 14,
        text: "Vader reibt sich den Fuß. 'Das tat weh! Aber danke für den Stein, mir fehlte genau dieses Zahnrad für meinen Todesstern.' Zum Dank schenkt er dir sein Raumschiff.",
        antworten: [
            { text: "Steig in den TIE-Fighter und fliege nach Hause!", naechsteId: 99 }
        ]
      },

      // --- ID 15: Auf der Brücke ---
      {
        id: 15,
        text: "Du materialisierst auf der Brücke eines fremden Raumschiffs. Ein sprechender Baum (Groot) bedient das Steuerpult. Der Schiffs-Computer meldet: 'System gesperrt. Benötige Logik-Code.'",
        antworten: [
            { text: "Sag zum Computer: 'Ich bin Groot'.", naechsteId: 18 },
            { text: "Schlage mit dem Lichtschwert auf die Konsole.", naechsteId: 19 }
        ]
      },

      // --- ID 16: Roter Hebel ---
      {
        id: 16,
        text: "Eine Falltür öffnet sich. Du landest in einer Grube voller Tribbles (kleine, flauschige Aliens), die dich so lange kitzeln, bis du aufgibst.",
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
        text: "Der Computer verlangt die Lösung für ein Rätsel, um den Warp-Antrieb zu starten: 'Wenn 3 Astromech-Droiden genau 3 Raumschiffe in 3 Tagen reparieren können... Wie lange brauchen dann 100 Droiden für 100 Raumschiffe?'",
        antworten: [
            { text: "100 Tage", naechsteId: 20 },
            { text: "3 Tage", naechsteId: 21 },
            { text: "42 Tage", naechsteId: 20 }
        ]
      },

      // --- ID 19: Konsole kaputt ---
      {
        id: 19,
        text: "Das war keine gute Idee. Die Konsole war eigentlich ein verkleideter Transformer, der jetzt ziemlich wütend ist.",
        antworten: [
            { text: "Schnell weg hier!", naechsteId: 1 }
        ]
      },

      // --- ID 20: Falsche Rätsel-Lösung ---
      {
        id: 20,
        text: "Der Computer leuchtet rot auf: 'FALSCH! Warp-Antrieb deaktiviert.' Das Schiff stürzt ab und du landest wieder im Wüstensand.",
        antworten: [
            { text: "Mathe ist manchmal echt fies.", naechsteId: 1 }
        ]
      },

      // --- ID 21: RICHTIG! (GEWONNEN) ---
      {
        id: 21,
        text: "Der Computer sagt: 'KORREKT! Warp-Antrieb online.' (Jeder Droide braucht 3 Tage für 1 Schiff, egal wie viele es sind!). Das Schiff springt auf Lichtgeschwindigkeit. Du hast das Universum gerettet!",
        antworten: [
            { text: "JUHU! Sieg!", naechsteId: 99 }
        ]
      },

      // --- ID 99: Das Ende ---
      {
        id: 99,
        text: "🏆 HERZLICHEN GLÜCKWUNSCH! 🏆 Du bist ein wahrer Meister der Galaxien, Bezwinger der Klemmbausteine und Kenner der tiefsten Sci-Fi-Geheimnisse. Möge die Macht, der Warp-Antrieb und das Handtuch immer mit dir sein!",
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
