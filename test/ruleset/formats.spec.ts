import { allAsyncAPIFormats } from '../../src/ruleset/formats';

describe('AsyncAPI format', () => {
  describe('Recognizes correct versions', () => {
    const testCases = [
      { asyncapi: '2.0.0' },
      { asyncapi: '2.1.3' },
      { asyncapi: '2.2.9' },
      { asyncapi: '2.3.1' },
      { asyncapi: '2.4.9' },
      { asyncapi: '2.5.5' },
      { asyncapi: '2.6.0' },
      { asyncapi: '3.0.11' },
    ];
    it.each(testCases)('recognizes %s document correctly', document => {
      allAsyncAPIFormats.forEach(format => {
        expect(format(document, null)).toBeTruthy();
      })
    });
  });
  
  describe('Does not recognize incorrect versions', () => {
    const testCases = [
      { asyncapi: '3.0' },
      { asyncapi: '2' },
      { asyncapi: '2.0' },
      { asyncapi: '2.0.' },
      { asyncapi: '2.0.01' },
      { asyncapi: '1.0' },
      { asyncapi: 2 },
      { asyncapi: null },
      { openapi: '4.0' },
      { openapi: '2.0' },
      { openapi: null },
      { swagger: null },
      { swagger: '3.0' },
      {},
      null,
    ];

    it.each(testCases)('does not recognize invalid document %o', document => {
      allAsyncAPIFormats.forEach(format => {
        expect(format(document, null)).toBeFalsy();
      })
    });
  });
});
