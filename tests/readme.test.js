import { describe, test, expect, beforeAll } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('README Documentation', () => {
  let readmeContent;

  beforeAll(() => {
    readmeContent = fs.readFileSync(path.resolve(__dirname, '../readme.md'), 'utf8');
  });

  // Test Coverage and Testing Status Tests
  test('should contain test status sections', () => {
    expect(readmeContent).toContain('## Testing Status');
    expect(readmeContent).toContain('### Current Test Coverage');
    expect(readmeContent).toContain('### Testing Approach');
    expect(readmeContent).toContain('### Next Steps');
  });

  test('should have meaningful test status information', () => {
    const testStatusSections = [
      'Initial Status',
      'Test Framework',
      'Coverage',
      'Continuous integration',
      'test-driven development'
    ];

    testStatusSections.forEach(section => {
      expect(readmeContent).toContain(section);
    });
  });

  // API Documentation Tests
  test('README should contain API Documentation header', () => {
    expect(readmeContent).toContain('## API Documentation');
  });

  test('README should have Base URL section', () => {
    expect(readmeContent).toContain('### Base URL');
    expect(readmeContent).toContain('https://api.example.com/v1');
  });

  test('README should have Authentication section', () => {
    expect(readmeContent).toContain('### Authentication');
    expect(readmeContent).toContain('Authorization: Bearer {your_access_token}');
  });

  test('README should document User Management endpoints', () => {
    expect(readmeContent).toContain('#### 1. User Management');
    expect(readmeContent).toContain('Create User');
    expect(readmeContent).toContain('`/users/create`');
  });

  test('README should document Authentication endpoints', () => {
    expect(readmeContent).toContain('User Login');
    expect(readmeContent).toContain('`/auth/login`');
  });

  test('README should have Error Handling section', () => {
    expect(readmeContent).toContain('### Error Handling');
  });

  test('README should include Security Recommendations', () => {
    expect(readmeContent).toContain('### Security Recommendations');
    expect(readmeContent).toContain('1. Always use HTTPS');
  });

  test('README should have Versioning information', () => {
    expect(readmeContent).toContain('### Versioning');
    expect(readmeContent).toContain('Current API Version: `v1`');
  });
});