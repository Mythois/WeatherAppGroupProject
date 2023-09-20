# Hvordan starte - How to get started
## Hvordan starte /hvordan bygge
1. Lag en mappe på maskinen din hvor du ønsker at prosjektet skal bo, for eksempel en "project_1" mappe
2. Gå til GitLab repositoriet https://gitlab.stud.idi.ntnu.no/it2810-h23/Team-22/project_1 og velg "Clone" og lagre URL-en under "Clone with HTTPS".
3. Åpne mappen du lagde i steg 1 i terminalen og skriv inn "git clone {url_fra_clone_with_HTTPS}" 
4. Vent til clonings prosessen er fullført
5. Kjør "git pull" i terminalen for å være sikker på at du fikk med alt fra repositoret
6. Kjør "git branch -a" for å se alle grenene 
7. Kjør "git checkout {navn_på_gren} for å endre til en annen gren 
8. Når du er i den ønskede grenen pass på at du er inne i "weatherApp" folderen. For eksempel hvis du lagde mappen "project_1" i steg 1 vil du nå kjøre "cd weatherApp" for gå inn i riktig folder.
9. Kjør "npm install" og vent til at prosessen fullfører
10. Du kan nå kjøre "npm run dev" for å starte en live server som blir oppdatert hver gang du gjør endringer i databasen. 

Steg 9 og 10 må gjentas hver gang du starter din IDE og kan hende det også gjelder for steg 8.

## Hvordan lagre endringer i branch
Når du har laget alle endringene dine og ønsker å lagre de i grenen du jobber på, gjør følgende:
1. Kjør "git status" for å se alle endrede filer
2. Hvis man antar at du ønsker å legge til alle filene som er endret til grenen du jobber på, kjør "git add --all"
3. Sjekk om du har lagt til alle endringene dine ved å kjøre "git status" igjen
4. Del endringene din eved å kjøre "git commit"
5. Dytt endringene til hoved branchen ved å kjøre "git push"

---

## How to get started
1. Create a folder on your machine in which you want the project to live, for example the folder "project_1"
2. Go to the GitLab repository https://gitlab.stud.idi.ntnu.no/it2810-h23/Team-22/project_1 and select "Clone" and copy the URL pertaining to "Clone with HTTPS".
3. Open the folder created in step 1 in a terminal and enter "git clone the-url-from-clone-with-https"
4. Wait until the cloning process is finished
5. Run "git pull" in the terminal just to be sure that you got everything from the repository
6. Run "git branch -a" to see all branches
7. Run "git checkout name-of-branch" to switch to another branch
8. Once you are in the desired branch make sure that you are in the "weatherApp" folder. For example if you created the folder "project_1" folder in step 1, you may want to run "cd weatherApp" to enter the correct folder.
9. Run "npm install" and wait for the process to finish.
10. You can now run "npm run dev" to start a live server that should update everytime you make changes to the codebase.

Step 8 may  have to and step 9 and 10 certainly  have to be repeated everytime you start your IDE. 

## How to save changes in a branch
Once you have made changes that you want to save in the branch you are currently working in, do the following:
1. Run "git status" to see all changed files
2. Assuming you want to add all changed files / all changes to the branch you are currently working in, run the command "git add --all".
5. Check that you have added all changes by running: git status
4. Commit the changes you have made by running: git commit -m"[#issueNumber]your-commit message header" -m"your-detailed-commit-message"
5. Push the commited changes to the branch: git push

