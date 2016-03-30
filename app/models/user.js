// MODEL TODO
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	// datas: String,
	sexe: String,
	image: String,
	ville: String,
	date: Date,
	pseudo: String,
	email: String,
	mdp: String,
	statut: String,
	attentes: String,
	avez: String,
	enfants: String,
	taille: String,
	silhouette: String,
	cheveux: String,
	couleurchvx: String,
	qualites: {
		qualite01: String,
		qualite02: String,
		qualite03: String,
		qualite04: String,
		qualite05: String,
	},
	manies: {
		manie01: String,
		manie02: String,
		manie03: String,
		manie04: String,
		manie05: String,
		manie06: String,
	},
	interets: {
		interets01: String,
		interets02: String,
		interets03: String,
		interets04: String,
		interets05: String,
		interets06: String,
	},
	musiques: {
		musique01: String,
		musique02: String,
		musique03: String,
		musique04: String,
		musique05: String,
		musique06: String,
		musique07: String,
		musique08: String,
		musique09: String,
		musique010: String,
		musique011: String,
	},
	films: {
		film01: String,
		film02: String,
		film03: String,
		film04: String,
		film05: String,
		film06: String,
		film07: String,
		film08: String,
	},
	travail: {
		travail01: String,
		travail02: String,
		travail03: String,
		travail04: String,
		travail05: String,
		travail06: String,
	},
	passeTemps: {
		passeTemps01: String,
		passeTemps02: String,
		passeTemps03: String,
		passeTemps04: String,
		passeTemps05: String,
	},

});
var User = {

	model: mongoose.model('User', UserSchema),

	create: function (req, res) {
		console.log(req.body);
		User.model.create({
			sexe: req.body.sexe,
			image: req.body.image,
			ville: req.body.ville,
			date: req.body.date,
			pseudo: req.body.pseudo,
			email: req.body.email,
			mdp: req.body.mdp,
			statut: req.body.statut,
			attentes: req.body.attentes,
			avez: req.body.avez,
			enfants: req.body.enfants,
			taille: req.body.taille,
			silhouette: req.body.silhouette,
			cheveux: req.body.cheveux,
			couleurchvx: req.body.couleurchvx,
			qualites: {
				qualite01: req.body.qualite01,
				qualite02: req.body.qualite02,
				qualite03: req.body.qualite03,
				qualite04: req.body.qualite04,
				qualite05: req.body.qualite05
			},
			manies: {
				manie01: req.body.manie01,
				manie02: req.body.manie02,
				manie03: req.body.manie03,
				manie04: req.body.manie04,
				manie05: req.body.manie05,
				manie06: req.body.manie06
			},
			interets: {
				interets01: req.body.interets01,
				interets02: req.body.interets02,
				interets03: req.body.interets03,
				interets04: req.body.interets04,
				interets05: req.body.interets05,
				interets06: req.body.interets06
			},
			musiques: {
				musique01: req.body.musique01,
				musique02: req.body.musique02,
				musique03: req.body.musique03,
				musique04: req.body.musique04,
				musique05: req.body.musique05,
				musique06: req.body.musique06,
				musique07: req.body.musique07,
				musique08: req.body.musique08,
				musique09: req.body.musique09,
				musique010: req.body.musique010,
				musique011: req.body.musique011
			},
			films: {
				film01: req.body.film01,
				film02: req.body.film02,
				film03: req.body.film03,
				film04: req.body.film04,
				film05: req.body.film05,
				film06: req.body.film06,
				film07: req.body.film07,
				film08: req.body.film08
			},
			travail: {
				travail01: req.body.travail01,
				travail02: req.body.travail02,
				travail03: req.body.travail03,
				travail04: req.body.travail04,
				travail05: req.body.travail05,
				travail06: req.body.travail06
			},
			passeTemps: {
				passeTemps01: req.body.passeTemps01,
				passeTemps02: req.body.passeTemps02,
				passeTemps03: req.body.passeTemps03,
				passeTemps04: req.body.passeTemps04,
				passeTemps05: req.body.passeTemps05
			}

		}, function () {
			res.sendStatus(200);
		})
	},
	findAll: function (req, res) {
		User.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function (req, res) {
		User.model.findByIdAndUpdate(req.params.id, {
			sexe: req.body.sexe,
			image: req.body.image,
			ville: req.body.ville,
			date: req.body.mydateOfBirth,
			pseudo: req.body.pseudo,
			email: req.body.email,
			mdp: req.body.mdp,
			statut: req.body.statut,
			attentes: req.body.attentes,
			avez: req.body.avez,
			enfants: req.body.enfants,
			taille: req.body.taille,
			silhouette: req.body.silhouette,
			cheveux: req.body.cheveux,
			couleurchvx: req.body.couleurchvx,
			qualites: {
				qualite01: req.body.qualite01,
				qualite02: req.body.qualite02,
				qualite03: req.body.qualite03,
				qualite04: req.body.qualite04,
				qualite05: req.body.qualite05
			},
			manies: {
				manie01: req.body.manie01,
				manie02: req.body.manie02,
				manie03: req.body.manie03,
				manie04: req.body.manie04,
				manie05: req.body.manie05,
				manie06: req.body.manie06
			},
			interets: {
				interets01: req.body.interets01,
				interets02: req.body.interets02,
				interets03: req.body.interets03,
				interets04: req.body.interets04,
				interets05: req.body.interets05,
				interets06: req.body.interets06
			},
			musiques: {
				musique01: req.body.musique01,
				musique02: req.body.musique02,
				musique03: req.body.musique03,
				musique04: req.body.musique04,
				musique05: req.body.musique05,
				musique06: req.body.musique06,
				musique07: req.body.musique07,
				musique08: req.body.musique08,
				musique09: req.body.musique09,
				musique010: req.body.musique010,
				musique011: req.body.musique011
			},
			films: {
				film01: req.body.film01,
				film02: req.body.film02,
				film03: req.body.film03,
				film04: req.body.film04,
				film05: req.body.film05,
				film06: req.body.film06,
				film07: req.body.film07,
				film08: req.body.film08
			},
			travail: {
				travail01: req.body.travail01,
				travail02: req.body.travail02,
				travail03: req.body.travail03,
				travail04: req.body.travail04,
				travail05: req.body.travail05,
				travail06: req.body.travail06
			},
			passeTemps: {
				passeTemps01: req.body.passeTemps01,
				passeTemps02: req.body.passeTemps02,
				passeTemps03: req.body.passeTemps03,
				passeTemps04: req.body.passeTemps04,
				passeTemps05: req.body.passeTemps05
			}
		}, function () {
			res.sendStatus(200);
		})
	},
	delete: function (req, res) {
		User.model.findByIdAndRemove(req.params.id, function () {
			res.sendStatus(200);
		})
	}

}
module.exports = User;