# SecureWebRepo
This repository demonstrates a modern, secure development workflow using GitHub Advanced Security (GHAS). It implements automated dependency scanning, code scanning (CodeQL), and secret scanning with push protection to ensure a robust, production-ready codebase

## Key Features

- Dependency Security: Automatically scans project dependencies for vulnerabilities and generates alerts.

- Code Scanning (CodeQL): Detects potential security flaws and coding errors, with actionable recommendations.

- Secret Scanning & Push Protection: Prevents credentials or sensitive information from being committed to the repository.

- Branch + PR Workflow: All fixes are applied via feature branches and pull requests, using squash merges to maintain a clean commit history.

- Automated Alerts & Remediation: GHAS provides actionable alerts and auto-closes resolved issues to keep the repository secure over time.

# Getting Started

Clone the repository:

    git clone https://github.com/yourusername/SecureWebRepo.git   

Create a feature branch for your changes:

    git checkout -b feature/your-change    

Commit and push your updates, ensuring no secrets are included directly in code. GHAS will automatically scan and alert on vulnerabilities.

## Tech Stack & Tools

- GitHub Advanced Security (GHAS)

- Dependabot for automated dependency updates

- CodeQL for static code analysis

-  JavaScript (demo code for dependency scanning and CodeQL)

## Best Practices

- Always commit fixes through feature branches and PRs.

- Keep GHAS alerts monitored and resolved promptly.

- Use squash merges to prevent historical vulnerabilities from lingering.

- Never store secrets in code—use environment variables or GHAS-protected secrets.

Learning Outcomes

- Hands-on experience with  repository security.

- Understanding of automated dependency and code scanning workflows.

- Knowledge of PR-based remediation for vulnerabilities.

- Experience with integrating GHAS features to maintain a secure, production-ready repository.
