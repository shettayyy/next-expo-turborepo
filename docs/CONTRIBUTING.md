# Contributing to Edenomics

Welcome to the Edenomics monorepo! This guide will help you understand our development workflow and commit message conventions.

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages. This leads to more readable messages that are easy to follow when looking through the project history and helps us generate changelogs automatically.

### Commit Message Format

Each commit message consists of a **header**, a **body**, and a **footer**. The header has a special format that includes a **type**, a **scope**, and a **subject**:

```bash
<type>(<scope>): <subject>

[optional body]

[optional footer(s)]
```

#### Type

Must be one of the following:

- ✨ `feat`: A new feature
- 🐛 `fix`: A bug fix
- 📚 `docs`: Documentation only changes
- 💎 `style`: Changes that don't affect the meaning of the code (formatting, etc.)
- 📦 `refactor`: A code change that neither fixes a bug nor adds a feature
- 🚀 `perf`: A code change that improves performance
- 🚨 `test`: Adding or modifying tests
- 🛠 `build`: Changes that affect the build system or external dependencies
- ⚙️ `ci`: Changes to CI configuration files and scripts
- ♻️ `chore`: Other changes that don't modify src or test files
- 🗑 `revert`: Reverts a previous commit

#### Scope

The scope should be one of the following:

- `auth`: Authentication related changes
- `dep`: Dependency updates
- `config`: Configuration changes
- `expo`: Expo (mobile) app changes
- `type`: Type system changes
- `util`: Utility functions
- `navigation`: Navigation related changes
- `asset`: Asset files (images, fonts, etc.)
- `component`: Reusable component changes
- `hook`: Custom React hooks
- `screen`: Screen/page components
- `native`: Native platform specific code
- `provider`: Context providers
- `store`: State management
- `notification`: Notification system
- `service`: Service layer changes
- `release`: Release related changes

#### Subject

The subject contains a succinct description of the change:

- use lower case
- don't end with a period
- be imperative: "change" not "changed" nor "changes"

### Examples

```bash
feat(auth): add social login with google
```

```bash
fix(component): resolve button click event propagation
```

```bash
docs(readme): update installation instructions
```

```bash
refactor(hook): simplify useAuth implementation
```

### Breaking Changes

Breaking changes should be noted in the commit footer starting with "BREAKING CHANGE:":

```bash
feat(api): change user authentication endpoint

BREAKING CHANGE: `authenticate` endpoint now requires an API key in headers
```

### Referencing Issues

If the commit is related to an issue, reference it in the footer:

```bash
fix(store): resolve user data persistence

Closes #123
```

## Development Workflow

1. Fork the repository
2. Create a feature branch from `main`
3. Make your changes
4. Write meaningful commit messages following the convention above
5. Push your changes
6. Create a Pull Request

## Monorepo Structure

The repository contains both Next.js and Expo applications:

```bash
edenomics/
├── apps/
│   ├── web/          # Next.js application
│   └── mobile/       # Expo application
├── packages/         # Shared packages
└── ...
```

## Questions?

If you have any questions about contributing, feel free to open an issue for discussion.

---

This guide is based on our commitlint configuration and follows community best practices for contribution guidelines.
