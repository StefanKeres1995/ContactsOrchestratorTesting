$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("US1.feature");
formatter.feature({
  "name": "Access to the Contacts Orchestrator Solution\u0027s (COS) Landing Page",
  "description": "  As a user\n  I want to access to the URL address provided for the landing page\n  So that I can see the list of the contacts available",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Landing page\u0027s title and text contains \"Contacts Orchestrator Solution\"",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I access the landing page of COS",
  "keyword": "Given "
});
formatter.match({
  "location": "US1StepsDef.iAccessTheLandingPageOfCOS()"
});
formatter.result({
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Contacts Orchestrator Solution]\u003e but was:\u003c[localhost]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat junit.framework.TestCase.assertEquals(TestCase.java:269)\r\n\tat US1StepsDef.iAccessTheLandingPageOfCOS(US1StepsDef.java:23)\r\n\tat ✽.I access the landing page of COS(US1.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the title of the page should be \"Contacts Orchestrator Solution\"",
  "keyword": "Then "
});
formatter.match({
  "location": "US1StepsDef.theTitleOfThePageShouldBe(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I can see the text \"Contacts Orchestrator Solution\"",
  "keyword": "And "
});
formatter.match({
  "location": "US1StepsDef.iCanSeeTheText(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});