module.exports = {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'babel',
    coverageReporters: ['cobertura', 'text', 'lcov', 'clover'],
    reporters: ['default', 'jest-junit'],
    testEnvironment: 'node'
};
