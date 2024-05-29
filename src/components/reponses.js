
const accesQuai = [
	{ id: 1, output: "1", text: "Accès 1 (ascenseur à droite en travaux)" },
	{ id: 2, output: "2", text: "Accès 2 bâtiment voyageur" },
	{ id: 3, output: "3", text: "Accès 3 (l'autre coté de la passerelle)" },
	{
		id: 4,
		output: "4",
		text: "Accès 4 derrière l'escalier, au niveau de l'ascenseur)",
	},
	{
		id: 5,
		output: "5",
		text: "Quai direction Paris",
	},
	{
		id: 6,
		output: "6",
		text: "quais direction Banlieue",
	},
];	


const q1 = [
	{ id: 1, output: "1", text: "Je vais prendre le train" },
	{ id: 2, output: "2", text: "Je viens de descendre du train" },
	{
		id: 3,
		output: "3",
		text: "Autre : J’accompagne des voyageurs qui partent / J’attends des voyageurs qui arrivent / Je viens chercher un renseignement",
	},
];

const q2 = [
	{ id: 1, output: "1", text: "Sainte Geneviève des Bois" },
	{ id: 2, output: "2", text: "Villiers-sur-Orge" },
	{ id: 3, output: "3", text: "Villemoisson-sur-Orge" },
	{ id: 4, output: "4", text: "Longpont-sur-Orge" },
	{ id: 5, output: "5", text: "Fleury-Mérogis" },
	{ id: 6, output: "6", text: "Autre commune :" },
];

const q3 = [
	{ id: 1, output: "1", text: "A pied" },
	{ id: 2, output: "2", text: "En voiture – conducteur" },
	{ id: 3, output: "3", text: "En voiture – passager" },
	{ id: 4, output: "4", text: "En bus" },
	{ id: 5, output: "5", text: "A vélo mécanique" },
	{ id: 6, output: "6", text: "A vélo à assistance électrique (VAE)" },
	{ id: 7, output: "7", text: "En trottinette" },
	{ id: 8, output: "8", text: "En Taxi/VTC" },
	{ id: 9, output: "9", text: "Deux roues motorisées" },
	{ id: 10, output: "10", text: "Autre" },
];

const q3a = [
	{
		id: 1,
		output: "1",
		text: "Sur le parking de la gare côté Villiers-sur-Orge",
	},
	{ id: 2, output: "2", text: "Sur la voirie côté Villiers-sur-Orge" },
	{ id: 3, output: "3", text: "Sur le parking de la gare côté Gabriel Péri" },
	{ id: 4, output: "4", text: "Sur la voirie du côté Gabriel Péri" },
	{ id: 5, output: "5", text: "Autre" },
];

const q3b = [
	{
		id: 1,
		output: "1",
		text: "Du côté Gabriel Péri",
	},
	{ id: 2, output: "2", text: "Du côté Villiers-sur-Orge" },
];

const q3c = [
	{ id: 1, output: "1", text: "1" },
	{ id: 2, output: "2", text: "2" },
	{ id: 3, output: "3", text: "4" },
	{ id: 4, output: "4", text: "DM3B" },
	{ id: 5, output: "5", text: "DM6A" },
	{ id: 6, output: "6", text: "DM17" },
	{ id: 7, output: "7", text: "1025" },
	{ id: 8, output: "8", text: "Autre" },
];

const q3d = [
	{
		id: 1,
		output: "1",
		text: "Du côté Gabriel Péri",
	},
	{ id: 2, output: "2", text: "Du côté Villiers-sur-Orge" },
	{ id: 3, output: "3", text: "Vélo/trottinette embarqué dans le train" },
];


const q4 = [
	{ id: 1, output: "1", text: "Ablon" },
	{ id: 2, output: "2", text: "Arpajon Accessible" },
	{ id: 3, output: "3", text: "Athis-Mons" },
	{ id: 4, output: "4", text: "Avenue du Président-Kennedy" },
	{ id: 5, output: "5", text: "Avenue Foch" },
	{ id: 6, output: "6", text: "Avenue Henri-Martin" },
	{ id: 7, output: "7", text: "Bibliothèque François-Mitterrand Accessible" },
	{ id: 8, output: "8", text: "Boulainvilliers" },
	{ id: 9, output: "9", text: "Bouray" },
	{ id: 10, output: "10", text: "Brétigny Accessible" },
	{ id: 11, output: "11", text: "Breuillet – Bruyères-le-Châtel" },
	{ id: 12, output: "12", text: "Breuillet-Village" },
	{ id: 13, output: "13", text: "Cernay Accessible" },
	{ id: 14, output: "14", text: "Chamarande" },
	{ id: 15, output: "15", text: "Champ de Mars – Tour Eiffel" },
	{ id: 16, output: "16", text: "Chaville – Vélizy Accessible" },
	{ id: 17, output: "17", text: "Chemin d'Antony" },
	{ id: 18, output: "18", text: "Choisy-le-Roi Accessible" },
	{ id: 19, output: "19", text: "Dourdan - La Forêt Accessible" },
	{ id: 20, output: "20", text: "Dourdan Accessible" },
	{ id: 21, output: "21", text: "Égly" },
	{ id: 22, output: "22", text: "Épinay-sur-Orge Accessible" },
	{ id: 23, output: "23", text: "Épinay-sur-Seine" },
	{ id: 24, output: "24", text: "Ermont – Eaubonne" },
	{ id: 25, output: "25", text: "Étampes" },
	{ id: 26, output: "26", text: "Étréchy" },
	{ id: 27, output: "27", text: "Franconville – Le Plessis-Bouchard Accessible" },
	{ id: 28, output: "28", text: "Gennevilliers Accessible" },
	{ id: 29, output: "29", text: "Hôpital européen Georges-Pompidou Accessible" },
	{ id: 30, output: "30", text: "Invalides" },
	{ id: 31, output: "31", text: "Issy" },
	{ id: 32, output: "32", text: "Issy-Val de Seine Accessible" },
	{ id: 33, output: "33", text: "Ivry-sur-Seine" },
	{ id: 34, output: "34", text: "Javel Accessible" },
	{ id: 35, output: "35", text: "Juvisy Accessible" },
	{ id: 36, output: "36", text: "La Norville – Saint-Germain-lès-Arpajon" },
	{ id: 37, output: "37", text: "Lardy" },
	{ id: 38, output: "38", text: "Les Ardoines" },
	{ id: 39, output: "39", text: "Les Grésillons" },
	{ id: 40, output: "40", text: "Les Saules Accessible" },
	{ id: 41, output: "41", text: "Maison de Radio France" },
	{ id: 42, output: "42", text: "Marolles-en-Hurepoix" },
	{ id: 43, output: "43", text: "Massy – Palaiseau" },
	{ id: 44, output: "44", text: "Massy – Verrières" },
	{ id: 45, output: "45", text: "Meudon-Val-Fleury Accessible" },
	{ id: 46, output: "46", text: "Montigny – Beauchamp Accessible" },
	{ id: 47, output: "47", text: "Montigny-le-Bretonneux" },
	{ id: 48, output: "48", text: "Musée d'Orsay" },
	{ id: 49, output: "49", text: "Musée du Quai Branly – Jacques-Chirac" },
	{ id: 50, output: "50", text: "Neuilly – Porte Maillot" },
	{ id: 51, output: "51", text: "Orly-Ville" },
	{ id: 52, output: "52", text: "Palais des Congrès" },
	{ id: 53, output: "53", text: "Paris-Austerlitz" },
	{ id: 54, output: "54", text: "Pereire – Levallois" },
	{ id: 55, output: "55", text: "Pierrelaye" },
	{ id: 56, output: "56", text: "Pont de l'Alma" },
	{ id: 57, output: "57", text: "Pont de Rungis – Aéroport d'Orly" },
	{ id: 58, output: "58", text: "Pont du Garigliano" },
	{ id: 59, output: "59", text: "Pontoise" },
	{ id: 60, output: "60", text: "Porchefontaine" },
	{ id: 61, output: "61", text: "Porte de Clichy" },
	{ id: 62, output: "62", text: "Rungis – La Fraternelle" },
	{ id: 63, output: "63", text: "Saint-Chéron" },
	{ id: 64, output: "64", text: "Saint-Cyr" },
	{ id: 65, output: "65", text: "Saint-Gratien Accessible" },
	{ id: 66, output: "66", text: "Saint-Martin-d'Étampes" },
	{ id: 67, output: "67", text: "Saint-Michel – Notre-Dame" },
	{ id: 68, output: "68", text: "Saint-Michel-sur-Orge Accessible" },
	{ id: 69, output: "69", text: "Saint-Ouen Accessible" },
	{ id: 70, output: "70", text: "Saint-Ouen-l'Aumône" },
	{ id: 71, output: "71", text: "Saint-Ouen-l'Aumône-Liesse Accessible" },
	{ id: 72, output: "72", text: "Saint-Quentin-en-Yvelines" },
	{ id: 73, output: "73", text: "Sainte-Geneviève-des-Bois" },
	{ id: 74, output: "74", text: "Savigny-sur-Orge" },
	{ id: 75, output: "75", text: "Sermaise" },
	{ id: 76, output: "76", text: "Tribunal de Paris" },
	{ id: 77, output: "77", text: "Valéry Giscard d'Estaing" },
	{ id: 78, output: "78", text: "Versailles-Chantiers Accessible" },
	{ id: 79, output: "79", text: "Versailles-Château-Rive-Gauche Accessible" },
	{ id: 80, output: "80", text: "Villeneuve-le-Roi" },
	{ id: 81, output: "81", text: "Viroflay-Rive-Gauche" },
	{ id: 82, output: "82", text: "Vitry-sur-Seine Accessible" }
];

const q5 = [
	{ id: 1, output: "1", text: "Je me rends sur mon lieu de travail" },
	{ id: 2, output: "2", text: "Je me rends sur mon lieu d’études" },
	{ id: 3, output: "3", text: "Je reviens de mon lieu de travail / de mon lieu d’étude" },
	{ id: 4, output: "4", text: "Déplacement professionnel" },
	{ id: 5, output: "5", text: "Loisirs, tourisme" },
	{ id: 6, output: "6", text: "Achats, démarches administratives, RDV médical…" },		
];

const q6 = [
	{ id: 1, output: "1", text: "4 à 5 fois par semaine" },
	{ id: 2, output: "2", text: "2 à 3 fois par semaine" },
	{ id: 3, output: "3", text: "1 fois par semaine" },
	{ id: 4, output: "4", text: "Moins d’une fois par semaine" },		
];

const q7 = [
	{ id: 1, output: "1", text: "Forfait annuel (Navigo annuel, Forfait Imagin’R, Sénior)" },
	{ id: 2, output: "2", text: "Forfait mensuel (Navigo mensuel)" },
	{ id: 3, output: "3", text: "Titre hebdomadaire ou occasionnel" },
];

const q8 = [
	{ id: 1, output: "1", text: "Moins de 18 ans" },
	{ id: 2, output: "2", text: "Entre 18 et 30 ans" },
	{ id: 3, output: "3", text: "Entre 30 et 40 ans" },
	{ id: 4, output: "4", text: "Entre 40 et 55 ans" },
	{ id: 5, output: "5", text: "Entre 55 et 65 ans" },
	{ id: 6, output: "6", text: "Plus de 65 ans" },
];



export { q1, q2, q3, q3a, q3b, q3c, q3d, q4, q5, q6, q7, q8, accesQuai };
