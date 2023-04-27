const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl : 'http://localhost:9000',
    options: {
      'sonar.projectName': 'Group-Two',
      'sonar.login': 'admin',
      'sonar.password': 'password2023',
      'sonar.projectDescription': 'Description for "Group-Two" project...',
      'sonar.sources': '.',
      'sonar.tests': '.',
      'sonar.inclusions': '.',
      'sonar.testExecutionReportPaths':  'coverage/test-reporter.xml'
    }
  },
  () => {}
);