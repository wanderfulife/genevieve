<template>
	<div class="container">

		<div id="enqueteur" v-if="level === 0">
			<h2>Prénom enqueteur :</h2>
			<input class="form-control" type="text" v-model="ENQUETEUR" />
			<button v-if="ENQUETEUR" @click="next" class="btn-next">Suivant</button>
		</div>

		<div id="start" v-if="level === 1">
			<button @click="startSurvey" class="btn-next">COMMENCER QUESTIONNAIRE</button>
		</div>

		<div id="zone" v-if="level === 2">
			<h1>Zone d'enquête</h1>
			<input class="form-control" type="text" v-model="zone">
			<button v-if="zone" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>


		<div id="Q1" v-if="level === 3">
			<h1>Bonjour, pour mieux connaître les usagers de la gare de Sainte Geneviève des Bois, Cœur d’Essonne
				Agglomération souhaiterait en savoir plus sur votre déplacement en cours. Auriez-vous quelques secondes
				à
				nous accorder ?»
				Si la personne enquêtée pose une question au sujet de l’enquête déjà réalisée en juin 2023, préciser
				qu’on a
				besoin d’affiner notre connaissance des usagers en complétant par une enquête sur la période de pointe
				du
				matin.</h1>
			<h1> Quelle est la raison de votre présence en gare? </h1>
			<select v-model="Q1" class="form-control">
				<option v-for="option in q1" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q1" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q2" v-if="level === 4 && Q1 === '1'">
			<h1> De quelle commune êtes-vous parti pour arriver à la gare ? </h1>
			<select v-model="Q2" class="form-control">
				<option v-for="option in q2" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q2 === '1'" class="form-control" type="text" v-model="Q2_a"
				placeholder="De quelle rue de Sainte Geneviève des Bois venez-vous ?">
			<input v-if="Q2 === '6'" class="form-control" type="text" v-model="Q2_details"
				placeholder="préciser nom de la commune : ">
			<button v-if="Q2" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q3" v-if="level === 5">
			<h1> Quel mode de transport avez-vous utilisé pour vous rendre à la gare? </h1>
			<select v-model="Q3" class="form-control">
				<option v-for="option in q3" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3 === '10'" class="form-control" type="text" v-model="Q3_details" placeholder="préciser">
			<button v-if="Q3" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q3a" v-if="level === 6 && Q3 === '2'">
			<h1> Où avez-vous stationné votre voiture ? </h1>
			<select v-model="Q3a" class="form-control">
				<option v-for="option in q3a" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3a === '5'" class="form-control" type="text" v-model="Q3a_details" placeholder="préciser">
			<button v-if="Q3a" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q3b" v-if="level === 6 && Q3 === '3'">
			<h1> Où vous êtes-vous fait déposer ? </h1>
			<select v-model="Q3b" class="form-control">
				<option v-for="option in q3b" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q3b" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q3c" v-if="level === 6 && Q3 === '4'">
			<h1> Quelle ligne de bus avez-vous emprunté ?  </h1>
			<select v-model="Q3c" class="form-control">
				<option v-for="option in q3c" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<input v-if="Q3c === '8'" class="form-control" type="text" v-model="Q3c_details" placeholder="préciser">
			<button v-if="Q3c" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q3d" v-if="level === 6 && (Q3 === '5' || Q3 === '6' || Q3 === '7')">
			<h1> Où avez - vous stationné votre vélo / trottinette ? </h1>
			<select v-model="Q3d" class="form-control">
				<option v-for="option in q3d" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q3d" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q4"
			v-if="(level === 7 && (Q3 === '2' || Q3 === '3' || Q3 === '4' || Q3 === '5' || Q3 === '6' || Q3 === '7')) || (level === 6 && (Q3 === '1' || Q3 === '8' || Q3 === '9' || Q3 === '10'))">
			<h1> Pour ce trajet en train, quelle sera votre gare de descente sur la ligne C ?</h1>
			<select v-model="Q4" class="form-control">
				<option v-for="option in q4" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q4" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q5"
			v-if="(level === 8 && (Q3 === '2' || Q3 === '3' || Q3 === '4' || Q3 === '5' || Q3 === '6' || Q3 === '7')) || (level === 7 && (Q3 === '1' || Q3 === '8' || Q3 === '9' || Q3 === '10'))">
			<h1> Quel est le motif de votre déplacement ? </h1>
			<select v-model="Q5" class="form-control">
				<option v-for="option in q5" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q5" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q6"
			v-if="(level === 9 && (Q3 === '2' || Q3 === '3' || Q3 === '4' || Q3 === '5' || Q3 === '6' || Q3 === '7')) || (level === 8 && (Q3 === '1' || Q3 === '8' || Q3 === '9' || Q3 === '10'))">
			<h1> A quelle fréquence utilisez-vous la gare ?</h1>
			<select v-model="Q6" class="form-control">
				<option v-for="option in q6" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q6" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q7"
			v-if="(level === 10 && (Q3 === '2' || Q3 === '3' || Q3 === '4' || Q3 === '5' || Q3 === '6' || Q3 === '7')) || (level === 9 && (Q3 === '1' || Q3 === '8' || Q3 === '9' || Q3 === '10'))">
			<h1>Avec quel titre de transport voyagez-vous?</h1>
			<select v-model="Q7" class="form-control">
				<option v-for="option in q7" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q7" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q8"
			v-if="(level === 11 && (Q3 === '2' || Q3 === '3' || Q3 === '4' || Q3 === '5' || Q3 === '6' || Q3 === '7')) || (level === 10 && (Q3 === '1' || Q3 === '8' || Q3 === '9' || Q3 === '10'))">
			<h1>Quel âge avez-vous?</h1>
			<select v-model="Q8" class="form-control">
				<option v-for="option in q8" :key="option.id" :value="option.output">
					{{ option.text }}
				</option>
			</select>
			<button v-if="Q8" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<div id="Q9"
			v-if="(level === 12 && (Q3 === '2' || Q3 === '3' || Q3 === '4' || Q3 === '5' || Q3 === '6' || Q3 === '7')) || (level === 11 && (Q3 === '1' || Q3 === '8' || Q3 === '9' || Q3 === '10'))">
			<h1>Avez-vous des suggestions pour améliorer les conditions d’accès à cette gare ?</h1>
			<input class="form-control" type="text" v-model="Q9" placeholder="Precisions">
			<button v-if="Q9" @click="next" class="btn-next">Suivant</button>
			<button @click="back" class="btn-return">retour</button>
		</div>


		<div id="end"
			v-if="(level === 13 && (Q3 === '2' || Q3 === '3' || Q3 === '4' || Q3 === '5' || Q3 === '6' || Q3 === '7')) || (level === 12 && (Q3 === '1' || Q3 === '8' || Q3 === '9' || Q3 === '10'))">
			<h2>Merci pour votre réponse et bon voyage. </h2>
			<button @click="submitSurvey" class="btn-next">FINIR QUESTIONNAIRE</button>
			<button @click="back" class="btn-return">retour</button>
		</div>

		<img class="logo" src="../assets/Alycelogo.webp" alt="Logo Alyce">

		<button class="btn-fin" @click="downloadData">download DATA</button>

	</div>
	<div>
		<span style="margin-left: 10px;">Nombre de questionnaires : {{ docCount }}</span>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { q1,q2, q3, q3a, q3b, q3c, q3d, q4, q5, q6, q7, q8 } from "./reponses";
import GareSelector from "./GareSelector.vue";
import CommuneSelector from './CommuneSelector.vue';
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";
import * as XLSX from "xlsx";

const docCount = ref(0);
const surveyCollectionRef = collection(db, "SGDB");
const level = ref(0);
const startDate = ref('');
const ENQUETEUR = ref('');
const zone = ref('');
const Q1 = ref('');
const Q2 = ref('');
const Q2_a = ref('');
const Q2_details = ref('');
const Q3 = ref('');
const Q3_details = ref('');
const Q3a = ref('');
const Q3a_details = ref('');
const Q3b = ref('');
const Q3c = ref('');
const Q3c_details = ref('');
const Q3d = ref('');
const Q4 = ref('');
const Q5 = ref('');
const Q6 = ref('');
const Q7 = ref('');
const Q8 = ref('');
const Q9 = ref('');




const startSurvey = () => {
	startDate.value = new Date().toLocaleTimeString("fr-FR").slice(0, 8);
	level.value++;
}


const next = () => {
	level.value++;
	console.log(level.value)
}

const back = () => {
	level.value--;
}


const getDocCount = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		docCount.value = querySnapshot.size;
	} catch (error) {
		console.error("Error getting document count:", error);
	}
};

onMounted(getDocCount);

const submitSurvey = async () => {
	await addDoc(surveyCollectionRef, {
		HEURE_DEBUT: startDate.value,
		DATE: new Date().toLocaleDateString("fr-FR").replace(/\//g, "-"),
		JOUR: new Date().toLocaleDateString("fr-FR", { weekday: 'long' }),
		ENQUETEUR: ENQUETEUR.value,
		HEURE_FIN: new Date().toLocaleTimeString("fr-FR").slice(0, 8),
		ZONE: zone.value,
		Q1: Q1.value,
		Q2: Q2.value,
		Q2_a: Q2_a.value,
		Q2_DETAILS: Q2_details.value,
		Q3: Q3.value,
		Q3_DETAILS: Q3_details.value,
		Q3a: Q3a.value,
		Q3a_DETAILS: Q3a_details.value,
		Q3b: Q3b.value,
		Q3c: Q3c.value,
		Q3c_DETAILS: Q3c_details.value,
		Q3d: Q3d.value,
		Q4: Q4.value,
		Q5: Q5.value,
		Q6: Q6.value,
		Q7: Q7.value,
		Q8: Q8.value,
		Q9: Q9.value,

	});
	level.value = 1;
	startDate.value = "";
	zone.value = "";
	Q1.value = "";
	Q2.value = "";
	Q2_a.value = "";
	Q2_details.value = "";
	Q3.value = "";
	Q3_details.value = "";
	Q3a.value = "";
	Q3a_details.value = "";
	Q3b.value = "";
	Q3c.value = "";
	Q3c_details.value = "";
	Q3d.value = "";
	Q4.value = "";
	Q5.value = "";
	Q6.value = "";
	Q7.value = "";
	Q8.value = "";
	Q9.value = "";

	getDocCount();
};

const downloadData = async () => {
	try {
		const querySnapshot = await getDocs(surveyCollectionRef);
		let data = [];
		let maxWidths = {}; // Object to keep track of maximum width for each column

		// Define your headers // MODIFICATION SUR L'EXCEL
		const headers = {
			ID_questionnaire: "ID_questionnaire",
			ENQUETEUR: "ENQUETEUR",
			DATE: "DATE",
			JOUR: "JOUR",
			HEURE_DEBUT: "HEURE_DEBUT",
			HEURE_FIN: "HEURE_FIN",
			ZONE: "ZONE",
			Q1: "Q1",
			Q2: "Q2",
			Q2_a: "Q2_a",
			Q2_DETAILS: "Q2_DETAILS",
			Q3: "Q3",
			Q3_DETAILS: "Q3_DETAILS",
			Q3a: "Q3a",
			Q3a_DETAILS: "Q3a_DETAILS",
			Q3b: "Q3b",
			Q3c: "Q3c",
			Q3c_DETAILS: "Q3c_DETAILS",
			Q3d: "Q3d",
			Q4: "Q4",
			Q5: "Q5",
			Q6: "Q6",
			Q7: "Q7",
			Q8: "Q8",
			Q9: "Q9",
		};

		// Initialize maxWidths with header lengths
		Object.keys(headers).forEach((key) => {
			maxWidths[key] = headers[key].length;
		});

		querySnapshot.forEach((doc) => {
			let docData = doc.data();
			let mappedData = {
				ID_questionnaire: doc.id,
				ENQUETEUR: docData.ENQUETEUR || "",
				DATE: docData.DATE || "",
				JOUR: docData.JOUR || "",
				HEURE_DEBUT: docData.HEURE_DEBUT || "",
				HEURE_FIN: docData.HEURE_FIN || "",
				ZONE: docData.ZONE || "",
				Q1: docData.Q1 || "",
				Q2: docData.Q2 || "",
				Q2_a: docData.Q2_a || "",
				Q2_DETAILS: docData.Q2_DETAILS || "",
				Q3: docData.Q3 || "",
				Q3_DETAILS: docData.Q3_DETAILS || "",
				Q3a: docData.Q3a || "",
				Q3a_DETAILS: docData.Q3a_DETAILS || "",
				Q3b: docData.Q3b || "",
				Q3c: docData.Q3c || "",
				Q3c_DETAILS: docData.Q3c_DETAILS || "",
				Q3d: docData.Q3d || "",
				Q4: docData.Q4 || "",
				Q5: docData.Q5 || "",
				Q6: docData.Q6 || "",
				Q7: docData.Q7 || "",
				Q8: docData.Q8 || "",
				Q9: docData.Q9 || "",
			};
			data.push(mappedData);
			// Update maxWidths for each key in mappedData
			Object.keys(mappedData).forEach((key) => {
				const valueLength = mappedData[key].toString().length;
				maxWidths[key] = Math.max(maxWidths[key], valueLength);
			});
		});
		// Convert data to a worksheet
		const worksheet = XLSX.utils.json_to_sheet(data, {
			header: Object.keys(headers),
			skipHeader: false,
		});
		// Set the widths for each column
		worksheet["!cols"] = Object.keys(maxWidths).map((key) => ({
			wch: maxWidths[key] + 2 // +2 for a little extra padding
		}));
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, "Data"); ``
		// Export the workbook to a .xlsx file
		XLSX.writeFile(workbook, "genevieve.xlsx");
	} catch (error) {
		console.error("Error downloading data: ", error);
	}
};

</script>

<style>
body {
	background-color: #2a3b63;
}

.logo {
	padding: 10%;
	height: 3em;
}

h1 {
	text-align: center;
	color: #4caf50;
	font-size: 18px;
}

h2 {
	color: white;
	font-size: 16px;
}

.english {
	color: cyan;
}

.container {
	background-color: #2a3b63;
	color: white;
	padding: 5% 0;
	width: 75%;
	margin: auto;
}

.btn-next {
	width: 100%;
	background-color: green;
	color: white;
	padding: 20px 20px;
	margin-top: 20%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}


.btn-fin {
	width: 100%;
	background-color: #4c4faf;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return {
	width: 100%;
	background-color: #898989;
	color: white;
	padding: 20px 20px;
	margin-top: 5%;
	border: none;
	border-radius: 5px;
	cursor: pointer;
}

.btn-return:hover {
	background-color: #839684;
}

.commune-dropdown {
	/* Style your dropdown list here */
	list-style-type: none;
	padding: 0;
	margin: 0;
	border: 1px solid #ccc;
	border-radius: 4px;
	max-height: 200px;
	overflow-y: auto;
}

.form-control {
	width: 100%;
	border-radius: 5px;
	border: 1px solid white;
	background-color: #333;
	color: white;
	text-transform: uppercase;
	font-weight: bolder;
}

input.form-control {
	width: 93%;
}

.commune-dropdown li {
	padding: 5px 10px;
	cursor: pointer;
}

*:focus {
	outline: none;
}

.commune-dropdown li:hover {
	background-color: #f0f0f0;
}

input,
select,
button {
	font-size: 16px;
	padding: 10px;
}
</style>
