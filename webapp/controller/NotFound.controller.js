sap.ui.define([
		"zjblesson/LK6/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblesson.LK6.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);