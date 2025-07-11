export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore', 'refactor']],
    'scope-enum': [2, 'always', ['root', 'web', 'server', 'mob']],
  },
};
