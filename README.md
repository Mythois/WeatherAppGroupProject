# project_1 - Weather App

## Oppbygning
Appen vår er en enkel værapp, som viser været for gjeldende dag og ukesvarsel for noen store byer i Norge samt enkelte hovedstader i Europa.

Hvor finner vi hva i appen vår??

## Funksjonelle krav
Brukeren skal få presentert en og en ressurs om gangen, men enkel mulighet til å bla seg frem og tilbake, og med mulighet til å hoppe til en spesifikk ressurs (f.eks. ved å velge i en liste).
* Vi har valgt å la brukeren navigere seg mellom ulike ressurser (værmelding for byer) gjennom en fullstendig liste på startsiden for applikasjonen, hvor bruker kan trykke seg inn på hver enkelt ressurs for mer informasjon.

En bruker skal kunne gjøre et valg (ala filtrering eller sortering) som påvirker utvalget av det som presenteres og hvordan det presenteres. Disse valgene skal huskes selv om siden reloades.
* Vi har valgt å gi bruker muligheten til å filtrere hvilke byer man kan se værmelding for ut ifra hvilket land de befinner seg i, denne filtreringen fungerer ved å trykke seg inn på hvert enkelt land nedenfor søkebaren i "Home". Valgene blir lagret ved bruk av sessionStorage. Bruker har også muligheten til å søke seg frem til byer de ønsker å se værmeldingen for, søket oppdateres mens bruker skriver input i søkebaren.

En bruker skal kunne velge favoritter ved å for eksempel klikke på en stjerne eller et hjerte. Valg skal huskes selv om nettleser avsluttes og startes igjen.
* Vi har valgt å gi bruker muligheten til å stjernemarkere (markere som favoritt) byene de ønsker å enklere finne værmelding for. Disse lagres i "Favorites", slik at bruker enkelt kan få tilgang til de favorittmarkerte byene. Lagringen fungerer ved bruk av localStorage, slik at bruker finner igjen informasjonen selv om man avslutter og gjenoppstarter nettleseren.

Siden skal ha responsivt design og være utformet med tanke på både vanlig desktop skjerm og mobil enhet (tilpasse seg mindre skjerm som kan være både i høyde og breddeformat).
* Vi har gjort noe ulike valg når det kommer til responsivt design. Ved bruk av pc vil bruker klikke seg direkte inn i "Home" og "Favourites" i en responsiv navbar ut ifra skjermstørrelse. Filtrering av land vil vise seg som en linje med land nedenfor søkebaren.
* Gjeldende mobile enheter vil bruker ha muligheten til å trykke seg inn på en nedtrekksbar som viser valgene "Home" og "Favourites". Filtrering av land vil nå befinne seg på to linjer med land nedenfor søkebaren. Slik er det mer brukervennlig å bruke applikasjonen på mobil.

Listen av byer vil fungere som en scrollbar uansett enhet.
Siden skal ha en estetisk og ryddig utforming (dette er subjektivt, men vi er ute etter at dere skal ha lagt ned litt arbeid i stiling av siden). 
* Vi har tatt en rekke valg når det gjelder styling, for å gjøre applikasjonen mest mulig lesbar og ryddig. Ulike elementer har tilnærmet lik styling på alle sidene bruker kan navigere seg mellom, for et ryddig og enkelt design.

## Tekniske krav
Viser bruk av React state og props
* Vi har aktivt brukt props i komponentene for å hente inn data mellom disse, samt React state for å holde på nødvendig informasjon i komponentene.

Løsningen henter data/informasjon fra et REST API og bruker TanStack Query
* Vi har valgt å hente data fra https://open-meteo.com/

Bruker HTML Web storage api (både localstorage og sessionstorage), alternativt kan dere også bruke IndexedDB API’et.
* Vi har valgt å lagre filtrering av byer vel valg av land ved bruk av sessionstorage, slik at bruker enkelt kan holde tråden selv om siden oppdaterer seg.
* Favorittmarkeringer lagre i localstorage og presenteres i "Favorites", slik at bruker enkelt kan finne tilbake til valgte byer på samme enhet.

Bruker React Router
* Vi bruker React Router for å sende bruker mellom ulike pages i applikasjonen, slik som "Home" og "Favourites" i navbaren, og for å sende bruker til en side som viser flere detaljer og langtidsvarsel for byen ved å trykke på navnet til byen i "Home".

Løsningen har responsivt design
* .......................

Hvilke typer skjermer løsningenen er tilpasset for, og bruken av media queries
* stuff


## Testing
- Bruk av Vitest
- Vise snapshot test
- Testing av egne komponent (teste på prop og state, brukerinteraksjon).
- Bruk av mocking så testene ikke henter data
- Applikasjonen skal være testet på mainstream weblesere og mobile enheter (selvsagt kun basert på det gruppa har tilgjengelig av enheter)

## Videre arbeid
- Utforming av flere tester
- Somthing somthing about design
- Bugs
    Favorittmarkeringer har for øyeblikket en visuell bug, som gjør at markeringen forsvinner eller flytter seg når man bruker søkefunksjonen. Dette er dog bare visuelt, slik at det ikke påvirker bruken av applikasjonen i stor grad.

## Bygging og kjøring av prosjektet
For bygging og kjøring av prosjekte se README.md filen inne i "weatherApp" folderen