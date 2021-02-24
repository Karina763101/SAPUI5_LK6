sap.ui.define([], function() {
	"use strict";

	return {

		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit: function(sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},

		formatColumnHighLight: function(myUser) {
			if (myUser === 'LAB1000022') {
				return "Success";
			} else {
				return "None";
			}
		},

		radioButton: function(Value) {
			return (Value !== null) ? parseInt(Value, 10) - 1 : -1;
		},
		
		formatAboutCreatedBy: function(myUser, myDate){
			var formatOfDate=sap.ui.core.format.DateFormat.getDateInstance({pattern: "dd/MM/yyyy"});
			var sDate=formatOfDate.format(myDate);
			return `${this.getModel("i18n").getResourceBundle().getText("labelCreatedByObject")} ${myUser}, ${this.getModel("i18n").getResourceBundle().getText("labelCreatedOn")} ${sDate}`;
		},
		
		formatModifiedBy: function(myUser, myDate){
			var formatOfDate=sap.ui.core.format.DateFormat.getDateInstance({pattern: "dd/MM/yyyy"});
			var sDate=formatOfDate.format(myDate);
			return `${this.getModel("i18n").getResourceBundle().getText("labelModifiedByObject")} ${myUser}, ${this.getModel("i18n").getResourceBundle().getText("labelCreatedOn")} ${sDate}`;
		}

	};

});