# Security

## Purpose

This directory houses information about security in Git.

## Best practices sensitive files to keep secure

[See `Best practices sensitive files to keep secure` of https://trello.com/c/GYruL063/167-familiarize-about-sensitive-files-to-keep-off-of-github-and-personal-dashboard#comment-65e76548e1ceb9b9ea814269]

## Options

Security options through GitHub

### Private vulnerability reporting

> [Allow your community to privately report potential security vulnerabilities to maintainers and repository owners.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

In light of what is poste [here](https://docs.github.com/en/code-security/security-advisories/guidance-on-reporting-and-writing-information-about-vulnerabilities/privately-reporting-a-security-vulnerability#about-privately-reporting-a-security-vulnerability) there is currently no benefit of me using this feature. My repos are too small - no one else uses them.

Default: Disabled

### Dependency graph

> [Understand your dependencies.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

> [Dependency graph is always enabled for public repos.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

Mandatory: Enabled

### Dependabot

> [Keep your dependencies secure and up-to-date.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

> [Dependabot keeps your dependencies up to date by informing you of any security vulnerabilities in your dependencies, and automatically opens pull requests to upgrade your dependencies to the next available secure version when a Dependabot alert is triggered, or to the latest version when a release is published.](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security#what-is-dependabot)

- Dependabot alerts — Displayed notification on the Security tab for the repository, and in the repository's dependency graph. The alert includes a link to the affected file in the project, and information about a fixed version.
- Dependabot updates:
  - Dependabot security updates—Triggered updates to upgrade your dependencies to a secure version when an alert is triggered.
  - Dependabot version updates—Scheduled updates to keep your dependencies up to date with the latest version.

#### Dependabot alerts

> [](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

> [Dependabot alerts highlight repositories affected by a newly discovered vulnerability based on the dependency graph and the GitHub Advisory Database, which contains advisories for known vulnerabilities.](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security#what-are-dependabot-alerts)

- Dependabot performs a scan to detect insecure dependencies and sends Dependabot alerts when:
  - A new advisory is added to the GitHub Advisory Database.
  - The dependency graph for the repository changes.
- Dependabot alerts are displayed on the Security tab for the repository and in the repository's dependency graph. The alert includes a link to the affected file in the project, and information about a fixed version.

**NOTE -** Dependabot alert rules can be modified and enabled/disabled.

Default: Enabled

Default: 1 rule enabled

#### Dependabot security updates

> [](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

> [There are two types of Dependabot updates: Dependabot security updates and version updates. Dependabot generates automatic pull requests to update your dependencies in both cases, but there are several differences.](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/about-supply-chain-security#what-are-dependabot-updates)

- Dependabot security updates:
  - Triggered by a Dependabot alert
  - Update dependencies to the minimum version that resolves a known vulnerability
  - Supported for ecosystems the dependency graph supports
  - Does not require a configuration file, but you can use one to override the default behavior
- Dependabot version updates:
  - Requires a configuration file
  - Run on a schedule you configure
  - Update dependencies to the latest version that matches the configuration
  - Supported for a different group of ecosystems

Default: Enabled

#### Grouped security updates

> [Groups all available updates that resolve a Dependabot alert into one pull request (per package manager and directory of requirement manifests). This option may be overridden by group rules specified in dependabot.yml](https://github.com/JamieBort/Portfolio-Website/settings/security_analysis)

> [You can use the dependabot.yml file to create separate rules to group Dependabot version updates and Dependabot security updates.](https://docs.github.com/en/enterprise-cloud@latest/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#groups)

Default: Disabled

#### Dependabot version updates

> [Allow Dependabot to open pull requests automatically to keep your dependencies up-to-date when new versions are available.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

[About version updates for dependencies](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuring-dependabot-version-updates#about-version-updates-for-dependencies)

> You enable Dependabot version updates by checking a dependabot.yml configuration file in to ...

Default: Disabled

### Code scanning

> [Automatically detect common vulnerabilities and coding errors.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

#### CodeQL analysis (Set up)

> [Identify vulnerabilities and errors with CodeQL for eligible repositories.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

#### Other tools

> [Add any third-party code scanning tool.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

#### Check runs failure threshold (High or higher/Only errors)

> [Select the alert severity level for code scanning check runs to fail. Create a branch ruleset to prevent a branch from merging when these checks fail.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

### Secret Scanning

> [Receive alerts on GitHub for detected secrets, keys, or other tokens.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

Default: Disabled

#### Push protection

**NOTE -** Not visible until [Secret Scanning](./README.md#secret-scanning) is enabled.

> [Block commits that contain supported secrets.](https://github.com/JamieBort/LearningDirectory/settings/security_analysis)

Default: Disabled

## Resources

- https://trello.com/c/GYruL063/167-familiarize-about-sensitive-files-to-keep-off-of-github-and-personal-dashboard

- https://trello.com/c/LD9EOfZ1/268-enable-github-code-scanning-across-all-of-my-repos

- https://github.com/JamieBort/Personal-Dashboard/issues/30

- Establish Security Measures #35

  https://github.com/JamieBort/Personal-Dashboard/issues/35

- [Using secrets in GitHub Actions](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions)

  > Secrets allow you to store sensitive information in your organization, repository, or repository environments.

- [How to keep your repository’s sensitive data secure using git-secret](https://medium.com/@GeorgiosGoniotakis/how-to-keep-your-repositorys-sensitive-data-secure-using-git-secret-c1ddc28cb985) May 13, 2018 Medium article by Georgios Goniotakis.

  (Also saved in [Resources](../../Security/README.md#resources) section of the README file in the Security/ directory.)

- [Software Security](https://github.com/jbelmont/software-security-workshop) workshop by jbelmont.

  (Also saved in [Resources](../../Security/README.md#resources) section of the README file in the Security/ directory.)

### GitHub Services/Features

#### Code Scanning

- https://trello.com/c/LD9EOfZ1/268-enable-github-code-scanning-across-all-of-my-repos

- https://github.com/JamieBort/Personal-Dashboard/issues/30

- https://blog.gitguardian.com/top-10-file-extensions/

#### Secret Scanning

- [About secret scanning](https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning)
  > GitHub scans repositories for known types of secrets, to prevent fraudulent use of secrets that were committed accidentally.

## Directories and Files

### Directories

### Files

#### [README](./README.md)

This readme file.
