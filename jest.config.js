const { createDefaultPreset } = require("ts-jest/presets")

const tsJestTransformCfg = createDefaultPreset().transform

/** @type {import("jest").Config} **/
export default {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
};