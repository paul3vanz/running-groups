module.exports = {
  name: 'running-groups',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/running-groups',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
