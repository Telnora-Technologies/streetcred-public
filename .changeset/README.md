# Changesets

This folder is managed by [Changesets](https://github.com/changesets/changesets).

To record a change that should trigger a release, run:

```bash
pnpm changeset
```

Select the affected packages and a semver bump (`patch`, `minor`, or `major`), then
write a short summary. Commit the generated file in this folder alongside your change.

When changesets are merged to `main`, the Release workflow opens a **Version Packages**
pull request. Merging that PR publishes the updated packages to npm and updates their
changelogs.
