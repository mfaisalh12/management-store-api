"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					id: 1,
					name: "John Doe",
					email: "admin@gmail.com",
					password: bcrypt.hashSync("admin", 10),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					id: 2,
					name: "Faisal",
					email: "faisal@gmail.com",
					password: bcrypt.hashSync("faisal", 10),
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
