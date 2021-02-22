/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblesson/LK6/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblesson/LK6/test/integration/pages/Worklist",
	"zjblesson/LK6/test/integration/pages/Object",
	"zjblesson/LK6/test/integration/pages/NotFound",
	"zjblesson/LK6/test/integration/pages/Browser",
	"zjblesson/LK6/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblesson.LK6.view."
	});

	sap.ui.require([
		"zjblesson/LK6/test/integration/WorklistJourney",
		"zjblesson/LK6/test/integration/ObjectJourney",
		"zjblesson/LK6/test/integration/NavigationJourney",
		"zjblesson/LK6/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});